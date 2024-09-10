import random

print("GENERADOR DE DIRECCIONES DE CORREO ELECTRÓNICO\n==============================================")
dominio = input("Escribe el dominio de tu correo electrónico (ejemplo: gmail.com): ").lower()

if "." in dominio:
    print(f"""\nPuedes utilizar los siguientes modelos de correo electrónico:\n
    1) nombreab@{dominio}
    2) inicialapellido1@{dominio}
    3) inicialapellido1apellido2@{dominio}
    4) nombre_apellido1apellido2@{dominio}
    5) nombreabnum@{dominio}
    6) inicialapellido1num@{dominio}
    7) inicialapellido1apellido2num@{dominio}
    8) nombre_apellido1apellido2num@{dominio}""")
    estilo = int(input("\nEscoge el estilo que quieras para tu correo electrònico (número): "))
    
    if(estilo == 1):
        nombre = input("Escribe tu nombre: ").lower()
        apellido1 = input("Escribe tu primer apellido: ").lower()
        apellido1 = apellido1[:1]
        apellido2 = input("Quieres escribir tu segundo apellido? (S/N): ").lower()
        if(apellido2 == "S".lower()):
            apellido2 = input("Escribe tu segundo apellido: ").lower()
            apellido2 = apellido2[:1]
            print(f"Su correo será: {nombre}{apellido1}{apellido2}@{dominio}")
        else:
            print(f"Su correo será: {nombre}{apellido1}@{dominio}")
            
    elif(estilo == 2):
        nombre = input("Escribe tu nombre: ").lower()
        nombre = nombre[:1]
        apellido1 = input("Escribe tu primer apellido: ").lower()
        print(f"Su correo será: {nombre}{apellido1}@{dominio}")
    
    elif(estilo == 3):
        nombre = input("Escribe tu nombre: ").lower()
        nombre = nombre[:1]
        apellido1 = input("Escribe tu primer apellido: ").lower()
        apellido2 = input("Escribe tu primer apellido: ").lower()
        print(f"Su correo será: {nombre}{apellido1}{apellido2}@{dominio}")
        
    elif(estilo == 4):
        nombre = input("Escribe tu nombre: ").lower()
        apellido1 = input("Escribe tu primer apellido: ").lower()
        apellido2 = input("Quieres escribir tu segundo apellido? (S/N): ").lower()
        if(apellido2 == "S".lower()):
            apellido2 = input("Escribe tu primer apellido: ").lower()
            print(f"Su correo será: {nombre}_{apellido1}{apellido2}@{dominio}")
        else:
            print(f"Su correo será: {nombre}_{apellido1}@{dominio}")
    
    elif(estilo == 5):
        nombre = input("Escribe tu nombre: ").lower()
        apellido1 = input("Escribe tu primer apellido: ").lower()
        apellido1 = apellido1[:1]
        apellido2 = input("Quieres escribir tu segundo apellido? (S/N): ").lower()
        if(apellido2 == "S".lower()):
            apellido2 = input("Escribe tu segundo apellido: ").lower()
            apellido2 = apellido2[:1]
            num = int(input("Quieres que introducir tu mismo el número (1) o generarlo aleatoriamente (2)?: "))
            if(num == 1):
                num = int(input("Introduce un número: "))
                print(f"Su correo será: {nombre}{apellido1}{apellido2}{num}@{dominio}")
            else:
                minimo = int(input("Escribe el valor mínimo del intervalo: "))
                maximo = int(input("Escribe el valor máximo del intervalo: "))
                if(minimo > maximo):
                    print("\n====ERROR====\nVALOR MINIMO SUPERIOR AL VALOR MÁXIMO!")
                elif(maximo < minimo):
                    print("\n====ERROR====\nVALOR MÁXIMO INFERIOR AL VALOR MINIMO")
                elif(minimo == maximo):
                    print("\n====ERROR====\nVALOR MÁXIMO Y MÍNIMO IGUALES")
                else:
                    num = random.randint(minimo,maximo)
                    print(f"Su correo será: {nombre}{apellido1}{apellido2}{num}@{dominio}")
        else:
            num = int(input("Quieres que introducir tu mismo el número (1) o generarlo aleatoriamente (2)?: "))
            if(num == 1):
                num = int(input("Introduce un número: "))
                print(f"Su correo será: {nombre}{apellido1}{num}@{dominio}")
            else:
                minimo = int(input("Escribe el valor mínimo del intervalo: "))
                maximo = int(input("Escribe el valor máximo del intervalo: "))
                if(minimo > maximo):
                    print("\n====ERROR====\nVALOR MINIMO SUPERIOR AL VALOR MÁXIMO!")
                elif(maximo < minimo):
                    print("\n====ERROR====\nVALOR MÁXIMO INFERIOR AL VALOR MINIMO")
                elif(minimo == maximo):
                    print("\n====ERROR====\nVALOR MÁXIMO Y MÍNIMO IGUALES")
                else:
                    num = random.randint(minimo,maximo)
                    print(f"Su correo será: {nombre}{apellido1}{num}@{dominio}")
                    
    elif(estilo == 6):
        nombre = input("Escribe tu nombre: ").lower()
        nombre = nombre[:1]
        apellido1 = input("Escribe tu primer apellido: ").lower()
        num = int(input("Quieres que introducir tu mismo el número (1) o generarlo aleatoriamente (2)?: "))
        if(num == 1):
            num = int(input("Introduce un número: "))
            print(f"Su correo será: {nombre}{apellido1}{num}@{dominio}")
        else:
            minimo = int(input("Escribe el valor mínimo del intervalo: "))
            maximo = int(input("Escribe el valor máximo del intervalo: "))
            if(minimo > maximo):
                print("\n====ERROR====\nVALOR MINIMO SUPERIOR AL VALOR MÁXIMO!")
            elif(maximo < minimo):
                print("\n====ERROR====\nVALOR MÁXIMO INFERIOR AL VALOR MINIMO")
            elif(minimo == maximo):
                print("\n====ERROR====\nVALOR MÁXIMO Y MÍNIMO IGUALES")
            else:
                num = random.randint(minimo,maximo)
                print(f"Su correo será: {nombre}{apellido1}{num}@{dominio}")
                
    elif(estilo == 7):
        nombre = input("Escribe tu nombre: ").lower()
        nombre = nombre[:1]
        apellido1 = input("Escribe tu primer apellido: ").lower()
        apellido2 = input("Escribe tu segundo apellido: ").lower()
        num = int(input("Quieres que introducir tu mismo el número (1) o generarlo aleatoriamente (2)?: "))
        if(num == 1):
            num = int(input("Introduce un número: "))
            print(f"Su correo será: {nombre}{apellido1}{apellido2}{num}@{dominio}")
        else:
            minimo = int(input("Escribe el valor mínimo del intervalo: "))
            maximo = int(input("Escribe el valor máximo del intervalo: "))
            if(minimo > maximo):
                print("\n====ERROR====\nVALOR MINIMO SUPERIOR AL VALOR MÁXIMO!")
            elif(maximo < minimo):
                print("\n====ERROR====\nVALOR MÁXIMO INFERIOR AL VALOR MINIMO")
            elif(minimo == maximo):
                print("\n====ERROR====\nVALOR MÁXIMO Y MÍNIMO IGUALES")
            else:
                num = random.randint(minimo,maximo)
                print(f"Su correo será: {nombre}{apellido1}{apellido2}{num}@{dominio}")
                
    elif(estilo == 8):
        nombre = input("Escribe tu nombre: ").lower()
        apellido1 = input("Escribe tu primer apellido: ").lower()
        apellido2 = input("Quieres escribir tu segundo apellido? (S/N): ").lower()
        if(apellido2 == "S".lower()):
            apellido2 = input("Escribe tu primer apellido: ").lower()
            num = int(input("Quieres que introducir tu mismo el número (1) o generarlo aleatoriamente (2)?: "))
            if(num == 1):
                num = int(input("Introduce un número: "))
                print(f"Su correo será: {nombre}_{apellido1}{apellido2}{num}@{dominio}")
            else:
                minimo = int(input("Escribe el valor mínimo del intervalo: "))
                maximo = int(input("Escribe el valor máximo del intervalo: "))
                if(minimo > maximo):
                    print("\n====ERROR====\nVALOR MINIMO SUPERIOR AL VALOR MÁXIMO!")
                elif(maximo < minimo):
                    print("\n====ERROR====\nVALOR MÁXIMO INFERIOR AL VALOR MINIMO")
                elif(minimo == maximo):
                    print("\n====ERROR====\nVALOR MÁXIMO Y MÍNIMO IGUALES")
                else:
                    num = random.randint(minimo,maximo)
                    print(f"Su correo será: {nombre}_{apellido1}{apellido2}{num}@{dominio}")
        else:
            num = int(input("Quieres que introducir tu mismo el número (1) o generarlo aleatoriamente (2)?: "))
            if(num == 1):
                num = int(input("Introduce un número: "))
                print(f"Su correo será: {nombre}{apellido1}_{num}@{dominio}")
            else:
                minimo = int(input("Escribe el valor mínimo del intervalo: "))
                maximo = int(input("Escribe el valor máximo del intervalo: "))
                if(minimo > maximo):
                    print("\n====ERROR====\nVALOR MINIMO SUPERIOR AL VALOR MÁXIMO!")
                elif(maximo < minimo):
                    print("\n====ERROR====\nVALOR MÁXIMO INFERIOR AL VALOR MINIMO")
                elif(minimo == maximo):
                    print("\n====ERROR====\nVALOR MÁXIMO Y MÍNIMO IGUALES")
                else:
                    num = random.randint(minimo,maximo)
                    print(f"Su correo será: {nombre}_{apellido1}{num}@{dominio}")
else:
    print("\n====ERROR====\nDOMINIO NO VÁLIDO!")