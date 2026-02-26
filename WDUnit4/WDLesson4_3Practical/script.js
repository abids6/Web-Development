/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/
function bmi () {


    let w=parseFloat(document.getElementById("w").value);
    let h=parseFloat(document.getElementById("h").value);
    let output=document.getElementById("output");
  
    // 1) Calculate BMI (US units: lbs and inches)
    // BMI = 703 * weight(lbs) / height(in)^2
    let bmi= 703 * (w/(h **2));

    // basic input check so it does not break
    if (isNaN(w) || isNaN(h) || w<=0 || h<=0){
      output.innerHTML="Please enter valid numbers for weight (lbs) and height (in).";
      return;
    }

    // 2) Decide BMI status (matches the chart exactly)
    let msg="";
    let filename="";

    if(bmi<18.5){
      msg="Underweight";
      filename="underweight.png";
    }else if(bmi>=18.5 && bmi<=24.9) {
      msg="Healthy Weight";
      filename="healthyweight.png";
    }else if(bmi>=25.0 && bmi<=29.9){
      msg="Overweight";
      filename="overweight.png";
    }else{
      msg="Obesity";
      filename="obeseweight.png";
    }

    // 3) Display BMI + status + image
    output.innerHTML=`Your BMI is ${bmi.toFixed(1)}.<br>Status: ${msg}<br><img src="${filename}" alt="${msg}">`;


}