"use client"

import { useState, useEffect } from "react"

export default function GitBookTestPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")
  const [details, setDetails] = useState<any>(null)

  useEffect(() => {
    async function testGitBookApi() {
      try {
        setStatus("loading")
        setMessage("Testing GitBook API connection...")

        const response = await fetch("/api/gitbook")
        const data = await response.json()

        if (response.ok) {
          setStatus("success")
          setMessage("Successfully connected to GitBook API!")
          setDetails(data)
        } else {
          setStatus("error")
          setMessage(`Error: ${data.error || "Unknown error"}`)
          setDetails(data)
        }
      } catch (error) {
        setStatus("error")
        setMessage(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
      }
    }

    testGitBookApi()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-4">GitBook API Test</h1>

      <div
        className={`p-4 rounded-md mb-6 ${
          status === "loading"
            ? "bg-blue-900/30 border border-blue-700"
            : status === "success"
              ? "bg-green-900/30 border border-green-700"
              : "bg-red-900/30 border border-red-700"
        }`}
      >
        <p
          className={`font-medium ${
            status === "loading" ? "text-blue-400" : status === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      </div>

      {status === "success" && details && (
        <div>
          <h2 className="text-xl font-semibold mb-2">API Response:</h2>
          <div className="bg-zinc-900 p-4 rounded-md overflow-auto max-h-[500px]">
            <pre className="text-sm text-zinc-300">{JSON.stringify(details, null, 2)}</pre>
          </div>
        </div>
      )}

      {status === "error" && details && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-red-400">Error Details:</h2>
          <div className="bg-zinc-900 p-4 rounded-md overflow-auto max-h-[500px]">
            <pre className="text-sm text-zinc-300">{JSON.stringify(details, null, 2)}</pre>
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Troubleshooting Steps:</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Verify that your GitBook API key is correct and has read permissions</li>
          <li>Verify that your GitBook Space ID is correct</li>
          <li>Check that your GitBook space has collections and pages with content</li>
          <li>Ensure your environment variables are correctly set in your .env.local file</li>
          <li>Check the browser console and server logs for detailed error messages</li>
        </ol>
      </div>
    </div>
  )
}
