import React from "react";
import './App.css';
import {Home} from "./pages/home/Home";
import {NotFound} from "./pages/notFound/Error"
import {Route, Routes} from "react-router";
import List from "./pages/listOfRooms/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login/>} exact/>
                <Route path="/signUp" element={<Registration/>} exact/>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/rooms" element={<NotFound/>} exact/>
                <Route path="/hotels" element={<List/>} exact/>
                <Route path="/hotels/:id" element={<Hotel/>} exact/>
                <Route component={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
