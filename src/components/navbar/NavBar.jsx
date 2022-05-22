import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from "react-bootstrap";
import "./navbar.css";
import {useNavigate} from "react-router";
import {Button} from "@mui/material";
import {useContext} from "react";
import {AppContext} from "../../context/AppContext";
import * as securityApi from "../../api/securityApi";
import {useSnackbar} from "../../utils/snackbar";

export const NavBar = () => {
    const navigate = useNavigate();
    const {showSuccess} = useSnackbar();
    const [context] = useContext(AppContext);

    const {currentUser} = context;
    const currentUserName = currentUser && currentUser.username;

    const handleLogout = () => {
        securityApi.logout()
            .then(()=> {
                showSuccess("Вы успешно вышли из аккаунта");
                navigate("/login");
            });
    }
    return (
        <>
            <div className="navbar">
                <div className="navContainer">
                    <Nav.Link href="/" style={{color: "inherit", textDecoration: "none"}}>
                        <Navbar.Brand className="logo">TripaGo</Navbar.Brand>
                    </Nav.Link>
                    <div className="navItems">
                        {currentUser ?
                            <>
                                {currentUserName}
                            <Button onClick={handleLogout}>Выйти</Button>
                            </>
                            :
                            <>
                                <Button
                                    style={{textTransform: "none", border: "1px solid"}}
                                    color="inherit"
                                    varian="contained"
                                    size="medium"
                                    href="/signUp">
                                    Registration
                                </Button>
                                <Button
                                    style={{textTransform: "none", border: "1px solid", marginLeft: 20}}
                                    color="inherit"
                                    varian="outlined"
                                    size="medium"
                                    href="/login">
                                    Login
                                </Button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}