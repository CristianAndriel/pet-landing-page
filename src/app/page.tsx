import { Montserrat } from "next/font/google";
import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { Footer } from "./_components/footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
      <AosInit />
    </main>
  )
}
