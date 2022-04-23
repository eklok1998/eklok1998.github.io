//hand gallery 
const nailArray=new Array();

nailArray[0]=document.getElementById("hand1");
nailArray[1]=document.getElementById("hand2");
nailArray[2]=document.getElementById("hand3");
nailArray[3]=document.getElementById("hand4");

var prize=document.getElementById("prize");

function nailsloop(){
    for(i=0;i<4;i++){
    nailArray[i].onclick=function handgallery(){
        for (j=0;j<nailArray.length;j++){
            nailArray[j].style.display="none";
            }
        
            prize.style.display="block";
        }
    }
}



