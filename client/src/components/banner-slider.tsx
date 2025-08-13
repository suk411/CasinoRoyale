import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Banner {
  id: string;
  title: string;
  description: string;
  cta: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
}

interface BannerSliderProps {
  banners: Banner[];
}

export default function BannerSlider({ banners }: BannerSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  if (banners.length === 0) {
    return (
      <div className="mb-6" data-testid="banner-slider-empty">
        <div className="banner-slider rounded-xl overflow-hidden shadow-3d h-48 sm:h-56 md:h-64 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-casino-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl sm:text-2xl">🎰</span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-playfair font-bold mb-2">Welcome to Royal Casino</h2>
            <p className="text-sm sm:text-base md:text-lg">Experience the ultimate gaming adventure</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6" data-testid="banner-slider">
      <div className="banner-slider rounded-xl overflow-hidden shadow-3d relative">
        <div className="relative h-48 sm:h-56 md:h-64">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: `linear-gradient(135deg, ${banner.gradientFrom} 0%, ${banner.gradientTo} 100%)`,
              }}
              data-testid={`banner-slide-${index}`}
            >
              <div className="text-center text-white p-4 sm:p-6">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3" data-testid={`banner-icon-${index}`}>
                  {banner.icon === "fas fa-gift" ? "🎁" : 
                   banner.icon === "fas fa-trophy" ? "🏆" : 
                   banner.icon === "fas fa-coins" ? "🪙" : "🎰"}
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold mb-3" data-testid={`banner-title-${index}`}>
                  {banner.title}
                </h2>
                <p className="text-sm sm:text-base mb-4" data-testid={`banner-description-${index}`}>
                  {banner.description}
                </p>
                <button 
                  className="button-3d px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                  data-testid={`banner-cta-${index}`}
                >
                  {banner.cta}
                </button>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
            data-testid="button-banner-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
            data-testid="button-banner-next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-casino-gold" : "bg-white/50"
                }`}
                data-testid={`button-banner-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
