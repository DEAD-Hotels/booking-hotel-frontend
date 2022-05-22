import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../../images/log.png";
import TextField from "@material-ui/core/TextField";
import {useLoginStyles} from "../login/loginStyles";

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
                    <TextField
                        id="email"
                        label="email"
                        placeholder="Введите email"
                        error={errors.email}
                        helperText={errors.email}
                        type="email"
                        value={values.email}
                        className={classes.field}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                    <TextField
                        id="fullName"
                        label="Полное имя"
                        placeholder="Введите полное имя"
                        error={errors.fullName}
                        helperText={errors.fullName}
                        type="text"
                        value={values.fullName}
                        className={classes.field}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                </CardContent>
                <CardActions className={classes.actions}>
                    <Button name="enter" variant="contained" color="primary" size="large" type="submit"
                            disabled={isSubmitting}>
                        Зарегистрироваться
                    </Button>
                </CardActions>
            </Card>

            <img src={logo} className={classes.companyLogo} alt="ИКБО-20-19"/>
        </form>
    );
};
