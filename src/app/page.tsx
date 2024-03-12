import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpComingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/instructors";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <InfiniteMovingCards />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
