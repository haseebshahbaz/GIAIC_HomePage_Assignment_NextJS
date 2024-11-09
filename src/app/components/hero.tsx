import Image from "next/image";
import HeroImage from "../assets/Hero.png";

export default function Hero() {
  return (
    <div className="container mx-auto px-12 py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col justify-center space-y-16">
          <div>
            <h2 className="text-gray-400 text-[64px] font-light tracking-widest">PROJECT</h2>
            <h1 className="text-[64px] font-bold">Lorum</h1>
          </div>

          <div className="space-y-12">
            <div className="flex gap-4">
              <button className="w-12 h-12 border border-gray-200 flex items-center justify-center text-lg">
                ←
              </button>
              <button className="w-12 h-12 border border-gray-200 flex items-center justify-center text-lg">
                →
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-xl">01</span>
              <div className="w-8 h-px bg-gray-400"></div>
              <span className="text-gray-400 text-xl">02</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            alt="Modern white building architecture"
            src={HeroImage.src}
            width={770}
            height={829}
          />
          <div className="bg-white absolute bottom-0 left-0 p-4">
            <a href="#" className="text-sm uppercase tracking-widest flex items-center gap-2">
              VIEW PROJECT
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
