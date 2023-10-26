export const handleLoginError = (err) => {
  if (err.response?.data) {
    const error = err.response.data;
    if (error.message === "Invalid password") {
      return "Mot de passe incorrect";
    } else if (parseInt(error.statusCode) === 404 && error.message === "User") {
      return "Adresse email incorrecte";
    }
  }
  return "Une erreur est survenue";
};
