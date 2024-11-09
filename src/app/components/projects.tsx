import Image1 from "../assets/Project (5).png";
import Image2 from "../assets/Project (4).png";
import Image3 from "../assets/Project (3).png";
import Image4 from "../assets/Project (2).png";
import Image5 from "../assets/Project (1).png";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="container mx-auto px-12 py-16">
      <h2 className="text-[64px] font-light text-gray-400 mb-12">Our Projects</h2>
      <div className="space-y-6">
        <div className="flex space-x-6">
          <div className="relative" style={{ width: 570, height: 255 }}>
            <Image src={Image1.src} alt="Sample Project" className="w-full h-full object-cover" width={570} height={255}/>
            <div className="absolute inset-0 text-white flex items-center px-7 py-0">
  <div>
    <h3 className="text-[64px] font-bold">Sample</h3>
    <h3 className="text-[64px] font-bold">Project</h3>
    <p className="text-[12px] mt-2">View More →</p>
  </div>
            </div>
          </div>

          <div style={{ width: 570, height: 255 }}>
          <Image src={Image2.src} alt="Project 2" className="w-full h-full object-cover" width={570} height={255}/>
          </div>
        </div>

        <div className="flex space-x-6">
          <div style={{ width: 270, height: 255 }}>
          <Image src={Image3.src} alt="Project 3" className="w-full h-full object-cover" width={270} height={255}/>
          </div>

          <div style={{ width: 470, height: 255 }}>
          <Image src={Image4.src} alt="Project 4" className="w-full h-full object-cover" width={470} height={255}/>
          </div>

          <div style={{ width: 370, height: 255 }}>
          <Image src={Image5.src} alt="Project 5" className="w-full h-full object-cover" width={370} height={255}/>    
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button className="w-[221.81px] h-[71px] px-6 py-3 bg-gray-800 text-white text-[12px] font-medium uppercase tracking-wider rounded hover:bg-gray-700 transition">
          All Projects →
        </button>
      </div>
    </div>
  );
}
