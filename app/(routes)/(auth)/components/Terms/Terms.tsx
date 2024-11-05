
"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react"

export  function Terms() {
  const[showExtraTerms, setShowExtraTerms]=useState(false)
  
    return (<div className="text-xs mt-4 mb-10  text-gray-600 max-w-72">
        <div className="mb-5">
            <span>
                esta pagina utiliza Google reCAPTCHA para verificar si no eres un robot 
            </span>
            <Button variant="ghost"onClick={()=>setShowExtraTerms(!showExtraTerms)}
                
                className="opacity-1 text-[#0071eb] hover:bg-transparent p-0 ml-1 h-fit"
                >Mas informacion


            </Button>

        </div>
        <div className="h-28">
        {showExtraTerms && <p>la informacion recoplada por google esta sujeta por politicas 
            de privacidad minuciosamente privadas ante cfualquier amenaza y otros agentes externos .</p> }
        </div>
      
    </div>
    );
  
}
