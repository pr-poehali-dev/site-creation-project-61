import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BookingSection from '@/components/BookingSection';

export default function Index() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection scrollToSection={scrollToSection} />
      <BookingSection
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}
