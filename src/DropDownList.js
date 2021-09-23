import React, {useState, useEffect} from 'react'
import FindFalcon from './FindFalcon'


const DropDownList = (props) => {

    console.log('10', props.token)

    const [planets, setPlanets] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [selectPlanets, setSelectPlanets] = useState([]) 
    const [selectVehicles, setSelectVehicles] = useState([])
    const [totalTime, setTotalTime] = useState(0)

    let planetIdx = 0
    const handlePlanetSelect = (e) => {
        planetIdx  = e.target.value 
    }

    let vehicleIdx = 0
    const handleVehicleSelect = (e) => {
        vehicleIdx = e.target.value
    }


    const validateDistance = (e) => {
        e.preventDefault()
        if(planets[planetIdx].distance <= vehicles[vehicleIdx].max_distance){
            let spp = [...selectPlanets,planets[planetIdx].name]
            setSelectPlanets(spp)
            console.log('31',spp)
            let svv = [...selectVehicles,vehicles[vehicleIdx].name]
            setSelectVehicles(svv)
            console.log('30',svv)
            let t = totalTime + vehicles[vehicleIdx].max_distance/vehicles[vehicleIdx].speed;
            setTotalTime(t)
            planets[planetIdx]['add'] = true
            planets[planetIdx].distance = 'done'
            let pll = [...planets]
            setPlanets(pll)
 
            if(vehicles[vehicleIdx].total_no > 1){
                vehicles[vehicleIdx].total_no -= 1     
                let vll = [...vehicles]
                setVehicles(vll)
            }
            else if(vehicles[vehicleIdx].total_no == 1){
                vehicles[vehicleIdx]['add'] = true
                vehicles[vehicleIdx].total_no -= 1
                let vll = [...vehicles]
                setVehicles(vll)      
            }

        }  
        
    }


    // const checkDisable = () => {
    //     if(planets[planetIdx].add != undefined && vehicles[vehicleIdx].add != undefined){
    //         return false
    //     }

    //     return true
        
    // }

    // useEffect(() => {
    //     checkDisable()
    // }, [validateDistance])

    useEffect(() => {
        fetch('https://findfalcone.herokuapp.com/planets')
        .then(res=> res.json())
        .then(data =>  setPlanets(data))
        fetch('https://findfalcone.herokuapp.com/vehicles')
        .then(res=> res.json())
        .then(data => setVehicles(data))
    }, [])
    console.log('29', vehicles)
  

    return (
        <div>
            <h1>Finding Falcone!</h1>
            {selectPlanets.length != 4 ?
                <>
                {[1,2,3,4].map((empty,ii) => (
                    <div key={ii}>
                        <p>Desination {ii+1}</p>
                        <form onSubmit={validateDistance}>          
                        <select onChange={handlePlanetSelect} >
                            {planets.map((d,i) => (            
                                <option key={i} value={i} disabled={d.add ? true : false}>{d.name}-{d.add != null ? 'True' : 'false'}</option>                
                            ))}      
                        </select>
                        <select onChange={handleVehicleSelect}>
                            {vehicles.map((d, i) => (            
                                <option key={i}  value={i} disabled={d.add? true : false}>{d.name}-{d.add != null ? 'True' : 'false'}</option>                
                            ))}      
                        </select>
                        {/* { planets[planetIdx]['distance']== 'done' && vehicles[vehicleIdx].total_no == 0?'': <button>Submit</button>} */}
                        <button>Submit</button>
                        </form>
                    </div>
                ))}
                </>:
                <>
                    <FindFalcon planets={selectPlanets} vehicles={selectVehicles} token={props.token} time={totalTime}/>
                </>
            }


        </div>
    )
}

export default DropDownList
