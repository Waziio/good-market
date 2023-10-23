export const handleLoginError = (err) => {
  const error = err.response.data;
  if (error.message === "Invalid password") {
    return "Mot de passe incorrect";
  } else if (error.statusCode == 404 && error.message === "User") {
    return "Adresse email incorrecte";
  } else {
    return "Une erreur est survenue";
  }
};
