import Blog from '@/components/Blog'
import { Faqs } from '@/components/Faqs'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import Stats from '@/components/Stats'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  const navItems = [
    {
      "link": "#testimonials",
      "label": "Testimonials"
    },
    {
      "link": "#blog",
      "label": "Blog"
    },
    {
      "link": "/about",
      "label": "About"
    }
  ]
  return (
    <>
      <Header navItems={navItems} />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Stats />
        <Testimonials />
        <Blog />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
