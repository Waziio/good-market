import { Input, Button } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <form className="bg-primary w-60 mx-auto mb-16 py-5 flex flex-col gap-12 rounded-lg">
      <p className="text-secondary text-center text-2xl font-bold">Connexion</p>
      <div id="inputs" className="w-2/3 mx-auto flex flex-col gap-8">
        <Input type="email" placeholder="Adresse email" bg="white" />
        <Input type="password" placeholder="Mot de passe" bg="white" />
      </div>
      <Button margin={"auto"} _hover={{ opacity: "85%" }} _active={{ opacity: "75%" }} textColor={"primary"} bg={"secondary"}>
        Se connecter
      </Button>
    </form>
  );
};

export default LoginForm;
