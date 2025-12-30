import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="sm:flex sm:justify-center">
            <div className="bg-white p-5 flex items-center justify-center sm:place-content-between rounded-b-md sm:w-4/5">
                <Image className="hidden sm:flex" src={"/passwordsDoneEasy.png"} height={200} width={200} alt="Passwords Done Easy"></Image>

                <div className="flex gap-10">
                    <Link href={"/generate"} className="text-lg hover:underline">Generate</Link>
                    <Link href={"/info"} className="text-lg hover:underline">Information</Link>
                </div>
            </div>
        </nav>
    )
}