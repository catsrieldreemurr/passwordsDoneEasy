import { ReactNode } from "react";

interface props{
    children?: ReactNode
}

export default function Box({children}:props){
    return <div className="flex flex-col items-center sm:w-1/3 p-10 text-center">
        {children}
    </div>
}