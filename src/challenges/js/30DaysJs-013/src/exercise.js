export function validateForm(formData, registeredUsers) {
 const { name, lastname, email, password } = formData;

  // Verificar que todos los campos requeridos estén completos
  if (!name || !lastname || !email || !password) {
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!lastname) missingFields.push("lastname");
    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");

    throw new Error(`Faltan los siguientes campos requeridos: ${missingFields.join(", ")}`);
  }

  // Verificar si el email ya está en uso
  if (registeredUsers.find(user => user.email === email)) {
    throw new Error(`El email ${email} ya está en uso`);
  }

  // Agregar el usuario a la lista de usuarios registrados y retornar un mensaje de éxito
  registeredUsers.push({ name, lastname, email });
  return `Tu registro fue exitoso ${name} ${lastname}`;
}
