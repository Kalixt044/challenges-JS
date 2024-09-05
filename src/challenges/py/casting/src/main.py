name = 'Juana'
age = '10'

# Convertimos age a un entero para poder realizar cálculos
age_int = int(age)

# Calculamos la edad en 10 años
future_age = age_int + 10

# Creamos el template con el formato requerido
template = f"Hola mi nombre es {name}, tengo {age} años y en 10 años tendré {future_age} años"

print(template)
