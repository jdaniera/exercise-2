import { useState } from "react"

export default function Counter() {
    // this is where you do the useStates, between export and return
    const [number, setNumber] = useState(0);
    // left side is to call (number), right side is to change (setNumber)
    // useState starts at 0


    return (
        <>
            <div>
                <button onClick={() => setNumber(number + 1)}>Increment</button>
                <button onClick={() => setNumber(number - 1)}>Decrement</button>
            </div>
            
            <div>
                {number} 
                {/* calling what is saved in the useState using curly brackets  */}
            </div>
        </>
    )
}