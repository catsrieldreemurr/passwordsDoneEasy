import { error } from "console"
import Typography from "./typography"

interface SetProps{
    passwordString: string
    
    uppercaseAmount: number
    lowercaseAmount: number
    numberAmount: number
    specialAmount: number
}

export default function AnalyzePassword({passwordString, uppercaseAmount, lowercaseAmount, numberAmount, specialAmount}:SetProps){
    if(passwordString === 'Click "Generate" to create a new Password.'){
        return <Typography isSpacer>Not a Password</Typography>
    }
    else if(passwordString === "All Boxes are Unticked."){
        return <Typography isSpacer>Not a Password. Please tick off atleast one box.</Typography>
    }
    else{
        let points = 0
        const errors = []
        let message = "";

        if(passwordString.length >= 12){points += 1} else {message=`Password is too short. (${passwordString.length}/12)`}
        if(passwordString.length >= 16){points += 1; message=`Password has a Good Length. (${passwordString.length}/16)`}
        if(passwordString.length >= 27){points += 1; message=`Password has a Great Length. (${passwordString.length}/27)`}
        if(passwordString.length >= 36){points += 1; message=`Password has a Perfect Length. (${passwordString.length}/36)`}

        if(uppercaseAmount > 0){points += 1} else {errors.push("Password is missing an Uppercase character.")}
        if(lowercaseAmount > 0){points += 1} else {errors.push("Password is missing a Lowercase character.")}
        if(numberAmount > 0){points += 1} else {errors.push("Password is missing atleast one Number.")}
        if(specialAmount > 0){points += 1} else {errors.push("Password is missing atleast one Special character.")}

        return <div className="mt-5">
            {errors.map((err, index) => (
            <Typography key={index}>{err}</Typography>
            ))}
            
            <Typography>{message}</Typography>
            {(errors.length === 0 && passwordString.length >= 16) && <p>The Password is safe.</p>}
            

            <Typography isSpacer>Total Points: {points}/8</Typography>
        </div>
    
    }
}