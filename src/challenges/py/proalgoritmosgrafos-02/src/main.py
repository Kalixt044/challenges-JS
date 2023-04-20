def numeroDeIslas(mapa):
   # Tu código aquí 👇
   return mapa

mapa = [
["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"],
]
response = numeroDeIslas(mapa)
print(response)

mapa = [
["1","1","0","0","1"],
["1","1","1","0","1"],
["0","0","1","0","1"],
["0","0","0","0","1"],
["0","0","0","0","1"],
]
response = numeroDeIslas(mapa)
print(response)
