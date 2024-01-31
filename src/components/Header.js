import React, { useState } from 'react'
import './Header.css'


function Header() {
    let [count, setCount] = useState(0)
    function handleClick(params) {
        if (count >= 10) {
            alert('please enter less than 10')
        } else {
            setCount(count + 1);
        }

    }
    function handleDecrement() {
        if (count <= 0) {
            alert('please enter valid value')
        } else {
            setCount(count - 1);
        }

    }
    function reset() {
        setCount(count = 0);
        alert('value is rested')
    }
    return (
        <div className='flex justify-center'>
            <div className='bg-red-700 w-96   mt-10 h-96 '>
                <div className=' flex justify-around mt-20'>
                    <button onClick={handleClick} className=' bg-cyan-500 hover:bg-cyan-600 w-28'>increment</button>
                    <span className='w-10 bg-cyan-500 flex justify-around hover:bg-cyan-600'>{count}</span>
                    <button onClick={handleDecrement} className=' bg-cyan-500 hover:bg-cyan-600  w-28 '>decrement</button>
                </div>
                <div className=' bg-cyan-500 hover:bg-cyan-600 flex justify-center mt-6'>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default Header;