import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import WaitlistSignup from "./components/WaitlistSignup";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import RoadDivider from "./components/RoadDivider";
import { Separator } from "@/components/ui/separator";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Separator />
      <Features />
      <Separator />
      <WaitlistSignup />
      <Separator />
      <Testimonials />
      <RoadDivider />
      <Footer />
    </div>
  );
}
