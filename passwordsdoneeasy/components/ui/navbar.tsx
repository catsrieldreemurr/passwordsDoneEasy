import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="sm:flex sm:justify-center">
            <div className="bg-rose-800 p-5 flex items-center justify-center sm:place-content-between w-screen text-white">
                <Image className="hidden sm:flex" src={"/passwordsDoneEasyWhite.png"} height={200} width={200} alt="Passwords Done Easy"></Image>

                <div className="flex gap-10">
                    <p className="font-bold flex sm:hidden">PasswordsDoneEasy</p>
                    <Link href={"/"} className="text-lg hover:underline">Generate</Link>
                    <Link href={"/info"} className="text-lg hover:underline">Information</Link>
                </div>
            </div>
        </nav>
    )
}