export const validateEmail = (email: string) => {
  if (email === '') {
    return 'Enter the Email';
  }

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validation = re.test(String(email).toLowerCase());

  if (!validation) {
    return 'Enter correct e-mail address';
  }

  return 'valid-email';
};

export const validatePassword = (password: string, repeatPassword: string) => {
  if (password === '') {
    return 'Create a password';
  }
  if (password.length < 6) {
    return 'Too Short Password';
  }
  if (password.search(/[a-zA-Z]/) === -1) {
    return 'No letter';
  }

  if (password !== '' && repeatPassword === '') {
    return 'Repeat the Password';
  }

  if (repeatPassword !== '' && password === '') {
    return 'Repeat the Password';
  }

  if (password !== repeatPassword) {
    return 'Different passwords';
  }

  return 'valid-password';
};
