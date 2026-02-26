export function HeroSection() {
  return (
    <section className="flex flex-col gap-[10px] px-[20px] pt-10">
      {/* H2: 26px, 700, 110% line-height, -0.03em tracking, text-shadow red */}
      <h2
        className="text-[26px] font-bold leading-[110%] tracking-[-0.03em] text-[#030020]"
        style={{ textShadow: "1px 1px 0px #D71D00" }}
      >
        We are a loose network of groups and individuals working to build the resistance to
        immigration raids across the UK.
      </h2>
      {/* Body/Link: 18px, 400, 140%, -0.02em, underline */}
      <a
        href="#"
        className="text-[18px] font-normal leading-[140%] tracking-[-0.02em] underline text-[#030020]"
      >
        Read more
      </a>
    </section>
  )
}
