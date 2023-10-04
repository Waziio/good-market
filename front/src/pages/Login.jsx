import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div id="login-content" className="h-full flex flex-col justify-center items-center">
      <div className="w-full">
        <LoginForm></LoginForm>
      </div>

      <div className="flex justify-center">
        <Link to={"/signup"} className="text-primary">Pas encore de compte ? Créez en un</Link>
      </div>
    </div>
  );
};

export default Login;
