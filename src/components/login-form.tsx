import { FunctionComponent, useCallback } from "react";
import { TextField, InputAdornment, Icon, Button } from "@mui/material";
import styles from "./login-form.module.css";
const LoginForm: FunctionComponent = () => {
  const onFormClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bG']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <form className={styles.form} onClick={onFormClick}>
      <TextField
        className={styles.username}
        sx={{ width: 300 }}
        color="primary"
        variant="filled"
        type="text"
        label="Username"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.password}
        sx={{ width: 300 }}
        color="primary"
        variant="filled"
        type="text"
        name="milind"
        label="password"
        placeholder="Placeholder"
        size="medium"
        margin="none"
        required
      />
      <Button
        className={styles.loginBtn}
        sx={{ width: 300 }}
        variant="contained"
        color="primary"
      >
        login
      </Button>
      <div className={styles.forgotPassword}>Forgot password?</div>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <Button
        className={styles.loginBtn1}
        sx={{ width: 300 }}
        variant="contained"
        color="primary"
      >
        login
      </Button>
    </form>
  );
};

export default LoginForm;
