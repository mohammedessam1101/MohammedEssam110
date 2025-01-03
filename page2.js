
function check(name)
{
    if(name=="مصر" || name=="اليمن")
    alert("اجابة صحيحة");
    else
    alert("اجابة خاطئة");
}


function phone(t)
{
    if(t.length>9 || t.length<9)
    alert("ادخل 9 ارقام");
else
{

    var tt=t.substr(0,2);
    if(tt=="73")
    alert("YOU");
   else if(tt=="77")
    alert("YemenMobile");
    else if(tt=="71")
    alert("SabaFon");



}
   
    // alert(t.substr(0,2));
}