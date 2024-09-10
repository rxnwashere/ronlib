#Ejercicio 3 Variables
#Repaso
#Programa hecho por Aarón Cano

print("TRADUCTOR DECIMAL, BINARIO, OCTAL Y HEXADECIMAL\n")
tipo = input("Que sistema numerico quieres utilitzar?\nDECIMAL (D)\nBINARIO (B)\nOCTAL (O)\nHEXADECIMAL (H)\n").lower()
#Caracter especial \n para realizar saltos de linea
#.lower() interpreta el texto siempre a minusculas

if(tipo == "D".lower()):
    num_dec = int(input("\nEscribe un número en base 10 para traducir: "))
    #Debe ser un número entero, con reales no funciona
    num_bin = bin(num_dec)
    num_oct = oct(num_dec)
    num_hex = hex(num_dec)
    print(f"BINARIO: {num_bin}\nOCTAL: {num_oct}\nHEXADECIMAL: {num_hex}")

elif(tipo == "B".lower()):
    print("\nIMPORTANTE!\nEn números binarios debes escribir el número con el prefijo 0b al principio!\nEjemplo: 0b101")
    num_bin = bin(input("Escribe un número en base 2 para traducir: "))
    num_dec = int(num_bin)
    num_oct = oct(num_bin)
    num_hex = hex(num_bin)
    print(f"DECIMAL: {num_dec}\nOCTAL: {num_oct}\nHEXADECIMAL: {num_hex}")

elif(tipo == "O".lower()):
    print("\nIMPORTANTE!\nEn números octales debes escribir el número con el prefijo 0o al principio!\nEjemplo: 0o34")
    num_oct = oct(input("Escribe un número en base 8 para traducir: "))
    num_dec = int(num_oct)
    num_bin = bin(num_oct)
    num_hex = bin(num_oct)
    print(f"DECIMAL: {num_dec}\nBINARIO: {num_bin}\nHEXADECIMAL: {num_hex}")

elif(tipo == "H".lowe()):
    print("\nIMPORTANTE!\nEn números hexadecimales debes escribir el número con el prefijo 0x al principio!\nEjemplo: 0xA4")
    num_hex = hex(input("Escribe un número en base 8 para traducir: "))
    num_dec = int(num_hex)
    num_bin = bin(num_hex)
    num_oct = oct(num_hex)
    print(f"DECIMAL: {num_dec}\nBINARIO: {num_bin}\nHEXADECIMAL: {num_hex}")