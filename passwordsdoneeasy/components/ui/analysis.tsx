import { error } from "console"

interface SetProps{
    passwordString: string
    
    uppercaseAmount: number
    lowercaseAmount: number
    numberAmount: number
    specialAmount: number
}

export default function AnalyzePassword({passwordString, uppercaseAmount, lowercaseAmount, numberAmount, specialAmount}:SetProps){
    if(passwordString === 'Click "Generate" to create a new Password.'){
        return <p>Not a Password</p>
    }
    else{
        let points = 0
        const errors = []
        let message = "";

        if(passwordString.length >= 12){points += 1} else {message="Password is too short. (12+ Characters Recommended)"}
        if(passwordString.length >= 16){points += 1; message="Password has a Good Length. (16+)"}
        if(passwordString.length >= 27){points += 1; message="Password has a Great Length. (27+)"}
        if(passwordString.length >= 36){points += 1; message="Password has a Perfect Length. (36+)"}

        if(uppercaseAmount > 0){points += 1} else {errors.push("Password is missing an Uppercase character.")}
        if(lowercaseAmount > 0){points += 1} else {errors.push("Password is missing a Lowercase character.")}
        if(numberAmount > 0){points += 1} else {errors.push("Password is missing atleast one Number.")}
        if(specialAmount > 0){points += 1} else {errors.push("Password is missing atleast one Special character.")}

        return <div className="mt-5">
            {errors.map((err, index) => (
            <p key={index}>{err}</p>
            ))}
            
            <p>{message}</p>
            {errors.length === 0 && <p>The Password is safe.</p>}

            <p className="mt-3">Total Points: {points}/8</p>
        </div>
    
    }
}