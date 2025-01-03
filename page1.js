
// document.write("<h2>hello</h2>");
// var x= document.querySelector("h1");

// x.style.color="red";

//  alert("hello");

// if(confirm("Are You Sure?")==true)
   
// let x=prompt("Enter Youre x");
// let y=prompt("Enter Youre y");

//     alert(+x  +   +y);
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");

var h= document.querySelector("#h");
var img=document.getElementById("m");
var state=true;
btn1.onclick=function(){
 if(state)
 {
    h.style.color="red";
    h.style.textAlign='center';
 }
 else
 {
    h.style.color="black";
     h.style.textAlign='left';
 }
 state=!state;

}

var state2=true;
btn2.onclick=function(){
    if(state2)
    m.src="images/InShot_٢٠٢٤٠٨٢٢_٠١١٢١٨٤٦١.jpg";
    else
    m.src="images/4b2e97394ec4bc97f0b056db843aab1b.jpg";

    state2=!state2;
}


// btn1.ondblclick=function()
// {
//     h.style.color="black";
//     h.style.textAlign='left';
// }
function omer()
{
    alert("hello:omer");
}


