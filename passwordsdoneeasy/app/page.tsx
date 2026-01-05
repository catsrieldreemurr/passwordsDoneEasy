"use client"
import { Checkbox } from "@/components/ui/checkbox";
import CheckboxHolder from "@/components/ui/checkboxHolder";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [generatedString, setGeneratedString] = useState('Click "Generate" to create a new Password.')
  const [includeLowercase, setIncludeLowercase] = useState(false)
  return(
    <div className="bg-zinc-200 h-screen">
      <Navbar></Navbar>

      <div className="flex justify-center mt-5">

        <div className="bg-white sm:w-2/3 w-4/5 p-5 rounded-xl text-center">
          <h1 className="font-bold text-2xl">Generate a Password</h1>
          <p>Your Online Security is no Joke.</p>

          <div>
            <CheckboxHolder text="lowercase" stateToRead={includeLowercase} stateToSet={setIncludeLowercase}></CheckboxHolder>
          </div>

          <div className="border p-3 mt-5">
            <p>{generatedString}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
