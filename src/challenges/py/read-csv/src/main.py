import csv

def read_csv(path):
    total = 0
    with open(path, 'r') as file:
        csv_reader = csv.reader(file)
        next(csv_reader)  # Skip the header row if it exists
        for row in csv_reader:
            if len(row) >= 2:  # Ensure the row has at least 2 columns
                try:
                    expense = float(row[1])  # Convert the second column to float
                    total += expense
                except ValueError:
                    print(f"Warning: Could not convert '{row[1]}' to a number. Skipping this row.")
    return total

response = read_csv('./data.csv')
print(response)
