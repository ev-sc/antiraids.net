import { ActionCards } from '@/app/components/action-cards'
import { AlertBanner } from '@/app/components/alert-banner'
import { ContactSection } from '@/app/components/contact-section'
import { FindGroupSection } from '@/app/components/find-group-section'
import { HeroSection } from '@/app/components/hero-section'
import { SiteFooter } from '@/app/components/site-footer'
import { SiteHeader } from '@/app/components/site-header'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <SiteHeader />
      <AlertBanner />
      {/* Page: flex-col, gap 40px, max-width 393px centered */}
      <main className="mx-auto flex flex-col gap-[40px] w-full max-w-[393px] pb-0">
        <HeroSection />
        <ActionCards />
        <ContactSection id="contact" />
        <FindGroupSection />
      </main>
      <div className="mx-auto w-full max-w-[393px]">
        <SiteFooter />
      </div>
    </div>
  )
}
