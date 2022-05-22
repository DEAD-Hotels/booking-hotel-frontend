import {faBed, faCalendarDays, faHome, faPerson, faQuran,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./header.css";
import {DateRange} from "react-date-range";
import {useContext, useState} from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {format} from "date-fns";
import {useNavigate} from "react-router";
import {SearchContext} from "../../context/SearchContext";
import {NavBar} from "../navbar/NavBar";
import {Button} from "@mui/material";

// import {Navbar} from "react-bootstrap";


const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();
    const {dispatch} = useContext(SearchContext);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        dispatch({type: "NEW_SEARCH", payload: {destination, dates, options}});
        navigate("/hotels", {state: {destination, dates, options}});
    };

    return (
        <>
            <NavBar/>
            <div className="header">
                <div
                    className={type === "list" ? "headerContainer listMode" : "headerContainer"}
                >
                    <div className="headerList">
                        <div className="headerListItem active">
                            <Button href="/"
                                    color="inherit"
                                    style={{textTransform: "none"}}
                            >
                                <FontAwesomeIcon icon={faHome}/>
                                <span style={{marginLeft: "10px"}}>Home</span>
                            </Button>
                        </div>
                        <div className="headerListItem">
                            <Button href="/rooms"
                                    color="inherit"
                                    style={{textTransform: "none"}}>
                                <FontAwesomeIcon icon={faBed}/>
                                <span style={{marginLeft: "10px"}}>Rooms</span>
                            </Button>
                        </div>
                        <div className="headerListItem">
                            <Button href="/rooms"
                                    color="inherit"
                                    style={{textTransform: "none"}}>
                                <FontAwesomeIcon icon={faQuran}/>
                                <span style={{marginLeft: "10px"}}>Hotels</span>
                            </Button>
                        </div>
                    </div>
                    {type !== "list" && (
                        <>
                            <h1 className="headerTitle">
                                Не работает booking в России? Положитесь на нас!
                            </h1>
                            <p className="headerDesc">

                            </p>
                            {/*<button className="headerBtn">Sign in / Register</button>*/}
                            <div className="headerSearch">
                                <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                                    <input
                                        type="text"
                                        placeholder="Куда вы держите путь?"
                                        className="headerSearchInput"
                                        onChange={(e) => setDestination(e.target.value)}
                                    />
                                </div>
                                <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                                    <span
                                        onClick={() => setOpenDate(!openDate)}
                                        className="headerSearchText">
                                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                                        dates[0].endDate,
                                        "MM/dd/yyyy")}`}
                                </span>
                                    {openDate && (
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={(item) => setDates([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={dates}
                                            className="date"
                                            minDate={new Date()}
                                        />
                                    )}
                                </div>
                                <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                                    <span
                                        onClick={() => setOpenOptions(!openOptions)}
                                        className="headerSearchText">
                                    {`${options.adult} Взрослый · ${options.children} детей · ${options.room} Номер`}
                                </span>
                                    {openOptions && (
                                        <div className="options">
                                            <div className="optionItem">
                                                <span className="optionText">Взрослый</span>
                                                <div className="optionCounter">
                                                    <button
                                                        disabled={options.adult <= 1}
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("adult", "d")}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="optionCounterNumber">
                                                    {options.adult}
                                                </span>
                                                    <button
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("adult", "i")}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="optionItem">
                                                <span className="optionText">Ребенок</span>
                                                <div className="optionCounter">
                                                    <button
                                                        disabled={options.children <= 0}
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("children", "d")}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="optionCounterNumber">
                                                    {options.children}
                                                </span>
                                                    <button
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("children", "i")}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="optionItem">
                                                <span className="optionText">Номер</span>
                                                <div className="optionCounter">
                                                    <button
                                                        disabled={options.room <= 1}
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("room", "d")}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="optionCounterNumber">
                                                    {options.room}
                                                </span>
                                                    <button
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("room", "i")}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="headerSearchItem">
                                    <button className="headerBtn" onClick={handleSearch}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;