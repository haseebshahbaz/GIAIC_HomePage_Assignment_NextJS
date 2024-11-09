import Image from "next/image";
import Logo from "../assets/logo.png"

export default function Navbar() {
    return (
      <header className="container mx-auto  py-8 px-12">
        <div className="flex justify-between items-center">
          <div className="text-black">
            <Image alt="Logo" src={Logo.src} width={68.55} height={41.53} className="text-xl font-light mr-2" />
          </div>
          <nav className="flex space-x-12">
            <a href="#" className="text-black text-sm uppercase tracking-widest border-b border-black pb-1">MAIN</a>
            <a href="#" className="text-black text-sm uppercase tracking-widest">GALLERY</a>
            <a href="#" className="text-black text-sm uppercase tracking-widest">PROJECTS</a>
            <a href="#" className="text-black text-sm uppercase tracking-widest">CERTIFICATIONS</a>
            <a href="#" className="text-black text-sm uppercase tracking-widest">CONTACTS</a>
          </nav>
        </div>
      </header>
    )
  }