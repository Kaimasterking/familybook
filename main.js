function nextSlide ()

{
    if(i==3){
        i=0
    }
    document.getElementById("pictures").src=imgs[i];
    document.getElementById("imagedescription").innerText=imagedescription[i++];
}