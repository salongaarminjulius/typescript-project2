var num:number=5;
var factorial:number=1;
while(num>=1)
{
factorial=factorial*num;
num--;
}
document.getElementById("f").innerHTML="The factorial of 5 is" + factorial;

