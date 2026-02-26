"use client"

import { Select } from "./atoms/select"

interface FilterByProps {
  onContentTypeChange?: (value: string) => void
  onSituationChange?: (value: string) => void
  onLanguageChange?: (value: string) => void
  isActive?: boolean
}

export function FilterBy({
  onContentTypeChange,
  onSituationChange,
  onLanguageChange,
  isActive = false,
}: FilterByProps) {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* Filter By label */}
      <div className="px-[20px]">
        <p className="text-[14px] font-bold leading-[140%] tracking-[-0.02em] text-[#030020]">
          FILTER BY:
        </p>
      </div>

      {/* Content type dropdown */}
      <Select
        label="Content type"
        options={["All Content", "Guide", "Resource", "News"]}
        onChange={onContentTypeChange}
        isActive={isActive}
      />

      {/* Situation dropdown */}
      <Select
        label="Situation"
        options={["All Situations", "During a Raid", "After a Raid", "Prevention"]}
        onChange={onSituationChange}
        isActive={isActive}
      />

      {/* Language dropdown */}
      <Select
        label="Language"
        options={["English", "Spanish", "French", "Polish"]}
        onChange={onLanguageChange}
        isActive={isActive}
      />
    </div>
  )
}
