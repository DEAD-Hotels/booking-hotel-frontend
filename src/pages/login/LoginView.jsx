import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useLoginStyles} from "./loginStyles";
import logo from "../../images/log.png";
import TextField from "@material-ui/core/TextField";

export default ({
    values = {}, appName, handleSubmit = () => {
    }, handleChange, isSubmitting, errors = {}, setErrors
}) => {
    const classes = useLoginStyles();
    return (
        <form onSubmit={handleSubmit} onChange={() => Object.keys(errors).length !== 0 && setErrors({})}>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.header}
                    title={
                        <Typography variant="h3" className={classes.appTitle} noWrap>
                            {appName}
                        </Typography>
                    }
                />
                <CardContent>
                    <TextField
                        id="username"
                        label="Имя пользователя"
                        placeholder="Введите имя пользователя"
                        type="text"
                        className={classes.field}
                        error={errors.username}
                        helperText={errors.username}
                        value={values.username}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                    <br/>
                    <TextField
                        id="password"
                        label="Пароль"
                        placeholder="Введите пароль"
                        error={errors.password}
                        helperText={errors.password}
                        type="password"
                        value={values.password}
                        className={classes.field}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                </CardContent>
                <CardActions className={classes.actions}>
                    <Button name="enter" variant="contained" color="primary" size="large" type="submit"
                            disabled={isSubmitting}>
                        Войти
                    </Button>
                    <Button
                        className={classes.button}
                        name="enter"
                        color="primary"
                        variant="contained"
                        size="large"
                        type="submit"
                        href="/signUp">
                        Регистрация
                    </Button>
                </CardActions>
            </Card>

            <img src={logo} className={classes.companyLogo} alt="ЛАНИТ Би Пи Эм"/>
        </form>
    );
};
