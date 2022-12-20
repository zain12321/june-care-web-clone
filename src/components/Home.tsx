import { useState } from "react"

export function Home(){
    const [checked, toggleButton] = useState();
    const [open, Opened] = useState(false);

    return(
        <div>
            {/* <input type='checkbox' checked={checked}
             onClick={(event: any) => toggleButton(event.target.checked)} /> */}
            <div className="" onClick={() => Opened(!open)}>
                {open ? <p>Close Me</p> : <p>Open Me</p>}
            </div>
       {open ? <p></p> : '' } 
        </div>
    )
}