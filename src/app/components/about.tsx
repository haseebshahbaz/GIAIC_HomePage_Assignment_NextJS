import Image from "next/image";
import Image1 from "../assets/About (1).png";
import Image2 from "../assets/About (2).png";
import Image3 from "../assets/About (3).png";

export default function AboutSection() {
  return (
    <div className="container px-12 py-24 bg-gray-50">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Image src={Image1} alt="Architecture Image 1" className="w-[270px] h-[265px] object-cover" />
            <Image src={Image3} alt="Architecture Image 3" className="w-[270px] h-[140px] object-cover" />
          </div>
          <Image src={Image2} alt="Architecture Image 2" className="w-[270px] h-[345px] object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-[64px] font-light text-gray-400">About</h2>
          <p className="text-[16px] text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <a href="#" className="bg-white h-[71px] w-[222px] inline-flex items-center justify-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 hover:border-gray-400 rounded">
            READ MORE
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
