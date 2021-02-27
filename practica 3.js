var n1 = prompt("Ingrese el primer numero")
var n2 = prompt("Ingrese el segundo numero")
var n3 = prompt("Ingrese el tercer numero")

if (n1 == n2 && n1 == n3 )
{
 document.write("Los numeros son iguales");
}

if ( n1 > n2 && n1 > n3)
{
document.write(n1 + " Es el mayor")
}

if ( n2 > n1 && n2 > n3)
{
document.write(n2 + " Es el mayor")
}

if ( n3 > n2 && n3 > n1)
{
document.write(n3 + " Es el mayor")
}