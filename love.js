function love_cal(){
    var box=document.querySelector(".box").value;
    var box2=document.querySelector(".box2").value;
    var result= document.querySelector(".result")
    if(box=="" && box2==""){
       result.innerHTML= "Oops, Insert name";
    }
    else if(box=="" || box2==""){
       result.innerHTML= "Oops, Insert name";

    }
    else if(box.length>box2.length){
       result.innerHTML= "Both of you are compatible";

    }
    else if(box.length<box2.length){
       result.innerHTML= "You are not compatible";
        
    }
    else if(box.length==box2.length){
       result.innerHTML= "You are slightly compatible";
        
    }
     




}