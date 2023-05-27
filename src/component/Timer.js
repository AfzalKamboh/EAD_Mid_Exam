import React,{useState,useEffect} from 'react'

export default function Timer() {
    const [count,setCount] = useState(10)

    const tick = () =>{
        if(count > 0)
        {
            setCount(count < 1 ? 0 : count - 1)
        }
        else{
            alert("Time's Up!")
        }
        
    }

    useEffect(() =>{
        const interval =setInterval(tick,1000)
        return () =>{
            
            clearInterval(interval)
        }  
    },[count])
  return (
    <div>
      {count}
    </div>
  )
}