import FeaturedSection from "@/pages/FeaturedSection";
import HeroSection from "@/pages/HeroSection";
import Layout from '@/layout/Index'
import FAQ from "@/pages/FAQSection";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Layout>
        <HeroSection/>
       <FeaturedSection />
       <FAQ/>
      </Layout>
    </div>
  );
}
