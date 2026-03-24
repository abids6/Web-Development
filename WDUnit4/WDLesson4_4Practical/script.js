/* Challenge 2: Complete the function generateProblem by ,
       1) Create a variable for the <span> with id of problem
       2) Generate two random numbers between 0 and 20
       3) Store the correct answer in the variable correct declared below.  This will be used in checkProblem( )
       4) Using string interpolation, display an addition problem like "2 + 2 =" except using the random numbers generated. 
*/
let correct;
let op="+"; // bonus: store the operation too

function generateProblem(){
       let problem=document.getElementById("problem");

       // 2) Generate two random numbers between 0 and 20
       let num1=Math.floor(Math.random()*21);
       let num2=Math.floor(Math.random()*21);

       // Bonus: randomize operation
       let pick=Math.floor(Math.random()*4); // 0 add, 1 subtract, 2 multiply, 3 divide
       let symbol="+";

       if(pick===0){
              op="+";
              symbol="+";
              correct=num1 + num2;
       }else if(pick===1){
              op="-";
              symbol="-";
              // keep subtraction non negative
              if(num2>num1){
                     let temp=num1;
                     num1=num2;
                     num2=temp;
              }
              correct=num1 - num2;
       }else if(pick===2){
              op="*";
              symbol="×";
              correct=num1 * num2;
       }else{
              op="/";
              symbol="÷";
              // avoid dividing by 0 and make answer a whole number
              num2=Math.floor(Math.random()*20)+1; // 1 to 20
              let factor=Math.floor(Math.random()*21); // 0 to 20
              num1=num2 * factor;
              correct=num1 / num2;
       }

       // 4) Display the problem using string interpolation
       let bulid= `${num1} ${symbol} ${num2} =`;
       problem.innerHTML=bulid;

       // clear old stuff
       document.getElementById("response").value="";
       document.getElementById("output").innerHTML="";
}

/* Challenge 3: Complete the function checkProblem by ,
       1) Create a variable for the users response
       2) Create a variable for the <div> with id of output
       3) Create a variable msg for the output
       4) Using an if / else statement check to see if the user response is correct. 
           a) if the reponse is correct, set msg to "Correct!" along with the correct image
           b) otherwise set msg to "Incorrect. The answer is " followed by the correct answer.  
           Also include incorrect image afterwards
       4) Display msg in the output
*/
function checkProblem(){
       // 1) user response
       let response=parseFloat(document.getElementById("response").value);
       let output=document.getElementById("output");

       // 3) msg
       let msg="";

       // make sure a problem exists first
       if(correct===undefined){
              output.innerHTML="Click Generate to get a problem first.";
              return;
       }

       if(isNaN(response)){
              output.innerHTML="Enter a number for your answer.";
              return;
       }

       // 4) check answer
       if(response===correct){
              msg=`Correct! <br><img src="correct.webp" alt="correct">`;
       }else{
              msg=`Incorrect. The answer is ${correct}. <br><img src="incorrect.avif" alt="incorrect">`;
       }

       // 5) display
       output.innerHTML=msg;
}

/* Your HTML button calls checkResposne() (spelled wrong).
   This wrapper makes it still work without changing HTML.
*/
function checkResposne(){
       checkProblem();
}

/* Challenge Bonus: randomized operations is already included in generateProblem().
*/