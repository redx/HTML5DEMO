 window.onload = (function(){
                     document.body.style.background="url(snow.jpg) no-repeat";
                     document.body.style.backgroundSize ="cover";
                     document.body.style.overflow="hidden";
                     snow = document.getElementById("snow");
                     snow.style.color = "#fff";
                     snow.style.display="inline";
                     snow.style.position="absolute";
                     bigSnow = document.getElementById("bigSnow");
                     bigSnow.style.color = "#fff";
                     bigSnow.style.display="inline";
                     bigSnow.style.position="absolute";
                     copySnow();
                     t = setTimeout("snowMove()",40);
                 })();

function copySnow(){
    var i = 0;var tempObj;
    snows = new Array();
    bigSnows = new Array();
    for(i=0;i<50;i++){
        tempObj = snow.cloneNode(true);
        snows[i] = tempObj;
        document.body.appendChild(snows[i]);
        snows[i].style.left = (Math.random()*1366)
        snows[i].style.top = 0- (Math.random()*800);
    }
        for(i=0;i<50;i++){
            tempObj = bigSnow.cloneNode(true);
            bigSnows[i] = tempObj;
            document.body.appendChild(bigSnows[i]);
            bigSnows[i].style.left = (Math.random()*1366)
            bigSnows[i].style.top = 0- (Math.random()*800);
    }
    snow.style.display="none";
}
var total=0;
function snowMove(){
    var i = 0;
    for(i in snows){
        var snowsLeft = parseInt(snows[i].style.left);
        var snowsTop = parseInt(snows[i].style.top);

        if(snowsTop>=700 && snowsTop!=701){
            snowsTop=0;
            total++;
        }else if(snowsTop != 701){
            snowsTop +=3;
            if(Math.random()>0.3){
                snowsLeft+=1;
                snows[i].style.left=snowsLeft + "px";
            }else{
                snowsLeft-=1;
                snows[i].style.left=snowsLeft + "px";
            }
        }
        snows[i].style.top=snowsTop + "px";

    }
        for(i in bigSnows){
        var bigsnowsLeft = parseInt(bigSnows[i].style.left);
        var bigsnowsTop = parseInt(bigSnows[i].style.top);

        if(bigsnowsTop>=700 && snowsTop!=401){
            bigsnowsTop=0;
            total++;
        }else if(bigsnowsTop != 701){
            bigsnowsTop +=2;
            if(Math.random()>0.5){
                bigsnowsLeft+=1;
                bigSnows[i].style.left=bigsnowsLeft + "px";
            }else{
                bigsnowsLeft-=1;
                bigSnows[i].style.left=bigsnowsLeft + "px";
            }
        }
        bigSnows[i].style.top=bigsnowsTop + "px";

    }
    t = setTimeout("snowMove()",40);


}
