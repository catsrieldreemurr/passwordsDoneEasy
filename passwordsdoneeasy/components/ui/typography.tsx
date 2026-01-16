import { ReactNode } from "react";

interface props{
    variant?: string
    children?: ReactNode

    isCentered?: boolean
    isBold?: boolean
    isSpacer?: boolean
    isUnderscore?:boolean
}

export default function Typography({variant, children, isCentered, isBold, isSpacer, isUnderscore}:props){
    if(variant === "h1"){
        return <h1 className={`text-2xl ${isCentered && "text-center"} ${isBold && "font-bold"} ${isSpacer && "pt-5"} ${isUnderscore && "underline"}`}>{children}</h1>
    }

    if(variant === "h2"){
        return <h2 className={`text-xl ${isCentered && "text-center"} ${isBold && "font-bold"} ${isSpacer && "pt-5"} ${isUnderscore && "underline"}`}>{children}</h2>
    }

    if(variant === "h3"){
        return <h3 className={`text-lg ${isCentered && "text-center"} ${isBold && "font-bold"} ${isSpacer && "pt-5"} ${isUnderscore && "underline"}`}>{children}</h3>
    }

    else {
        return <p className={`${isCentered && "text-center"} ${isBold && "font-bold"} ${isSpacer && "pt-5"} ${isUnderscore && "underline"}`}>{children}</p>
    }
}