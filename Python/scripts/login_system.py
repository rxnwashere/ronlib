data = []  # Lista de datos de usuario (Usuario y contraseña)
failed_attempts = 0  # Intentos de inicio de sesión fallidos (si los intentos son más de 3, el inicio de sesión fallará)

def function():
    print("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjHi8bx_ayBAxVzTKQEHe_cApEQyCl6BAggEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU&opi=89978449")

def register(a, b, c):
    global failed_attempts
    while c != b:
        failed_attempts += 1
        if failed_attempts == 3:
            print("ERROR!!! Turn back to register!")
            return  # Salir de la función si se alcanzan 3 intentos fallidos
        c = input("Passwords don't match! Repeat password: ")
    print("Register Successful!")
    data.append(a)  # Añade el nombre de usuario
    data.append(b)  # Añade la contraseña
    print(f"Username: {data[0]}")
    print(f"Password: {data[1]}")

def login(a, b):  # a = Nombre de usuario, b = Contraseña
    global failed_attempts
    while a != data[0]:
        failed_attempts += 1
        if failed_attempts == 3:
            print("ACCOUNT BLOCKED FOR 3 DAYS")
            return  # Salir de la función si se alcanzan 3 intentos fallidos
        a = input("Incorrect Username! Repeat username: ")
    while b != data[1]:
        failed_attempts += 1
        if failed_attempts == 3:
            print("ACCOUNT BLOCKED FOR 3 DAYS")
            return  # Salir de la función si se alcanzan 3 intentos fallidos
        b = input("Incorrect password! Repeat password: ")
    function()

userreg = input("Username: ")
passwdreg = input("Password: ")
repeat = input("Repeat password: ")

print("====WELCOME TO (sample name) REGISTER PAGE====")
register(userreg, passwdreg, repeat)

userlog = input("Username: ")
passwdlog = input("Password: ")

print("====WELCOME TO (sample name) LOGIN PAGE====")
login(userlog, passwdlog)