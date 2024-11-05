import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ServicesHero />
        <ServicesList />
      </main>
      <Footer />
    </div>
  )
}