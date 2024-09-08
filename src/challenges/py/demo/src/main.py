import csv

def read_csv(path):
    total = 0
    with open(path, 'r') as file:
        csv_reader = csv.reader(file)
        next(csv_reader)  # Saltar la primera fila si contiene encabezados
        for row in csv_reader:
            if len(row) >= 2:
                try:
                    expense = float(row[1])
                    total += expense
                except ValueError:
                    print(f"Advertencia: No se pudo convertir '{row[1]}' a número. Fila ignorada.")
    return total

response = read_csv('./data.csv')
print(response)
