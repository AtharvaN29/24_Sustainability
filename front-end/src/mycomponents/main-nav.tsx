"use client";

import { cn } from "@/lib/utils";

export function MainNav({
    className,
   
}:React.HTMLAttributes<HTMLElement>){
    const routes=[
        {
            href:'/home',
            id:'home',
            label:'Home',
        },
        {
            href:'/powerPrediction',
            id:'Power',
            label:'Power Prediction',
        },
        {   
            href:'/stabilityPrediction',
            id:'Stability',
            label:'Stability Prediction',
        },
        {
            href:'/analytics',
            id:'analytics',
            label:'Analytics',
        },
    ]
    return(
        <nav  id='over1' className={cn("flex items-center space-x-4 lg:space-x-6",className)}>
            {routes.map((route)=>
            <a
            id={route.id}
            key={route.id} 
            href={route.href}
            className={cn("text-sm font-medium transition-colors hover:text-primary",
            )}
            >
            {route.label}
            </a>
            
            )}
        </nav>
    );
};
