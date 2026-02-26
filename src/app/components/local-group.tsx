import { Instagram, Mail } from "lucide-react"
import Image from "next/image"

interface LocalGroupProps {
  name: string
  instagram?: string
  email?: string
  logo?: string
  logoAlt?: string
}

export function LocalGroup({
  name,
  instagram,
  email,
  logo,
  logoAlt = `${name} logo`,
}: LocalGroupProps) {
  return (
    <div className="group relative bg-white transition-all duration-200 hover:bg-white">
      {/* Left border - visible in default state */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#030020] transition-all duration-200 group-hover:w-0" />

      {/* Right border - visible in hover state */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#D71D00] opacity-0 transition-all duration-200 group-hover:opacity-100" />

      <div className="flex items-center justify-between gap-6 border border-[#BEC4CE] box-shadow-[2px_2px_0px_#030020] p-6 transition-all duration-200">
        {/* Left content */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Group name */}
          <h3 className="text-[32px] font-black leading-none tracking-[-0.03em] text-[#030020] transition-colors duration-200 group-hover:text-[#D71D00]">
            {name}
          </h3>

          {/* Social links */}
          <div className="flex flex-col gap-2">
            {instagram && (
              <a
                href={`https://instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[14px] font-medium text-[#030020] underline transition-colors duration-200 group-hover:text-[#D71D00]"
              >
                <Instagram
                  size={20}
                  className="transition-colors duration-200 group-hover:text-[#D71D00]"
                />
                <span>{instagram}</span>
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-[14px] font-medium text-[#030020] underline transition-colors duration-200 group-hover:text-[#D71D00]"
              >
                <Mail
                  size={20}
                  className="transition-colors duration-200 group-hover:text-[#D71D00]"
                />
                <span>{email}</span>
              </a>
            )}
          </div>
        </div>

        {/* Right content - logo */}
        {logo && (
          <div className="flex-shrink-0 w-24 h-24 relative">
            <Image src={logo} alt={logoAlt} fill className="object-contain" />
          </div>
        )}
      </div>
    </div>
  )
}
