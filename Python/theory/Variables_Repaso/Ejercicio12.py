num = int(input("Escribe el primer numero: "))
print("NÚMERO\t\tCUADRADO\tCUBO\n*********************************************")
num_cuadrado = num ** 2
num_cubo = num ** 3
for num in range(num+0,num+6): #Utilizamos la variable num como contador.
    #El intervalo es de la variable sumada + 0 hasta la variable sumada + 6-1.
    #Lo que hará que se muestre el número introducido por el usuario y los 5 siguientes.
    print(f"{num:>5}\t\t{num_cuadrado:>5}\t\t{num_cubo:>5}")