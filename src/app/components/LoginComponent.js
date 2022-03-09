import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../../services/googleRefreshTokens";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { save_current_user } from "../pages/home/redux/reducer";
const clientId = process.env.REACT_APP_CLIENT_ID;

export const LoginPrompt = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    const {
      profileObj: { name },
    } = res;
    const { profileObj } = res;
    dispatch(save_current_user(profileObj));
    localStorage.setItem("username", name);
    navigate("/dashboard");
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    alert(`Failed to login. 😢 Please try again later`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
};
