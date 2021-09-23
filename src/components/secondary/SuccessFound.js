import React from 'react'

const SuccessFound = (props) => {
    return (
        <div>
            <p className="ptag">Success! 🤩 Congratulations on Finding Falcone. King Shan is mighty pleased😀.</p>
            <p>Total time taken: {props.time}</p>
            <p>Planet found:  {props.planet}</p> 
        </div>
    )
}

export default SuccessFound
