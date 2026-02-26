"use client"

interface LogoProps {
  stacked?: boolean
}

export function Logo({ stacked = false }: LogoProps) {
  if (stacked) {
    // Vertical variant: flex-col, gap handled by negative margin
    return (
      <div className="flex flex-col items-start gap-0">
        {/* Anti-Raids: 26px, 700, 110%, -0.03em, black with red shadow */}
        <div
          className="text-[26px] font-bold leading-[110%] tracking-[-0.03em] text-[#030020]"
          style={{ textShadow: "1px 1px 0px #D71D00" }}
        >
          Anti-Raids
        </div>
        {/* Network: 26px, 700, 110%, -0.03em, red, margin-top -7px */}
        <div
          className="text-[26px] font-bold leading-[110%] tracking-[-0.03em] text-[#D71D00]"
          style={{ marginTop: "-7px" }}
        >
          Network
        </div>
      </div>
    )
  }

  // Horizontal variant: flex-row, gap 3px
  return (
    <div className="flex flex-row items-center gap-[3px]">
      {/* Anti-Raids: 26px, 700, 110%, -0.03em, black with red shadow */}
      <div
        className="text-[26px] font-bold leading-[110%] tracking-[-0.03em] text-[#030020]"
        style={{ textShadow: "1px 1px 0px #D71D00" }}
      >
        Anti-Raids
      </div>
      {/* Network: 26px, 700, 110%, -0.03em, red */}
      <div className="text-[26px] font-bold leading-[110%] tracking-[-0.03em] text-[#D71D00]">
        Network
      </div>
    </div>
  )
}
