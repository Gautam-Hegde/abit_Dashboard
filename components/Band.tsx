import { cn } from "@/lib/utils";
import {gloriaHallelujah} from '../app/styles/fonts'

const Band =({
    text,
    className
}:{
    text: string;
    className?: string;
})=>{
    return(
        <div className={cn('w-full h-24  bg-bandColor flex items-center justify-center text-white',gloriaHallelujah.className)}>
        <span>{text}</span>
      </div>
    )
}

export default Band;