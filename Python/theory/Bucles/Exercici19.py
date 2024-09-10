a = 0
e = 0
i = 0
o = 0
u = 0

while True:
    caracter = input("Introdueix un caràcter: ").lower()
    if(caracter == "#".lower()):
        break
    elif(caracter == "a".lower()):
        a += 1
    elif(caracter == "e".lower()):
        e += 1
    elif(caracter == "i".lower()):
        i += 1
    elif(caracter == "o".lower()):
        o += 1
    elif(caracter == "u".lower()):
        u += 1
    else:
        pass
print(f"Has introduït {a} a, {e} e, {i} i, {o} o, {u} u")