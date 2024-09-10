num = int(input("Fins a qui número senar vols calcular?: "))
suma = 0

if(num % 2 != 0):
    for i in range(1,num+1):
        suma += i
    print(f"El resultat de la suma dels números entre l'1 i el {num} és {suma}")
else:
    print("ERROR! El número introduït no és senar!")