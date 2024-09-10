empleats = int(input("Quants empleats tens?: "))
max_sou = 0

for i in range(1,empleats+1):
    sou = eval(input(f"Quin és el sou de l'empleat {i}?: "))
    if(sou > max_sou):
        max_sou = sou
print(f"El sou màxim introduït és {max_sou:.3f}")