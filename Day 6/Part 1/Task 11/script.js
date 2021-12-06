// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
    message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);

// Explaination: In the actual given code in the line 5, message variable is again declared. Instead of using the variable declared in the global scope that is in line number 2. It is fixed in the above given code.