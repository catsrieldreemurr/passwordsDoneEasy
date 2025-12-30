import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return(
    <div className="bg-sky-950 h-screen">
      <div className="flex justify-center items-center h-screen">
        <Image src={"/passwordsDoneEasy.png"} alt="Passwords Done Easy Logo" height={300} width={300} className="bg-white rounded-sm border-4 border-black p-5"></Image>
      </div>
      
    </div>
  )
}
