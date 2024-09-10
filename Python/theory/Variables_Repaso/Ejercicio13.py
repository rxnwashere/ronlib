pizza = input("Quina pizza vols? ")
preu = eval(input("Quin preu té aquesta pizza? "))
quantitat = int(input("Quantes en vols? "))
total_sense_iva = preu * quantitat
iva = preu * 0.21
total = total_sense_iva + iva
if (quantitat > 1):
    print(f"{quantitat} pizzes {pizza} costen {preu:.2f}$ més 21% d'IVA fan un total de: {total:.2f}")