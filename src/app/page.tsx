import FeaturesCourses from "@/components/FeaturesCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonicalCards from "@/components/TestimonicalCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";


import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";



export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0,96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturesCourses/>
    <WhyChooseUs/>
    <MusicSchoolTestimonicalCards/>
    <UpcomingWebinar/>
    <Instructors/>
    <Footer/>
   </main>
  );
}
