var n1 = prompt("Escribe el primer numero")
var n2 = prompt("Escribe el segundo numero")

if (n1 > 0 && n2 > 0)
{
document.write("Estos numeros son positivo")
}

if (n1 < 0 && n2 < 0)
{
    document.write("Estos numeros son negativos")
}

if(n1 < 0 && n2 > 0)
{
    document.write("El primer numero es negativo y el segundo positivo")
}

if(n1 > 0 && n2 < 0)
{
    document.write("El primero es positivo y el segundo es negativo")
}