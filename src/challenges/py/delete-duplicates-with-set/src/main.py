countries = {"MX", "COL", "ARG", "USA"}
northAm = {"USA", "CANADA"}
centralAm = {"MX", "GT", "BZ"}
southAm = {"COL", "BZ", "ARG"}

# Combinar todos los conjuntos en new_set
new_set = countries.union(northAm, centralAm, southAm)

print(new_set)
