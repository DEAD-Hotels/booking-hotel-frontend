import Button from "@material-ui/core/Button";
import React from "react";
import "./error.css";
import errorImage from "../../images/not_found.png"

export const NotFound = () => {
    return (
        <div className="container">
            <img src={errorImage} alt="Вставка картинки" className="img"/>
            <h1 className="title">
                404
            </h1>
            <div className="desc">
                Данная страница не существует или находится в доработке. Попробуйте позже!
            </div>
            <Button name="enter" variant="contained" color="primary" size="large" type="submit" href="/">
                Вернуться назад
            </Button>

        </div>
    )
}