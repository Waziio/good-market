import { useToast } from "@chakra-ui/react";

const ToastLogin = ({ username, errorMessage, onClose }) => {
  const toast = useToast();
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
              onClose();
            },
          })
        : null}
    </>
  );
};

export default ToastLogin;
