import { useNavigate } from "react-router-dom";
import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENT_ID;

export const LogoutPrompt = () => {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate("/login");
    localStorage.removeItem("username");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
};
