var length=20;
        var firstName='David';
        var lastName="Oshea";
        var isEligibleForVoting=true;
        var passport=null;


        //non primitives
        var employee= { name:"mariya", age:32,isEligibleForVoting:true,passport:true}
        var employee2= { 
                name:"Sam",
                age:23,
                isEligibleForVoting:true,
                passport:true, 
                address:{
                city:"bangalore",
                pin:5605},
                friends:["Bunny","Tiger"]
        }

        //array section
        //indexes        0            1       2       3
        var cities =["bangalore","chennai","delhi","hyberbad"]
        var empids=[100,102,103,104]
        var xyzEmployess=[
                { name:"tom", age:12,isEligibleForVoting:false,passport:false},
                { name:"Jerry", age:19,isEligibleForVoting:true,passport:true},
                { name:"Ben", age:45,isEligibleForVoting:true,passport:true}
        ]
        //var firstName=undefined;->bad practice
        //displayiong the value in console section of browser - benefitting the developer for debugging
        
        console.log('length variable =',length);
        console.log('FirstName variable =',firstName);
        console.log('lastName variable =',lastName);
        console.log('isEligibleForVoting variable =',isEligibleForVoting);
        console.log('Passport variable =',passport);

        //object section
        console.log('employee entire object',employee)
        console.log('employee name =',employee.name);
        console.log('employee name =',employee.age);
        console.log('employee name =',employee.isEligibleForVoting);
        console.log('employee name =',employee.passport);
        console.log('employee2 friends =',employee2.friends);
        console.log('employee2 friends in index 0',employee2.friends[0]);

        //array section
        console.log('Array cities values',cities);
        console.log('Array city at index value 1',cities[1]);
        console.log('Array empids values',empids);
        console.log('Array empid at index value 1',empids[2]);
        console.log('Array xyzEmployees at index value 1',xyzEmployess[1]);
        console.log('name of employee in xyzEmployees at index value 1',xyzEmployess[1].name);


        //displaying the value in html  section of browser - benefitting the user for viewing experience
        document.getElementById("fName").innerHTML=firstName;
        document.getElementById("lName").innerHTML=lastName;
        document.getElementById("length").innerHTML=length;
        document.getElementById("vRight").innerHTML=isEligibleForVoting;
        document.getElementById("passport").innerHTML=passport;

        //object section
        document.getElementById("employeeName").innerHTML=employee.name;
        document.getElementById("employeeAge").innerHTML=employee.age;
        document.getElementById("employeeVrights").innerHTML=employee.isEligibleForVoting;
        document.getElementById("employeePassport").innerHTML=employee.passport;

        document.getElementById("employee2Name").innerHTML=employee2.name;
        document.getElementById("employee2Age").innerHTML=employee2.age;
        document.getElementById("employee2Vrights").innerHTML=employee2.isEligibleForVoting;
        document.getElementById("employee2Passport").innerHTML=employee2.passport;
        document.getElementById("employee2AddressCity").innerHTML=employee2.address.city;
        document.getElementById("employee2AddressPin").innerHTML=employee2.address.pin;

        // variable hoisting 
       // var passport;
       // var firstName;

//variable declaration area
/*var length;
var lastName;
var isEligibleforVoting;
//hosited variables
var passport;
var firstName;
*/
//variable value assignation
/* length=20;
firstName='david';
*/

        
        