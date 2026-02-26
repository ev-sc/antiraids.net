"use client"

import { Icon } from "./atoms/icon"

export function ContactSection({ id }: { id?: string }) {
  return (
    <section className="px-[20px] pt-10" id={id}>
      {/* H2: 26px, 700, 110%, -0.03em */}
      <h2 className="text-[26px] font-bold leading-[110%] tracking-[-0.03em] text-[#030020]">
        Contact the network
      </h2>

      {/* Social media: flex-wrap, gap 20px */}
      <div className="mt-[20px] flex flex-row flex-wrap gap-[20px]">
        {/* Email button */}
        <a
          href="mailto:antiraids@riseup.net"
          className="flex flex-row items-center gap-[8px] px-[12px] h-[48px] bg-white border border-[#BEC4CE] text-[#030020]"
          style={{ width: "226px", boxShadow: "2px 2px 0px #030020" }}
        >
          <Icon type="envelope" size={24} />
          <span className="text-[18px] font-normal leading-[140%] tracking-[-0.02em] underline text-[#030020]">
            antiraids at riseup.net
          </span>
        </a>

        {/* X button */}
        <a
          href="https://x.com/AntiRaids"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-[8px] px-[12px] h-[48px] bg-white border border-[#BEC4CE] text-[#030020]"
          style={{ width: "148px", boxShadow: "2px 2px 0px #030020" }}
        >
          <Icon type="x" size={24} />
          <span className="text-[18px] font-normal leading-[140%] tracking-[-0.02em] underline text-[#030020]">
            @AntiRaids
          </span>
        </a>

        {/* Facebook button */}
        <a
          href="https://facebook.com/AntiRaids"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-[8px] px-[12px] h-[48px] bg-white border border-[#BEC4CE] text-[#030020]"
          style={{ width: "132px", boxShadow: "2px 2px 0px #030020" }}
        >
          <Icon type="facebook" size={24} />
          <span className="text-[18px] font-normal leading-[140%] tracking-[-0.02em] underline text-[#030020]">
            AntiRaids
          </span>
        </a>
      </div>
    </section>
  )
}
