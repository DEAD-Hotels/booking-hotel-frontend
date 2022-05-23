import axios from "axios";
import useFetch from "../hooks/useFetch";

export const fetchHotels = () => {
    return axios.get("https://booking-hotels-backend.herokuapp.com/hotels")
        .then(hotels => hotels.data || []);
};

export const FetchHotelBetween = ({destination, min, max}) => {
    const {
        data,
        loading,
        error,
        reFetch
    } = useFetch(`https://booking-hotels-backend.herokuapp.com/hotels/?city=${destination}&${min || 0}&${max || 999}`);

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
