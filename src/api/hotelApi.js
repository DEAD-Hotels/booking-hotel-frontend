import axios from "axios";
import useFetch from "../hooks/useFetch";

export const fetchHotels = () => {
    return axios.get("http://localhost:8081/hotels")
        .then(hotels => hotels.data || []);
};

export const FetchHotelBetween = ({destination, min, max}) => {
    const {
        data,
        loading,
        error,
        reFetch
    } = useFetch(`http://localhost:8081/hotels/?city=${destination}&${min || 0}&${max || 999}`);

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
