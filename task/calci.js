let x=document.getElementById("output");

function display(num){
    x.value+=num;
}
function calculate(){
    try{
        x.value=eval(x.value);
    }
    catch(err){
        alert("invalid")
    }
}