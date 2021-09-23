import axios from "axios";
import { FETCH_VEHICLES } from "../constants/Constant";

export const fetchVehicles = () => {
    axios.get('https://findfalcone.herokuapp.com/vehicles')
    .then(res => console.log(res.data))
}

