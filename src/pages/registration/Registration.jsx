import {AppContext} from "../../context/AppContext";
import {useContext} from "react";
import {useSnackbar} from "../../utils/snackbar";
import * as securityApi from "../../api/securityApi";
import {formikValidate} from "../../forms/formik/formikValidation";
import {required} from "../../forms/formik/formikValidationRules";
import {useFormik} from "formik";
import LoginView from "./RegView";
import {useNavigate} from "react-router";
import {APP_NAME} from "../../const/commonConsts";


const validate = formikValidate({
    username: [required()],
    password: [required()],
    email: [required()],
    fullName: [required()]
})
const handleSignUp = (context, setContext, showSuccess, showError, navigate) => (values) => {
    return securityApi.signUp(
        values.username, values.password,
        values.fullName, values.email)
        .then((text) => {
            showSuccess("Регистрация пользователя прошла успешна!"+ text)
            navigate("/login");
        })
        .catch(err => showError("Ошибка регистрации нового пользователя: " + err));
}

const Login = (props) => {
    const [context, setContext] = useContext(AppContext);
    const {showError, showSuccess} = useSnackbar();
    const navigate = useNavigate();
    const signUp = handleSignUp(context, setContext, showSuccess, showError, navigate);
    const {values, errors, handleSubmit, handleChange, isSubmitting, setErrors} =
        useFormik({
            initialValues: {
                username: "",
                password: "",
                fullName: "",
                email: ""
            },
            onSubmit: (values) => {
                return signUp(values)
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