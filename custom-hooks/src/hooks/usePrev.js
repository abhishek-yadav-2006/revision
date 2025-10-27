import { useEffect, useRef } from "react";

export const usePrev = (value) =>{
    const ref = useRef();
    console.log("re render happend with new value " + value)
     useEffect(()=>{
        console.log("updated the ref to be " + value)
        ref.current = value;
     }, [value]) 
   console.log("returned" + value)
    return ref.current; // in initial it is undefined


}

// in react first it runs return statement after effect get called