a = 0

while (a < 10):
    lletra = input("Introdueix un caràcter: ").lower()
    if (lletra == "a".lower()):
        print(f"Has introduït la lletra {lletra}")
        a += 1
    else:
        print("No has introduït la lletra a")
print(f"Has introduït {a} a! Fi del programa!")