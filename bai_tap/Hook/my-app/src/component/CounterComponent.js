import { useState } from 'react';
import './style.css';
export function Counter1() {
    const [number, setNumber] = useState(0)
    const countNumber = () => {
        setNumber(e => e + 1)
    }
    return (
        <>
            <div className='div'>
                <h1>Count:{number}</h1>
                <button onClick={() => countNumber()}>Add1</button>
            
            </div>
        </>
    )
}
export function Counter2() {
    const [number, setNumber] = useState(0)
    const countNumber = () => {
        setNumber(e => e + 2)
    }
    
    return (
        <>
            <div className='div'>
                <h1>Count:{number}</h1>
                <button onClick={() => countNumber()}>Add2</button>
            </div>
        </>
    )
}