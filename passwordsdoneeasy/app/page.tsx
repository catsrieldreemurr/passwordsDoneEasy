"use client"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CheckboxHolder from "@/components/ui/checkboxHolder";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/ui/navbar";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { use, useState } from "react";

import { toast, Toaster } from "sonner"

export default function Home() {
  const maxChars = 110;

  const [generatedString, setGeneratedString] = useState('Click "Generate" to create a new Password.')
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNums, setIncludeNums] = useState(true)
  const [includeSpecial, setIncludeSpecial] = useState(true)
  const [passLength, setPassLength] = useState(16);

  const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm"
  const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM"
  const nums = "1234567890"
  const special = `$!#¤%&/()?=|§<>@.:,;-_*^{}[]+~`

  return(
    <div className="bg-zinc-200 h-screen">
      <Navbar></Navbar>
      <Toaster></Toaster>

      <div>
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

            <div className="flex justify-center mt-5">
              <div className="flex sm:w-1/3 gap-10">
                <Slider defaultValue={[16]} min={8} max={maxChars} value={[passLength]} step={1} onValueChange={(value) => {
                  setPassLength(value[0]) // Set passLength to the value of the slider
                }}></Slider>

                <Input type="number" className="w-[10rem] text-center" min={8} max={maxChars} value={passLength === 0 ? "" : passLength} onChange={(e) => {
                  const value = e.target.value;

                  if(value === ""){ // If Box is empty
                    setPassLength(0);
                  }

                  const numVal = Number(value)
                  if(numVal<= maxChars){ // If Number is bigger than the set value 
                    setPassLength(numVal)
                  }
                    
                }} 
                onBlur={() => { // When the element loses focus
                  if(passLength < 8){setPassLength(8)} // snap back to 8 if the number is shorter than 8 
                }}></Input>
              </div>
            </div>

            <div className="border p-3 mt-5">
              <p className="break-all">{generatedString}</p>
            </div>
                
            <Button className="mt-5" onClick={() => { // Generate Password
              let pass = "";
              let permittedChars = ""

              if(includeLowercase){permittedChars += lowercaseChars}
              if(includeUppercase){permittedChars += uppercaseChars}
              if(includeNums){permittedChars += nums}
              if(includeSpecial){permittedChars += special}

              if(permittedChars.length !== 0){
                for(let i = 0; i < passLength; i++){
                  pass += permittedChars[Math.floor(Math.random() * permittedChars.length)]
                }
                setGeneratedString(pass);
              } 
              else{
                setGeneratedString("All Boxes are Unticked.")
              }
             
              
            }}>Generate</Button>

            <Button className="ml-5" onClick={() => {
              if(generatedString !== 'Click "Generate" to create a new Password.'){
                navigator.clipboard.writeText(generatedString);
                toast.success("Successfully copied the Password to the Clipboard");
              } 
              else{
                toast.error('Click "Generate" to create a new Password.')
              }
            }}>Copy to Clipboard</Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
          <div className="bg-white w-4/5 sm:w-1/3 mt-5 rounded-xl p-5">
            <h1>Password Stats</h1>
          </div>

          <div className="bg-white w-4/5 sm:w-1/3 mt-5 rounded-xl p-5">
          <h1>Password Anaylsis</h1>
          </div>
        </div>
      </div>
      
    </div>
  )
}
