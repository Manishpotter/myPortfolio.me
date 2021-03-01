var answer = prompt("Are we there yet ?");
while( answer.indexOf("yes") === -1 && answer.indexOf("YES") === -1)
{
    var answer = prompt("Are we there yet ?");
}
alert("YAY , we made it !")
