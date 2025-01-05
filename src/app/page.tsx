import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import CourseCards from "@/components/CourseCards";
import StatsBanner from "@/components/StatsBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <CTASection />
      <CourseCards />
      <StatsBanner />
      <FAQ />
      <Footer />
    </div>
  );
}
