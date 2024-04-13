function greet(){
var fname=document.getElementById('fname').value;
var lname=document.getElementById('lname').value;
console.log(fname,lname);
// '',undefined,null,0,false - falsy values

//es5 alert("welcome "+ fname + lname)
alert(`welcome ${fname},${fname}`)
var age=document.getElementById('age').value;
if (fname) {
    alert("welcome" + fname);
  } else {
    alert("please enter firstname");
  }

   //alert("welcome "+ fname + lname)
  if (lname) {
    alert("welcome " + lname);
  } else {
    alert("please enter lastname");
  }
  if(age){
    age = parseInt(age);
// console.log(typeof age);

   if(age>18){
    alert("eligible for voting")
   }else{
    alert("not eligible for voting")
   }
  }else{
    alert("please enter age");
  }


}