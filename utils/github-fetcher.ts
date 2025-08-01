// Types for GitHub API responses
interface GitHubContent {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: string
  content?: string
  encoding?: string
}

// Function to fetch directory contents from GitHub
export async function fetchGitHubDirectory(path = ""): Promise<GitHubContent[]> {
  const url = `https://api.github.com/repos/SatoshiPortal/wasabiwallet-guide/contents/${path}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub directory: ${response.statusText}`)
  }

  return response.json()
}

// Function to fetch file content from GitHub
export async function fetchGitHubFile(path: string): Promise<string> {
  const url = `https://api.github.com/repos/SatoshiPortal/wasabiwallet-guide/contents/${path}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub file: ${response.statusText}`)
  }

  const data: GitHubContent = await response.json()

  // GitHub API returns content as base64 encoded
  if (data.content && data.encoding === "base64") {
    return atob(data.content.replace(/\n/g, ""))
  }

  return ""
}

// Parse markdown content into our FAQ structure
export function parseMarkdownToFaqContent(markdown: string): FaqParagraph[] {
  const lines = markdown.split("\n")
  const content: FaqParagraph[] = []

  let currentList: string[] = []
  let inList = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    if (line.startsWith("# ")) {
      // Main heading - we'll skip these as they're usually the title
      continue
    } else if (line.startsWith("## ")) {
      // Section heading
      if (inList) {
        content.push({ type: "list", items: [...currentList] })
        currentList = []
        inList = false
      }
      content.push({ type: "heading", text: line.substring(3).trim() })
    } else if (line.startsWith("### ")) {
      // Subsection heading
      if (inList) {
        content.push({ type: "list", items: [...currentList] })
        currentList = []
        inList = false
      }
      content.push({ type: "subheading", text: line.substring(4).trim() })
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      // List item
      inList = true
      currentList.push(line.substring(2).trim())
    } else if (line.startsWith("> ")) {
      // Note or warning
      if (inList) {
        content.push({ type: "list", items: [...currentList] })
        currentList = []
        inList = false
      }

      const noteText = line.substring(2).trim()
      if (noteText.toLowerCase().includes("warning") || noteText.toLowerCase().includes("caution")) {
        content.push({ type: "warning", text: noteText })
      } else {
        content.push({ type: "note", text: noteText })
      }
    } else if (line.length > 0) {
      // Regular paragraph
      if (inList) {
        content.push({ type: "list", items: [...currentList] })
        currentList = []
        inList = false
      }
      content.push({ type: "text", text: line })
    }
  }

  // Add any remaining list items
  if (inList && currentList.length > 0) {
    content.push({ type: "list", items: [...currentList] })
  }

  return content
}

// Convert GitHub directory structure to our FAQ data structure
export async function convertGitHubToFaqData(): Promise<FaqData> {
  try {
    // Fetch top-level directories (categories)
    const rootContents = await fetchGitHubDirectory()
    const directories = rootContents.filter((item) => item.type === "dir")

    // Create categories from directories
    const categories: FaqCategory[] = []

    for (const dir of directories) {
      // Skip directories that don't look like documentation
      if (dir.name.startsWith(".") || ["images", "assets", "media"].includes(dir.name.toLowerCase())) {
        continue
      }

      // Fetch files in this directory
      const dirContents = await fetchGitHubDirectory(dir.path)
      const markdownFiles = dirContents.filter((item) => item.type === "file" && item.name.endsWith(".md"))

      // Create items from markdown files
      const items: FaqItem[] = []

      for (const file of markdownFiles) {
        // Skip README files
        if (file.name.toLowerCase() === "readme.md") {
          continue
        }

        // Fetch and parse file content
        const markdown = await fetchGitHubFile(file.path)
        const content = parseMarkdownToFaqContent(markdown)

        // Extract title from filename or first heading
        let title = file.name.replace(".md", "")
        title = title.charAt(0).toUpperCase() + title.slice(1).replace(/-/g, " ")

        // Create item
        items.push({
          id: file.name.toLowerCase().replace(".md", "").replace(/\s+/g, "-"),
          title,
          content,
        })
      }

      if (items.length > 0) {
        // Format category title
        const categoryTitle = dir.name.charAt(0).toUpperCase() + dir.name.slice(1).replace(/-/g, " ")

        categories.push({
          id: dir.name.toLowerCase().replace(/\s+/g, "-"),
          title: categoryTitle,
          items,
        })
      }
    }

    return { categories }
  } catch (error) {
    console.error("Error converting GitHub data:", error)
    // Return empty data structure on error
    return { categories: [] }
  }
}

// Import types from faq-data.ts
import type { FaqData, FaqCategory, FaqItem, FaqParagraph } from "@/data/faq-data"
