import axios from "axios";
import {HOST} from "../const/commonConsts";
import {getCommonJsonRequestProps, throwHttpErrors} from "../commons/commons";

export const fetchHotels = () => {
    return axios.get("/hotels")
        .then(hotels => hotels.data || []);
};

export const loadRoomsInHotel = (hotelId, navigate) =>
    fetch(HOST + `/hotels/${hotelId}/rooms`, {
        method: "GET",
        ...getCommonJsonRequestProps()
    })
        .then(res => throwHttpErrors(res, navigate))
        .then(rooms => rooms || [])

export const saveReservationInfo = (totalPrice, startDate, endDate, selectedRooms, currentUser, navigate) =>
    fetch(HOST + `/reservation/saveReservation`, {
        method: "POST",
        headers: {
            ...getCommonJsonRequestProps().headers
        },
        body: JSON.stringify({totalPrice, startDate, endDate, selectedRooms, currentUser})
    })
        .then(res => throwHttpErrors(res, navigate))
        .then(response => response.text())