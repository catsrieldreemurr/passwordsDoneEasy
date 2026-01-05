"use client"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CheckboxHolder from "@/components/ui/checkboxHolder";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import { use, useState } from "react";

export default function Home() {
  const [generatedString, setGeneratedString] = useState('Click "Generate" to create a new Password.')
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNums, setIncludeNums] = useState(true)
  const [includeSpecial, setIncludeSpecial] = useState(true)

  return(
    <div className="bg-zinc-200 h-screen">
      <Navbar></Navbar>

      <div className="flex justify-center mt-5">

        <div className="bg-white sm:w-2/3 w-4/5 p-5 rounded-xl text-center">
          <h1 className="font-bold text-2xl">Generate a Password</h1>
          <p>Your Online Security is no Joke.</p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-5">
            <CheckboxHolder text="Lowercase" stateToRead={includeLowercase} stateToSet={setIncludeLowercase}></CheckboxHolder>
            <CheckboxHolder text="Uppercase" stateToRead={includeUppercase} stateToSet={setIncludeUppercase}></CheckboxHolder>
            <CheckboxHolder text="Numbers" stateToRead={includeNums} stateToSet={setIncludeNums}></CheckboxHolder>
            <CheckboxHolder text="Special" stateToRead={includeSpecial} stateToSet={setIncludeSpecial}></CheckboxHolder>
          </div>

          <div className="border p-3 mt-5">
            <p>{generatedString}</p>
          </div>

          <Button className="mt-5" variant={"outline"} onClick={() => {
            console.log("Losercase: " + includeLowercase)
            console.log("Uppercase: " + includeUppercase)
            console.log("Numbers: " + includeNums)
            console.log("Special: " + includeSpecial)
          }}>Generate</Button>

        </div>
      </div>
    </div>
  )
}
