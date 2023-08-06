import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import LoginForm from "../components/login-form";
import styles from "./dashboard-login.module.css";
const DashboardLogin: FunctionComponent = () => {
  return (
    <div className={styles.dashboardLogin}>
      <img className={styles.bgIcon} alt="" src="/bg.svg" data-scroll-to="bG" />
      <LoginForm />
      <Button
        className={styles.loginBtn}
        sx={{ width: 189 }}
        variant="contained"
        color="primary"
      >
        login
      </Button>
    </div>
  );
};

export default DashboardLogin;
