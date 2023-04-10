export function sendEmail(email, subject, body) {
return new Promise((resolve, reject) => {
    if (!email || !subject || !body) {
      reject(new Error("Hacen falta campos para enviar el email"));
    } else {
      window.setTimeout(() => {
        resolve({ email, subject, body });
      }, 2000);
    }
  });

}
