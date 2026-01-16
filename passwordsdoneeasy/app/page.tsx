"use client"
import AnalyzePassword from "@/components/ui/analysis";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CheckboxHolder from "@/components/ui/checkboxHolder";
import Footerbar from "@/components/ui/footerbar";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/ui/navbar";
import { Slider } from "@/components/ui/slider";
import Typography from "@/components/ui/typography";
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

  const [upperAmount, setUpperAmount] = useState(0);
  const [lowerAmount, setLowerAmount] = useState(0);
  const [numsAmount, setNumsAmount] = useState(0);
  const [specialAmount, setSpecialAmount] = useState(0);

  const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm"
  const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM"
  const nums = "1234567890"
  const special = `$!#¤%&/()?=|§<>@.:,;-_*^{}[]+~`

  return(
    <div className="bg-zinc-200">
      <Navbar></Navbar>
      <Toaster></Toaster>

      <div>
        <div className="flex justify-center mt-5">
          <div className="bg-white sm:w-2/3 w-4/5 p-5 rounded-xl text-center">
            <Typography variant="h1" isBold>Generate a Password</Typography>
            <Typography>Your Online Security is no Joke.</Typography>

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
                let lower = 0
                let higher = 0
                let specials = 0
                let num = 0

                for(let i = 0; i < passLength; i++){
                  const randNum = Math.floor(Math.random() * permittedChars.length)
                  const char = permittedChars[randNum]
                  pass += char

                  if(lowercaseChars.indexOf(char) !== -1){lower += 1}
                  if(uppercaseChars.indexOf(char) !== -1){higher += 1}
                  if(nums.indexOf(char) !== -1){num += 1}
                  if(special.indexOf(char) !== -1){specials += 1}
                }
                setGeneratedString(pass);

                setLowerAmount(lower)
                setUpperAmount(higher)
                setNumsAmount(num)
                setSpecialAmount(specials)
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

        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center text-center">
          <div className="bg-white w-4/5 sm:w-1/3 mt-5 rounded-xl p-5 sm:h-[15rem]">
            <Typography variant="h3" isUnderscore isBold>Password Stats</Typography>
            <Typography isSpacer>Uppercase: {upperAmount}</Typography>
            <Typography>Lowercase: {lowerAmount}</Typography>
            <Typography>Numbers: {numsAmount}</Typography>
            <Typography>Special: {specialAmount}</Typography>
          </div>

          <div className="bg-white w-4/5 sm:w-1/3 mt-5 rounded-xl p-5 h-[15rem]">
            <Typography variant="h3" isUnderscore isBold>Password Analysis</Typography>
              <AnalyzePassword passwordString={generatedString} 
              lowercaseAmount={lowerAmount} 
              uppercaseAmount={upperAmount} 
              numberAmount={numsAmount} 
              specialAmount={specialAmount}
              ></AnalyzePassword>
              
          </div>
        </div>
      </div>

      <Footerbar></Footerbar>
      
    </div>
  )
}
