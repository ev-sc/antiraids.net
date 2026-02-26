"use client"

import { LocateFixed, Minus, Plus, Search } from "lucide-react"
import { useState } from "react"

const regions = [
  "East Anglia",
  "London",
  "North",
  "North West",
  "Scotland",
  "South",
  "South East",
  "South West",
]

const inputShadow = { boxShadow: "2px 2px 0px #030020" }

export function FindGroupSection() {
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null)

  return (
    // Local groups: padding 40px 0px, gap 40px between subsections, border-top
    <section
      className="flex flex-col gap-[40px] px-[20px] pt-[40px] pb-[40px] border-t border-[#BEC4CE]"
      id="find-group"
    >
      {/* Header group: flex-col, gap 10px */}
      <div className="flex flex-col gap-[10px]">
        {/* H1: 40px, 700, 42px line-height, -0.05em */}
        <h2 className="text-[40px] font-bold leading-[42px] tracking-[-0.05em] text-[#030020]">
          Find your local group
        </h2>
        {/* Body/Reg: 18px, 400, 140%, -0.02em */}
        <p className="text-[18px] font-normal leading-[140%] tracking-[-0.02em] text-[#030020]">
          Hic saepe voluptate ut illo omnis dignissimos. Consequuntur enim est dignissimos dolorem
          earum ipsum consequatur aut inventore.
        </p>

        {/* Search row: gap 15px */}
        <div className="flex flex-row gap-[15px]">
          {/* Search input: white bg, #BEC4CE border, 2px shadow, border-radius 0 */}
          <div
            className="flex flex-1 flex-row items-center justify-between bg-white border border-[#BEC4CE] px-[10px] h-[48px]"
            style={inputShadow}
          >
            <input
              type="text"
              placeholder="Search by postcode or area…"
              className="flex-1 bg-transparent text-[18px] font-normal leading-[140%] tracking-[-0.02em] text-[#030020] placeholder:text-[#BEC4CE] outline-none"
            />
            <Search size={24} color="#030020" />
          </div>
          {/* Location button: 48x48 */}
          <button
            type="button"
            className="flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center bg-white border border-[#BEC4CE]"
            style={inputShadow}
            aria-label="Use my location"
          >
            <LocateFixed size={24} color="#13003F" />
          </button>
        </div>
      </div>

      {/* Map: 555px tall, light blue bg */}
      <div
        className="relative w-full overflow-hidden border border-[#BEC4CE]"
        style={{ height: "555px", background: "#E6F9FF" }}
      >
        {/* Simplified UK SVG map */}
        <svg
          viewBox="0 0 355 555"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sea background */}
          <rect width="355" height="555" fill="#E6F9FF" />
          {/* England & Wales rough shape */}
          <path
            d="M155 200 C148 190, 142 178, 145 165 C140 155, 138 140, 145 130 C142 120, 148 110, 155 105 C160 95, 168 88, 175 85 C182 82, 192 83, 198 87 C205 91, 210 100, 210 110 C215 118, 212 128, 208 135 C212 145, 210 155, 205 163 C208 173, 205 183, 198 190 C202 200, 200 210, 195 218 C198 228, 195 238, 188 244 C192 254, 190 265, 183 272 C186 282, 184 293, 177 300 C180 310, 178 322, 170 330 C173 342, 168 352, 160 358 C158 368, 155 378, 150 385 C148 393, 145 402, 140 408 L155 415 C162 410, 170 408, 178 410 C185 412, 190 418, 190 425 C188 432, 182 436, 175 437 C168 438, 162 434, 158 428 L148 422 C143 428, 138 432, 132 432 C126 430, 122 424, 124 418 C126 412, 132 410, 138 412 L140 408 C135 400, 132 390, 133 380 C132 370, 135 360, 140 352 C138 342, 140 330, 145 322 C142 312, 144 300, 150 292 C147 282, 148 270, 154 262 C150 252, 152 240, 158 232 C154 222, 155 210, 155 200 Z"
            fill="#D9D9D9"
            stroke="#BEC4CE"
            strokeWidth="1.2"
          />
          {/* Scotland rough shape */}
          <path
            d="M155 200 C150 188, 148 175, 152 162 C148 150, 150 136, 158 128 C155 118, 158 105, 165 98 C162 86, 166 72, 173 65 C170 53, 174 40, 182 35 C178 24, 183 12, 190 8 C196 4, 204 5, 208 12 C213 8, 220 8, 224 14 C228 20, 226 28, 220 32 C224 38, 222 46, 216 50 C220 57, 218 65, 212 70 C215 78, 212 87, 205 91 C208 100, 205 110, 198 115 C200 124, 197 133, 190 138 C192 148, 188 158, 180 163 C182 173, 178 183, 170 188 L165 195 Z"
            fill="#D9D9D9"
            stroke="#BEC4CE"
            strokeWidth="1.2"
          />
        </svg>

        {/* Cluster markers — Scotland area */}
        <div
          className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-[#D71D00] text-white text-sm font-bold"
          style={{ top: "12%", left: "48%" }}
        >
          2
        </div>
        {/* North cluster */}
        <div
          className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-[#D71D00] text-white text-sm font-bold"
          style={{ top: "38%", left: "52%" }}
        >
          5
        </div>
        {/* London/South cluster */}
        <div
          className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-[#D71D00] text-white text-sm font-bold"
          style={{ top: "68%", left: "44%" }}
        >
          11
        </div>

        {/* Map zoom controls */}
        <div className="absolute right-2 top-2 flex flex-col border border-[#BEC4CE] bg-white">
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center border-b border-[#BEC4CE] text-[#030020]"
            aria-label="Zoom in"
          >
            <Plus size={14} />
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center text-[#030020]"
            aria-label="Zoom out"
          >
            <Minus size={14} />
          </button>
        </div>
      </div>

      {/* Region accordion list */}
      <div className="flex flex-col">
        {regions.map((region) => (
          <div key={region} className="border-b border-[#BEC4CE]">
            <button
              type="button"
              onClick={() => setExpandedRegion(expandedRegion === region ? null : region)}
              className="flex w-full items-center justify-between py-[14px] text-left"
            >
              {/* Region name: bold, underline, ~20px */}
              <span className="text-[18px] font-bold leading-[110%] tracking-[-0.02em] underline text-[#030020]">
                {region}
              </span>
              <span className="text-[#030020]">
                {expandedRegion === region ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            {expandedRegion === region && (
              <div className="pb-[14px] text-[14px] leading-[140%] text-[#030020]">
                Local groups and contacts for {region} will be listed here.
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
