import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { handleLoginError } from "../error/handleError";
import { sleep } from "../utils/utils";

const Login = () => {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8080/auth/signin", { email: email, password: password });
      localStorage.setItem("jwt", response.data.jwt);
      setUsername(response.data.user.username);
      setLoading(true);
      await sleep(3000);
      navigate("/");
      setLoading(false);
    } catch (err) {
      setErrorMessage(handleLoginError(err));
    }
  };

  return (
    <>
      {errorMessage || username
        ? toast({
            title: errorMessage ? "Erreur" : "Connexion réussie",
            description: errorMessage ? errorMessage : `Bienvenue ${username}`,
            status: errorMessage ? "error" : "success",
            duration: 5000,
            position: "top-right",
            isClosable: false,
            variant: "solid",
            onCloseComplete: () => {
              setUsername("");
              setErrorMessage("");
            },
          })
        : null}
      <div id="login-content" className="h-full flex flex-col justify-center items-center">
        <div className="w-full">
          <LoginForm onLogin={handleLogin} loading={loading}></LoginForm>
        </div>

        <div className="flex justify-center">
          <Link to={"/signup"} className="text-primary">
            Pas encore de compte ? Créez en un
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
