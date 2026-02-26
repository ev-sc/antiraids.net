import { BookOpen, Users, Wrench } from "lucide-react"
import { ActionCard } from "./action-card"

export function ActionCards() {
  return (
    <section className="flex flex-col gap-[20px] px-[20px]" id="get-involved">
      {/* Large "Get involved" card */}
      <ActionCard
        icon={Users}
        title="Get involved"
        description="Learn what you can do to resist raids and the hostile environment"
        isLarge
      />

      {/* Row of two smaller cards */}
      <div className="flex gap-[20px]">
        <ActionCard
          icon={Wrench}
          title="Resources"
          description="Understand and resist immigration raids"
          href="#resources"
        />

        <ActionCard
          icon={BookOpen}
          title="Directory"
          description="Access legal advice and other support"
          href="#directory"
        />
      </div>
    </section>
  )
}
