import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CTASection } from "@/components/home/CTASection";
import { TrustedBy } from "@/components/home/TrustedBy";

const Index = () => {
  return (
    <Layout currentPath="/">
      <HeroSection />
      <TrustedBy />
      <ServicesOverview />
      <CTASection />
    </Layout>
  );
};

export default Index;
