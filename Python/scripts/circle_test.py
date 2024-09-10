import turtle 

t = turtle 

t.left(360)
for x in range (100): #Bucle
    t.color("red")
    t.circle(x*2)
    t.speed(90)

input("Presiona qualsevol tecla per continuar: ")

turtle.home()
t.left(45)
for x in range (100):
    t.color("yellow")
    t.circle(x*2)
    t.speed(90)

input("Presiona qualsevol tecla per continuar: ")

turtle.home()
t.right(45)
for x in range (100):
    t.color("purple")
    t.circle(x*2)
    t.speed(90)
    
input("Presiona qualsevol tecla per continuar: ")

turtle.home()
t.right(90)
for x in range (100):
    t.color("pink")
    t.circle(x*2)
    t.speed(90)
    
input("Presiona qualsevol tecla per continuar: ")

turtle.home()
turtle.seth(270)
t.left(270)
for x in range (100):
    t.color("green")
    t.circle(x*2)
    t.speed(90)

input("Presiona qualsevol tecla per continuar: ")

turtle.home()
t.left(90)
for x in range (100):
    t.color("blue")
    t.circle(x*2)
    t.speed(90)
    
input("Presiona qualsevol tecla per continuar: ")

