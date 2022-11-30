export const checkEmail = (mail: string) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (mail.match(validRegex)) {
    return true;
  }
  return false;
};

export const checkMails = (mails: string[], length: number) => {
  const mailOk = [];
  for (let i = 0; i < length; i++) {
    const mail = mails.at(i);
    if (mail) {
      mailOk.push(checkEmail(mail));
    } else mailOk.push(false);
  }
  return mailOk.every((element) => element === true);
};
