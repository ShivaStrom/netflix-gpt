export const validation = (email, password, name) => {
  const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+/.test(email);
  const passwordValidator =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  const nameValidator = /^[a-zA-Z0-9]/.test(name);

  if (!emailValidator) return "Email is Invalid";
  if (!passwordValidator) return "Password is Invalid";
  if (!nameValidator) return "Name is Invalid";

  return null;
};
