const inputs = $(".input");


function focusFunc(){
    let padre = inputs.parent().parent();
    $(padre).addClass("focus");    
}


function blurFunc(){    
    let parent = inputs.parent().parent();
    if(this.value == ""){
        $(parent).removeClass("focus");
    }
    
}  

$(inputs).focus(focusFunc);
$(inputs).blur(blurFunc);




