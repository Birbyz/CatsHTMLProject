window.onkeypress=function(event){
    if(event.key == "l"){
        var element = document.body;
        element.classList.toggle("dark");
    }

    if(event.key == 'd'){
        var images = document.getElementsByClassName("img");
        for(let image of images){
            image.onclick=function(){
                this.remove();
                if(images.length == 0)
                    alert("YOU'VE DELETED ALL OF THEM:(:(:(");
            }
        }
    }
    if(event.key == 'e'){
        var images = document.getElementsByClassName("img");
        for(let image of images){
            image.onclick=function(){
                this.style.border = "10px double black";
            }
        }
    }
}