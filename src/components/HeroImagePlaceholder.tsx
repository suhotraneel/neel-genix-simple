import React from 'react';

interface HeroImagePlaceholderProps {
  className?: string;
}

export const HeroImagePlaceholder: React.FC<HeroImagePlaceholderProps> = ({
  className = '',
}) => {
  return (
    <div
      id="hero-image-container"
      className={`relative w-full overflow-hidden rounded-3xl bg-[#0f1014] border border-neutral-800/80 group transition-all duration-300 shadow-xl ${className}`}
    >
      <div className="aspect-square md:aspect-video lg:aspect-square w-full relative overflow-hidden">
        <img
          src="/hero.webp"
          alt="Suhotra Chakraborty"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

