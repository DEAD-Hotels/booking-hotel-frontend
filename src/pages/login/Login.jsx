import {AppContext} from "../../context/AppContext";
import {useContext} from "react";
import {useSnackbar} from "../../utils/snackbar";
import * as securityApi from "../../api/securityApi";
import {formikValidate} from "../../forms/formik/formikValidation";
import {required} from "../../forms/formik/formikValidationRules";
import {useFormik} from "formik";
import LoginView from "./LoginView";
import {useNavigate} from "react-router";
import {APP_NAME} from "../../const/commonConsts";


const validate = formikValidate({
    username: [required()],
    password: [required()]
})
const handleLogin = (history, location, context, setContext, showError, navigate) => (values) => {
    return securityApi.login(values.username, values.password)
        .then((currentUser) => {
            setContext({...context, currentUser});
            navigate("/");
        })
        .catch(err => showError("Ошибка аутентификации: Неверное имя пользователя или пароль. " + err));
}

const Login = (props) => {
    const [context, setContext] = useContext(AppContext);
    const {history, location} = props;
    const {showError} = useSnackbar();
    const navigate = useNavigate();
    const login = handleLogin(history, location, context, setContext, showError, navigate);
    const {values, errors, handleSubmit, handleChange, isSubmitting, setErrors} =
        useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (values) => {
            return login(values)
        },
        validate,
        validateOnChange: false,
        validateOnBlur: true
    });
    return <LoginView
        appName={APP_NAME}
        values={values}
        errors={errors}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isSubmitting={isSubmitting}
        setErrors={setErrors}
        {...props} />;
};

export default Login;