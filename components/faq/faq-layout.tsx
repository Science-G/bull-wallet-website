"use client"

import { useState, useEffect } from "react"
import FaqSidebar from "./faq-sidebar"
import FaqContent from "./faq-content"
import { faqData } from "@/data/faq-data"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Menu, X } from "lucide-react"

export default function FaqLayout() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("getting-started")
  const [activeItemId, setActiveItemId] = useState<string>("what-is-bull-bitcoin")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Close sidebar on mobile by default
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isMobile])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId)
    // Set the first item of the category as active
    const firstItem = faqData.categories.find((cat) => cat.id === categoryId)?.items[0]
    if (firstItem) {
      setActiveItemId(firstItem.id)
    }
  }

  const handleItemChange = (itemId: string) => {
    setActiveItemId(itemId)
    // On mobile, close the sidebar after selecting an item
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  return (
    <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24">
      {/* Mobile sidebar toggle */}
      <button
        className="md:hidden fixed bottom-6 right-6 z-50 bg-red-600 text-white p-3 rounded-full shadow-lg"
        onClick={toggleSidebar}
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-40 w-[280px] md:w-[300px] h-full transition-all duration-300 ease-in-out ${
          sidebarOpen ? "left-0" : "-left-[280px] md:left-0"
        }`}
      >
        <FaqSidebar
          categories={faqData.categories}
          activeCategoryId={activeCategoryId}
          activeItemId={activeItemId}
          onCategoryChange={handleCategoryChange}
          onItemChange={handleItemChange}
        />
      </div>

      {/* Content */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${sidebarOpen && isMobile ? "opacity-30" : "opacity-100"}`}
      >
        <FaqContent categories={faqData.categories} activeCategoryId={activeCategoryId} activeItemId={activeItemId} />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
