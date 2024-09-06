def count_words(text):
    # Inicializamos un contador de palabras
    total_words = 0
    
    # Iteramos sobre cada frase en la lista
    for phrase in text:
        # Dividimos la frase en palabras y contamos
        words = phrase.split()
        total_words += len(words)
    
    # Retornamos el total de palabras
    return total_words

# Ejemplo de uso
text = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit"
]
response = count_words(text)
print(response)
