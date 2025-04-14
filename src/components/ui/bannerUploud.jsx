"use client"

import * as React from "react"
import { useState, useRef } from "react"
import { UploadCloud, X } from "lucide-react"
import { cn } from "@/lib/utils"

const BannerUpload = React.forwardRef(({ className, ...props }, ref) => {
  const [preview, setPreview] = useState(null)
  const inputRef = useRef()

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = (e) => {
    e.stopPropagation() // evita trigger do input ao clicar no botão
    setPreview(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <div className="w-full">
      <label className="text-base text-FI_input_label font-semibold">Banner</label>
      <label
        htmlFor={props.id}
        className={cn(
          "relative flex flex-col items-center justify-center w-full h-64 bg-white border-2 border-dashed border-FI_input_stroke rounded-md cursor-pointer transition hover:bg-blue-50 text-gray-500 text-sm",
          preview ? "p-0" : "p-4",
          className
        )}
      >
        {preview ? (
          <>
            <img
              src={preview}
              alt="Preview"
              className="object-cover w-full h-full rounded-md"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-red-200 text-red-500 rounded-full p-1 transition hover:bg-red-950"
            >
              <X className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <UploadCloud className="w-8 h-8 mb-2 text-gray-400" />
            <span className="text-center">Clique aqui para subir uma imagem.</span>
          </>
        )}

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
          ref={(el) => {
            inputRef.current = el
            if (typeof ref === "function") {
              ref(el)
            } else if (ref) {
              ref.current = el
            }
          }}
          {...props}
        />
      </label>
    </div>
  )
})

BannerUpload.displayName = "BannerUpload"
export { BannerUpload }
