import React, { useState, useEffect } from 'react'

function CounterBtn() {
    const [ count, setCount ] = useState(0)


    useEffect(() => {
          if (count === 69) {
            document.title = `nice.`;
        }else if (count === 0 || count) {
            document.title = `You clicked ${count} times`;
        }
            
      });
    
      return (
        <div className='flex justify-center'>
          <button className='mt-2 px-2 font-bold text-purple-500 bg-emerald-100 rounded-full' onClick={() => setCount(count + 1)}>
            click me
          </button>
        </div>
      );
    }

export default CounterBtn