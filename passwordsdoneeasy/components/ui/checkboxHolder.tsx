import { Dispatch, SetStateAction } from "react"
import { Checkbox } from "./checkbox"

interface SetTypes{
    text: string,
    stateToRead: boolean
    stateToSet: Dispatch<SetStateAction<boolean>> 
}

export default function CheckboxHolder({text, stateToRead, stateToSet}:SetTypes){
    return (
        <div className="flex items-center gap-3">
            <p>{text}</p>
            <Checkbox defaultChecked={true} onCheckedChange={() => {
                stateToSet(!stateToRead);
            }}></Checkbox>
        </div>
    )
}