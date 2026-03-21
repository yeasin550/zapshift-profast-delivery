import { useLocation } from "react-router";
import useAuth from "../../../Hooks/UseAuth";

const SocialLogin = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.includes("login");

  const {signInWithGoogle} = useAuth();

  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result => {
        console.log(result.user);
    })
    .catch(error => [
        console.error(error)
    ])
  }

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="cursor-pointer w-full border py-2 rounded-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          className="w-5 h-5"
        />
        {isLoginPage ? "Login with Google" : "Register with Google"}
      </button>
    </div>
  );
};

export default SocialLogin;
