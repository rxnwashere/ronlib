#Calculadora con funciones
#Programa hecho por Aarón Cano

"""
FUNCIONES A DEFINIR:

-Suma
-Resta
-Multiplicación
-División
-Potencia
-Raíz cuadrada
-Factorial

"""

nums = []

def Suma():
    suma = sum(nums)
    print(f"{nums[0]} + {nums[1]} = {suma}")
    operacion = 0

def Resta():
    resta = nums[0] - nums[1]
    print(f"{nums[0]} - {nums[1]} = {resta}")
    operacion = 0
    
def Multiplicacion():
    multiplicacion = nums[0] * nums[1]
    print(f"{nums[0]} * {nums[1]} = {multiplicacion}")
    operacion = 0
    
def Division():
    if nums[0] == 0:
        print(f"{nums[0]} / {nums[1]} = 0")
        operacion = 0
        
    elif nums[1] == 0:
        print("MATH ERROR!")
        operacion = 0
        
    else:
        division = nums[0] / nums[1]
        cociente = nums[0] // nums[1]
        resto = nums[0] % nums[1]
        print(f"{nums[0]} / {nums[1]} = {division}")
        print(f"Cociente = {cociente}")
        print(f"Resto = {resto}")
        operacion = 0
    
def Potencia():
    potencia = nums[0] ** nums[1]
    print(f"{nums[0]} ** {nums[1]} = {potencia}")
    operacion = 0
    
def Raiz_Cuadrada():
    raiz_c = nums[0] ** 0.5
    print(f"√{nums[0]} = {raiz_c}")
    operacion = 0
        
def Factorial():
    for i in range(1, nums[0]+1):
        factorial *= i
    print(f"{nums[0]}! = {factorial}")
    operacion = 0
    
def seleccion():
    nums.clear()
    contador = 0
    while contador < 2:
        num = int(input("Escribe un número entero: "))
        nums.append(num)
        contador += 1

print("""CALCULADORA
===================================

Elige la operación a realizar:

-Suma (1)
-Resta (2)
-Multiplicación (3)
-División (4)
-Potencia (5)
-Raíz cuadrada (6)
-Factorial (7)
-Salir (Cualquier otro número)

""")

operacion = 0

while operacion == 0:
    operacion = int(input("> "))

if operacion == 1:
    seleccion()
    Suma()
    
elif operacion == 2:
    seleccion()
    Resta()
    
elif operacion == 3:
    seleccion()
    Multiplicacion()
    
elif operacion == 4:
    seleccion()
    Division()
    
elif operacion == 5:
    seleccion()
    Potencia()
    
elif operacion == 6:
    num = -1
    while num < 0:
        num = int(input("Introduce un número entero positivio: "))
        if num < 0:
            print("ERROR! El número a introducir debe ser positivo")
        else:
            nums.append(num)
            pass
    Raiz_Cuadrada()
    
elif operacion == 7:
    num = -1
    while num < 0:
        num = int(input("Introduce un número entero positivio: "))
        if num < 0:
            print("ERROR! El número a introducir debe ser positivo")
        else:
            nums.append(num)
            pass
    Factorial()

else:
    print("Fi del programa")