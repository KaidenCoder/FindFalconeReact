import React, {useState, useEffect} from 'react'

const FindFalcon = (props) => {

    const [find, setFind] = useState([])



    // console.log('hey',props)
    // {
    //     "token":"xTNEBIFzhSccrYOBSIzjVicJEeropcyn",
    //     "planet_names":
    //     ["Donlon","Enchai","Pingasor","Sapir"],
    //     "vehicle_names":
    //     ["Space pod","Space rocket","Space rocket","Space rocket"]
    // planet_names: ['Donlon', 'Enchai', 'Pingasor','Sapir'],
    // vehicle_names: ['Space pod', 'Space rocket', 'Space rocket', 'Space rocket'],
    // }
    // let params = JSON.stringify({
    //     token: props.token.token,
    //     planet_names: props.planets,
    //     vehicle_names: props.vehicles,
    // })
    // console.log('params', params)

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
    //   let res = []
    // function collectPlanets(){  
    //     for(let i = 0; i < props.planets.length; i++){
    //         res.push(props.planets[i].name)
    //         // console.log(props.planets[i].name)
    //     }
    // }

    // console.log(res)

    // collectPlanets()

      // console.log(props.planets)
    

    useEffect(() => {
         
        let planets_names = ['Donlon', 'Enchai', 'Pingasor','Sapir']
        let vehicles_names = ['Space pod', 'Space rocket', 'Space rocket', 'Space rocket']
        
        let params = JSON.stringify({
            token: props.token.token,
            planet_names: props.planets,
            vehicle_names: props.vehicles,
        })
        // console.log('params', params)
        fetch('https://findfalcone.herokuapp.com/find',post_bodyGenerator(params))
        .then(res=> res.json())
        .then(data => setFind(data))
      }, [])
      console.log('33', find)
      console.log('33', find.status == 'success' ? 'Yes' : 'False')

    return (
        <div>
           <p>Success! Congratulations on Finding Falcone. King Shan is mighty pleased.</p>
           <p>Total time taken: {props.time}</p>
           {find.status == 'success' ? 'Planet found: ' + find.planet_name  : 'False'}
        </div>
    )
}

export default FindFalcon
