import React, {useState, useEffect} from 'react'
import { FIND_URL } from '../../constants/Constant'
import NotFound from './NotFound'
import SuccessFound from './SuccessFound'

const FindFalcon = (props) => {

    const [find, setFind] = useState([])
    function post_bodyGenerator(params) {
        return {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: params,
        }      
      }
    
    useEffect(() => {  
        // fetching the status data 
        // Passing all the user selected planets, selected vehicles and token to post method body        
        let params = JSON.stringify({
            token: props.token.token,
            planet_names: props.planets,
            vehicle_names: props.vehicles,
        })
        fetch(FIND_URL,post_bodyGenerator(params))
        .then(response=> response.json())
        .then(data => setFind(data))
      }, [])

    //Display whether Falcon is found or not
    return (
        <div data-testid="findfalcon">
           {find.status == 'success' ? 
           <SuccessFound time={props.time} planet={find.planet_name}/> : 
           <NotFound/>}
        </div>
    )
}

export default FindFalcon
