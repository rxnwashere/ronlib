alumnes = 10
max_nota = 0
total = 0

for i in range(1,11):
    nota = eval(input(f"Dona'm la nota de l'alumne {i}?: "))
    total += nota
    if(nota > max_nota):
        max_nota = nota
        mitja = total / 10
print(f"La nota màxima del grup és {max_nota:.2f} i la mitja {mitja:.2f}")