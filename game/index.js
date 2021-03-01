var secretNumber = Number(prompt("Guess a number !"));
var guess = 4 ;
if ( guess === secretNumber)
{
    alert("You guessed right!");
}
else if (guess < secretNumber)
{
    alert("Number is too high!!!");
}
else
alert("Number is too low !!!");