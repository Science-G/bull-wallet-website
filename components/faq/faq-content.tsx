import type { FaqCategory } from "@/data/faq-data"

interface FaqContentProps {
  categories: FaqCategory[]
  activeCategoryId: string
  activeItemId: string
}

export default function FaqContent({ categories, activeCategoryId, activeItemId }: FaqContentProps) {
  // Find the active category and item
  const activeCategory = categories.find((cat) => cat.id === activeCategoryId)
  const activeItem = activeCategory?.items.find((item) => item.id === activeItemId)

  if (!activeCategory || !activeItem) {
    return (
      <div className="py-8 px-6">
        <p>Select a topic from the sidebar to view content.</p>
      </div>
    )
  }

  return (
    <div className="py-8 px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">{activeItem.title}</h2>
        <div className="flex items-center text-sm text-zinc-400">
          <span>{activeCategory.title}</span>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        {activeItem.content.map((paragraph, index) => {
          if (paragraph.type === "heading") {
            return (
              <h3 key={index} className="text-xl font-semibold mt-6 mb-4">
                {paragraph.text}
              </h3>
            )
          } else if (paragraph.type === "subheading") {
            return (
              <h4 key={index} className="text-lg font-medium mt-5 mb-3">
                {paragraph.text}
              </h4>
            )
          } else if (paragraph.type === "list") {
            return (
              <ul key={index} className="list-disc pl-6 my-4 space-y-2">
                {paragraph.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )
          } else if (paragraph.type === "note") {
            return (
              <div key={index} className="bg-zinc-800/50 border-l-4 border-yellow-500 p-4 my-4 rounded-r">
                <p className="text-yellow-300 font-medium mb-1">Note</p>
                <p className="text-zinc-300">{paragraph.text}</p>
              </div>
            )
          } else if (paragraph.type === "warning") {
            return (
              <div key={index} className="bg-zinc-800/50 border-l-4 border-red-500 p-4 my-4 rounded-r">
                <p className="text-red-400 font-medium mb-1">Warning</p>
                <p className="text-zinc-300">{paragraph.text}</p>
              </div>
            )
          } else if (paragraph.type === "table") {
            return (
              <div key={index} className="overflow-x-auto my-6">
                <table className="min-w-full border border-zinc-800 rounded-md">
                  <thead>
                    <tr className="bg-zinc-800">
                      {paragraph.headers.map((header, headerIndex) => (
                        <th key={headerIndex} className="px-4 py-3 text-left text-sm font-medium text-zinc-300">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {paragraph.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-zinc-900" : "bg-zinc-950"}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 text-sm text-zinc-300 border-t border-zinc-800">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          } else {
            // Default paragraph
            return (
              <p key={index} className="my-4 text-zinc-300 leading-relaxed">
                {paragraph.text}
              </p>
            )
          }
        })}
      </div>
    </div>
  )
}
