"use client"

import { useEffect, useRef, useState } from "react"

type Direction = "left" | "right" | "top" | "bottom"

interface TabFadeInProps {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
}

function getInitialTransform(direction: Direction): string {
  switch (direction) {
    case "left":
      return "translateX(-40px)"
    case "right":
      return "translateX(40px)"
    case "top":
      return "translateY(-30px)"
    case "bottom":
      return "translateY(30px)"
  }
}

export default function TabFadeIn({
  children,
  direction = "bottom",
  delay = 0,
  duration = 600,
  className = "",
}: TabFadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0)" : getInitialTransform(direction),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
