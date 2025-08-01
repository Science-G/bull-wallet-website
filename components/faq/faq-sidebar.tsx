"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import type { FaqCategory } from "@/data/faq-data"

interface FaqSidebarProps {
  categories: FaqCategory[]
  activeCategoryId: string
  activeItemId: string
  onCategoryChange: (categoryId: string) => void
  onItemChange: (itemId: string) => void
}

export default function FaqSidebar({
  categories,
  activeCategoryId,
  activeItemId,
  onCategoryChange,
  onItemChange,
}: FaqSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    // Initialize with the active category expanded
    const expanded: Record<string, boolean> = {}
    categories.forEach((category) => {
      expanded[category.id] = category.id === activeCategoryId
    })
    return expanded
  })

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
    onCategoryChange(categoryId)
  }

  return (
    <div className="h-full overflow-y-auto bg-zinc-900 border-r border-zinc-800 py-6 px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">FAQ</h1>
        <p className="text-zinc-400 text-sm">Find answers to common questions</p>
      </div>

      <nav className="space-y-1">
        {categories.map((category) => (
          <div key={category.id} className="mb-2">
            <button
              onClick={() => toggleCategory(category.id)}
              className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeCategoryId === category.id
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <span className="font-medium">{category.title}</span>
              {expandedCategories[category.id] ? (
                <ChevronDown size={18} className="flex-shrink-0" />
              ) : (
                <ChevronRight size={18} className="flex-shrink-0" />
              )}
            </button>

            {expandedCategories[category.id] && (
              <div className="mt-1 ml-4 space-y-1">
                {category.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onItemChange(item.id)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      activeItemId === item.id
                        ? "bg-red-600/20 text-red-500"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}
