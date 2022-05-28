import './reserve.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {HOST} from "../../const/commonConsts";
import useFetch from "../../hooks/useFetch";
import {useContext, useState} from "react";
import {SearchContext} from "../../context/SearchContext";
import {useNavigate} from "react-router";
import {dayDifference, findRoomsById} from "../../utils/calculateDays";
import * as hotelApi from "../../api/hotelApi";
import {useSnackbar} from "../../utils/snackbar";

const onSaveReservation = (totalPrice, dates, sendingRooms, showSuccess, showError, navigate) => {
    hotelApi.saveReservationInfo(totalPrice, dates[0].startDate, dates[0].endDate, sendingRooms)
        .then(res => {
            showSuccess(res);
            navigate("/")
        })
        .catch(err => showError(err))
}

export const Reserve = ({setOpen, hotelId}) => {
    const navigate = useNavigate();
    const {showSuccess, showError} = useSnackbar();
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const {data} = useFetch(HOST + `/hotels/${hotelId}/rooms`);
    const {dates} = useContext(SearchContext);

    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    const handleClick = () => {
        const sendingRooms = [];

        selectedRooms.map((roomId) => {
            const room = findRoomsById(data, roomId);
            sendingRooms.push(room);
        });

        onSaveReservation(totalPrice, dates, sendingRooms, showSuccess, showError, navigate);
    };
    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(checked
            ? [...selectedRooms, value]
            : selectedRooms.filter((item) => item !== value));

        const room = findRoomsById(data, value);
        setTotalPrice(checked ? totalPrice + (room.id * days) : totalPrice - (room.id * days));
    }

    return (
        <div className="reserve">
            <div className="reserve-container">
                <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)}/>
                <span> Выберите номера:</span>
                {data.map((item, index) => (
                    <div className="rItem" key={index}>
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">Max people: <b>{item.maxPeople}</b></div>
                            <div className="rPrice">{item.price} PRICE</div>
                        </div>
                        <div className="room-selected">
                            <input type="checkbox"
                                   onChange={handleSelect}
                                   name={item.id}
                                   value={item.id}
                            />
                        </div>
                    </div>
                ))}
                <div className="rTotal">
                    <div className="rTitle">Общая сумма за {days} дней:</div>
                    <div className="rPrice">
                        {totalPrice}
                    </div>
                </div>
                <button onClick={handleClick} className="rButton">
                    Забронировать сейчас!
                </button>
            </div>
        </div>
    )
}