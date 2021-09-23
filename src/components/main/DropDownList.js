import React, {useState, useEffect} from 'react'
import { PLANETS_URL, VEHICLES_URL, TOKEN_URL } from '../../constants/Constant'
import FindFalcon from '../secondary/FindFalcon'

const DropDownList = () => {

    // all values storage
    const [token, setToken] = useState({})
    const [planets, setPlanets] = useState([])
    const [vehicles, setVehicles] = useState([])

    // selected values storage
    const [selectPlanets, setSelectPlanets] = useState([]) 
    const [selectVehicles, setSelectVehicles] = useState([])
    const [totalTime, setTotalTime] = useState(0)

    // store the index of the planet selected by the user
    let planetIdx = 0
    const handlePlanetSelect = (e) => {
        planetIdx  = e.target.value 
    }

    // store the index of the vehicle selected by the user
    let vehicleIdx = 0
    const handleVehicleSelect = (e) => {
        vehicleIdx = e.target.value
    }

   
    // Function trigered when submit button is clicked
    const validateDistance = (e) => {
        e.preventDefault()
         // When submit button is clicked, we validate if vehicle max distance is greater than planet distance
        if(planets[planetIdx].distance <= vehicles[vehicleIdx].max_distance){
            // adding selected planets to the useState value selectPlanets
            let allSelectedPlanets = [...selectPlanets,planets[planetIdx].name]
            setSelectPlanets(allSelectedPlanets)
             // adding selected vehicles to the useState value selectVehicles
            let allSelectedVehicles = [...selectVehicles,vehicles[vehicleIdx].name]
            setSelectVehicles(allSelectedVehicles)
            // adding selected total time to the useState value totalTime
            // we also calculate the time taken by each vechicle by calculating distance/speed
            let allSelectedTime = totalTime + vehicles[vehicleIdx].max_distance/vehicles[vehicleIdx].speed;
            setTotalTime(allSelectedTime)

            // Adding the key add for those planets which has been selected
            // if the key add exists for the planet, the option for selecting this planets becomes disabled
            planets[planetIdx]['add'] = true
            let settingPlanetsAgain = [...planets]
            setPlanets(settingPlanetsAgain)
 
            if(vehicles[vehicleIdx].total_no > 1){
                // this condition is applied if there are more than one vehicle of the same type
                // we decrease the count of this vehicles by one
                vehicles[vehicleIdx].total_no -= 1  
                // Now we set the state of the vehicles to the new vehicles value   
                let settingVehiclesAgain = [...vehicles]
                setVehicles(settingVehiclesAgain)
            }
            else if(vehicles[vehicleIdx].total_no == 1){
                // This condition is applied if there is one vehicle of a particular type
                // Adding the key add for those vehicles which has been selected
                // if the key add exists for the vehcile, the option for selecting this vehicle becomes disabled
                vehicles[vehicleIdx]['add'] = true
                vehicles[vehicleIdx].total_no -= 1
                // Now we set the state of the vehicles to the new vehicles value 
                let settingVehiclesAgain = [...vehicles]
                setVehicles(settingVehiclesAgain)      
            }
        }        
    }

    useEffect(() => {
        // fetching planets data to useState value
        fetch(PLANETS_URL)
        .then(response=> response.json())
        .then(data =>  setPlanets(data))

        // fetching vehicles data to useState value
        fetch(VEHICLES_URL)
        .then(response=> response.json())
        .then(data => setVehicles(data))

        // fetching token data
        fetch(TOKEN_URL, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
          })
          .then(response=> response.json())
          .then(data => setToken(data))
    }, [])

    // Display all the dropdown list values of planets and vehicles
    return (
        <div>
            {selectPlanets.length != 4 ?
                <div className="dropdown" data-testid="dropdown-test">
                {[1,2,3,4].map((empty,idx) => (
                    <div key={idx}>
                        <p><span className="destination">Destination {idx+1}</span></p>
                            <form onSubmit={validateDistance}>          
                            <select onChange={handlePlanetSelect} >
                                {planets.map((data,index) => (            
                                    <option  key={index} value={index} disabled={data.add ? true : false}>{data.name}</option>                
                                ))}      
                            </select>
                            <select onChange={handleVehicleSelect}>
                                {vehicles.map((data, index) => (            
                                    <option key={index}  value={index} disabled={data.add? true : false}>{data.name}</option>                
                                ))}      
                            </select>
                            <button>Submit</button>
                            </form>
                        <hr className="hr"/>
                    </div>                    
                ))}
                </div>:
                <>
                    <FindFalcon planets={selectPlanets} vehicles={selectVehicles} token={token} time={totalTime}/>
                </>
            }
        </div>
    )
}

export default DropDownList
