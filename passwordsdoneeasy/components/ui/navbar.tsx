import Image from "next/image";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";

export default function Navbar(){
    return(
        <nav className="sm:flex sm:justify-center">
            <div className="bg-rose-800 p-5 flex items-center sm:place-content-between w-screen text-white">
                <Image className="hidden sm:flex" src={"/passwordsDoneEasyWhite.png"} height={200} width={200} alt="Passwords Done Easy"></Image>

                <div className="flex gap-10 items-center justify-between w-full sm:justify-end">
                    <p className="font-bold flex sm:hidden">Passwords Done Easy</p>
                </div>
            </div>
        </nav>
    )
}