import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CoursesList from "@/components/sections/CoursesList";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <CoursesList />
      <CTASection />
    </>
  );
}
