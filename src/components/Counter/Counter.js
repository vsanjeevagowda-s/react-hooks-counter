import React, { useState } from 'react';


function Counter() {
  const [ count, setCount] = useState(0);
  return (
    <div>
      <p>Count incremented {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button disabled={count <=0 } onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}
export default Counter;
