import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Intsructors from "@/components/Intsructors";
import MusicTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";



export default function Home() {
  return (
    <main className=" min-h-screen bg-blank/[0.96] 
    antialiased bg-grid-white/[002]"> 
          
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <MusicTestimonialCards/>
    <UpcomingWebinar/>
    <Intsructors/>
    <Footer/>
    </main>
  );
}
