import { useEffect, useState } from "react";

export function useIntersection(eleRef) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const interSectionObserver = new IntersectionObserver((entries) => {
        console.log(entries); 
        setIsIntersecting(entries); 
    })
    
    useEffect(() => {
        console.log("eleref-12", eleRef)
        if(eleRef.current){
            interSectionObserver?.observe(eleRef)
        }
    }, [eleRef])
    return [isIntersecting]
    
}