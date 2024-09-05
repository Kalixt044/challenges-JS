my_list = [1, -1, 2, -2, 3, -3, 4, -4]
new_list = []

# Recorremos my_list y agregamos los números positivos a new_list
for number in my_list:
    if number > 0:
        new_list.append(number)

# Imprimimos new_list
print(new_list)
