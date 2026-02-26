import { Mail } from "lucide-react"

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#030020">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#030020">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

const btnShadow = { boxShadow: "2px 2px 0px #030020" }
const btnClass =
  "flex flex-row items-center gap-[8px] px-[12px] h-[48px] bg-white border border-[#BEC4CE] text-[#030020]"

export function SiteFooter() {
  return (
    // Footer/M: padding-top 40px, gap 60px between inner groups
    <footer className="flex flex-col gap-[60px] px-[20px] pt-[40px] pb-[40px]">
      {/* Contact block */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[10px]">
          {/* H2: 26px, 700, 110%, -0.03em */}
          <h2 className="text-[26px] font-bold leading-[110%] tracking-[-0.03em] text-[#030020]">
            Contact the network
          </h2>
        </div>

        {/* Social buttons: flex-wrap, gap 20px */}
        <div className="flex flex-row flex-wrap gap-[20px]">
          <a
            href="mailto:antiraids@riseup.net"
            className={btnClass}
            style={{ ...btnShadow, width: "226px" }}
          >
            <Mail size={24} color="#030020" />
            <span className="text-[18px] font-normal leading-[140%] tracking-[-0.02em] underline text-[#030020]">
              antiraids at riseup.net
            </span>
          </a>

          <a
            href="https://x.com/AntiRaids"
            target="_blank"
            rel="noopener noreferrer"
            className={btnClass}
            style={{ ...btnShadow, width: "148px" }}
          >
            <XIcon />
            <span className="text-[18px] font-normal leading-[140%] tracking-[-0.02em] underline text-[#030020]">
              @AntiRaids
            </span>
          </a>

          <a
            href="https://facebook.com/AntiRaids"
            target="_blank"
            rel="noopener noreferrer"
            className={btnClass}
            style={{ ...btnShadow, width: "132px" }}
          >
            <FacebookIcon />
            <span className="text-[18px] font-normal leading-[140%] tracking-[-0.02em] underline text-[#030020]">
              AntiRaids
            </span>
          </a>
        </div>
      </div>

      {/* "No One Is Illegal" stamp */}
      <div className="flex items-center justify-center py-4">
        <div className="border-4 border-[#030020] px-4 py-3 text-center rotate-[-3deg]">
          <p className="text-[28px] font-black uppercase text-[#030020] leading-none tracking-tight">
            No One Is
            <br />
            Illegal
          </p>
        </div>
      </div>
    </footer>
  )
}
