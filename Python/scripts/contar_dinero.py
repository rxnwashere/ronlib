dinero = 0
valores = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01] #Lista de valores posibles del euro

for i in valores: #Recorre la lista de valores
    if i >= 5: #Billetes
        respuesta = input(f"¿Tienes billetes de {i} euros? (S/N): ").upper()
        if(respuesta == "S"):
            cantidad = int(input(f"¿Cuantos billetes de {i} euros tienes?\n> "))
            while cantidad <= 0:
                cantidad = int(input("¡La cantidad introducida no es válida!\nIntroduce una nueva cantidad: "))
            dinero += (i * cantidad)
        else:
            pass
    else:
        respuesta = input(f"¿Tienes monedas de {i} euros? (Valores decimales representan céntimos) (S/N): ").upper()
        if(respuesta == "S"):
            cantidad = int(input(f"¿Cuantas monedas de {i} euros tienes?\n> "))
            while cantidad <= 0:
                cantidad = int(input("¡La cantidad introducida no es válida!\nIntroduce una nueva cantidad: "))
            dinero += (i * cantidad)
        else:
            pass

print(f"¡En total tienes {dinero} euros!\nFIN DEL PROGRAMA")