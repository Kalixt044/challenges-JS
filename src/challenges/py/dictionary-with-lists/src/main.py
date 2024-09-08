def dictionary_with_lists(names):
    students = {
        'school': "Platzi",
        'names': names,
        'first_student': names[0] if names else "",
        'last_student': names[-1] if names else "",
        'count': len(names)
    }
    return students

# Ejemplo de uso
response = dictionary_with_lists(["Pepe", "Luis"])
print(response)
