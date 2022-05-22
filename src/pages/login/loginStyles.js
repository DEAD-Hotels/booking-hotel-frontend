/*pay attention to import makeStyles from /core package, makeStyles from @material-ui/styles
  doesn't have a default theme and it leads to tests failings*/
import {makeStyles} from "@material-ui/core/styles";

export const loginStyles = theme => ({
  card: {
    margin: "10% auto 0 auto",
    width: "400px",
    "@media (max-width: 500px)": {
      margin: "15% 0 0 0",
      width: "100%",
      boxShadow: "none",
      border: "none",
    },
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cell: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  actions: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column"
  },
  button: {
    marginTop: 10
  },
  appLogo: {
    width: 64,
    height: 64,
  },
  appTitle: {
    color: theme.palette.primary.contrastText,
    fontWeight: 300,
    textAlign: "center"
  },
  field: {
    width: "100%",
  },
  companyLogo: {
    width: 188,
    // height: 200,
    margin: "5px auto 0 auto",
    display: "block",
  },
  systemLabel: {
    color: "rgba(0, 0, 0, 0.4)",
    margin: "10px auto 0 auto",
    width: 400,
    textAlign: "center",
    display: "block",
  },
});

export const useLoginStyles = makeStyles(loginStyles, {name: "Login"});
