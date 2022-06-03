function showMore(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var buttonText = document.getElementById("button");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        buttonText.innerHTML = "Read More";
        moreText.style.display = "none";
    }
    else{
        dots.style.display = "none";
        buttonText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}

window.onkeypress=function(event){
    if(event.key == "l"){
        var element = document.body;
        element.classList.toggle("dark");
    }
}