import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedCardProps {
  children: ReactNode;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: number;
  className?: string;
}

export function AnimatedCard({ 
  children, 
  animation = 'fade-in', 
  delay = 0,
  className = '' 
}: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation();
  
  const animationClass = `scroll-${animation}`;
  
  return (
    <div 
      ref={ref} 
      className={`${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
