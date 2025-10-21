import React from "react";
import { use } from "react";
import { useState } from "react";

const Semaforo = ()=>{
    
    const[selectedLight,setSelectedLight] = useState("");


    return(
        <>  <div className="d-flex justify-content-center">
                <div className="semaphor p-2 mt-5">
                    <div 
                    onClick={()=>setSelectedLight("danger")} 
                    className={`traffic-light m-3 danger rounded-circle ${selectedLight === "danger" ? "danger-glow":""}`}>
                    </div>

                    <div
                    onClick={()=>setSelectedLight("warning")}
                    className={`traffic-light m-3 warning rounded-circle ${selectedLight == "warning" ? "warning-glow":""}`}>

                    </div>
                    <div 
                    onClick={()=>setSelectedLight("success")}
                    className={`traffic-light m-3 success rounded-circle ${selectedLight == "success" ? "success-glow":""}`}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Semaforo