"use client"

import { useEffect, useState } from "react"
import MetallicPaint, { parseLogoImage } from "../../metallic-paint-hYPnZT2G28YWVMtKSSL368RSju0ldJ"

const defaultParams = {
  patternScale: 1.5,
  refraction: 0.02,
  edge: 0.8,
  patternBlur: 0.008,
  liquid: 0.1,
  speed: 0.2,
}

export default function MetallicLogo() {
  const [imageData, setImageData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadLogoImage = async () => {
      try {
        // Create a simple NOVA text as SVG since we don't have the actual logo file
        const svgContent = `
          <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>
                .logo-text {
                  font-family: 'Arial', sans-serif;
                  font-weight: bold;
                  font-size: 72px;
                  fill: black;
                }
              </style>
            </defs>
            <rect width="400" height="200" fill="white"/>
            <text x="200" y="120" textAnchor="middle" class="logo-text">NOVA</text>
          </svg>
        `

        const blob = new Blob([svgContent], { type: "image/svg+xml" })
        const file = new File([blob], "nova-logo.svg", { type: "image/svg+xml" })

        const result = await parseLogoImage(file)
        setImageData(result.imageData)
        setIsLoading(false)
      } catch (error) {
        console.error("Error loading logo:", error)
        setIsLoading(false)
      }
    }

    loadLogoImage()
  }, [])

  if (isLoading) {
    return (
      <div className="metallic-logo-container">
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      </div>
    )
  }

  if (!imageData) {
    return (
      <div className="metallic-logo-container">
        <div className="flex items-center justify-center h-full text-white">
          <span>Logo not available</span>
        </div>
      </div>
    )
  }

  return (
    <div className="metallic-logo-container">
      <MetallicPaint imageData={imageData} params={defaultParams} />
    </div>
  )
}
