import {useState, useEffect} from 'react';
import './App.css';
import DropDownList from './DropDownList';
import FindFalcon from './FindFalcon';

function App() {
  const [planets, setPlanets] = useState([])
  
  const [vehicles, setVehicles] = useState([])
  const [token, setToken] = useState({})

  useEffect(() => {
    fetch('https://findfalcone.herokuapp.com/planets')
    .then(res=> res.json())
    .then(data => setPlanets(data))
  }, [])

  useEffect(() => {
    fetch('https://findfalcone.herokuapp.com/vehicles')
    .then(res=> res.json())
    .then(data => setVehicles(data))
  }, [])

  // function post_bodyGenerator(params) {
  //   return {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: params,
  //   }
  // }

  // useEffect(() => {
  //   let params = JSON.stringify({})
  //   fetch('https://findfalcone.herokuapp.com/token',post_bodyGenerator(params))
  //   .then(res=> res.json())
  //   .then(data => setPostValue(data))
  // }, [])

  useEffect(() => {
    fetch('https://findfalcone.herokuapp.com/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
    .then(res=> res.json())
    .then(data => setToken(data))
  }, [])

  // console.log(postvalue)
 
  
  // function collectPlanets(){
    // let res = []
    // for(let i = 0; i < planets.length; i++){
    //   res.push(planets[i].name)
    //   console.log(planets[i].name)
    // }
  //   setOnlyPlanets(res)
  // // }

  // collectPlanets()
  // console.log(onlyPlanets)

  // let planets_names = []
  let vehicles_names = []

  // let vehicles_names = []
  // console.log('pl',planets)
  // for(let i = 0; i < planets.length; i++){
  //     planets_names.push(planets[i].name)
  //   }
  //   for(let i = 0; i < vehicles.length; i++){
  //     vehicles_names.push(vehicles[i].name)
  //   }

    for(let i = 0; i < vehicles.length; i++){
      vehicles_names.push(vehicles[i])
     let count = vehicles[i].total_no
      while(count > 1){
        count -= 1
        // vehicles_names[i].name = vehicles_names[i].name +''+count
        vehicles_names.push(vehicles_names[i])
     }
    }


  


  return (
    <div className="App">
        {/* <FindFalcon planets={planets_names.splice(0,4)} vehicles={vehicles_names} token={postvalue}/> */}
        <DropDownList planets={planets} vehicles={vehicles_names} token={token}/>
    </div>
  );
}

export default App;
