"use client"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

let globalIndex = 0
let globalListeners: ((index: number) => void)[] = []
setInterval(() => { globalIndex++; globalListeners.forEach(l => l(globalIndex)) }, 3000)

interface ImageCarouselProps { images: string[]; alt: string; autoPlay?: boolean }

export function ImageCarousel({ images, alt, autoPlay = true }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)

  const goTo = useCallback((index: number) => {
    setFade(false)
    setTimeout(() => { setCurrent(index % images.length); setFade(true) }, 150)
  }, [images.length])

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return
    globalListeners.push(goTo)
    return () => { globalListeners = globalListeners.filter(l => l !== goTo) }
  }, [autoPlay, images.length, goTo])

  if (!images.length) return null

  return (
    <div className="relative w-full h-full group/carousel">
      <img
        src={images[current]}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ opacity: fade ? 1 : 0, transition: "opacity 0.15s" }}
      />
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); setFade(false); setTimeout(() => { setCurrent(c => c === 0 ? images.length-1 : c-1); setFade(true) }, 150) }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full hidden group-hover/carousel:flex items-center justify-center shadow-md z-30">
            <ChevronLeft className="w-4 h-4 text-[#1B2B5E]" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setFade(false); setTimeout(() => { setCurrent(c => c === images.length-1 ? 0 : c+1); setFade(true) }, 150) }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full hidden group-hover/carousel:flex items-center justify-center shadow-md z-30">
            <ChevronRight className="w-4 h-4 text-[#1B2B5E]" />
          </button>
        </>
      )}
    </div>
  )
}