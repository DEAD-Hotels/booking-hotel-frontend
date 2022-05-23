import axios from "axios";
import useFetch from "../hooks/useFetch";
import {HOST} from "../const/commonConsts";

export const fetchHotels = () => {
    return axios.get("/hotels")
        .then(hotels => hotels.data || []);
};

export const FetchHotelBetween = ({destination, min, max}) => {
    const {
        data,
        loading,
        error,
        reFetch
    } = useFetch(HOST+`/hotels/?city=${destination}&${min || 0}&${max || 999}`);

    return {data};
}

    // fetch(`http://localhost:8081/hotels`, {
    //     method: "GET"
    // })
    //     // .then(res => console.log(res))
    //     .then(res => res.text())
    //     .then(hotels => {
    //         hotels.resulst
    //     });
    // }
