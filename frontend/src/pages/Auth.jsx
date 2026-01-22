import { GoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../utils/googleAuth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <GoogleLogin
      onSuccess={async (res) => {
        try {
          const data = await googleLogin(res.credential);

          localStorage.setItem("aplica_token", data.token);
          localStorage.setItem("aplica_user", JSON.stringify(data.user));

          if (!data.user.profileComplete) {
            navigate("/dashboard/profile/professional");
          } else {
            navigate("/dashboard/home");
          }
        } catch (err) {
          console.error(err);
          alert("Login failed");
        }
      }}
      onError={() => {
        console.error("Google popup error");
        alert("Login failed");
      }}
    />
  );
};

export default Auth;
