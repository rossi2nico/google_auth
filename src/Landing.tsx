import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export function Landing() {
  return (
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Login Success: currentUser:", credentialResponse);
              console.log("Decoded JWT:", jwtDecode(credentialResponse.credential));
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            theme= "outline"
            size="large"
            shape="rectangular"
            logo_alignment="center" 
          />
  );
}
