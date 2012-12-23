window.onload = function(){
    var can = document.getElementById("can");
    can.style.border = "1px dashed #000";
    ctx = can.getContext("2d");
    ctx.font = "bold 70px sans-serif";
    ctx.fillText("你好啊，嘿嘿！",10,70);
    var imgd = getThePix();
    imgd = getNewImgd(imgd);
//    ctx.putImageData(imgd,0,0);
    // ctx.font = "bold 10px sans-serif";
    //    ctx.fillText("?@#$%^&",10,300);
       drawText(imgd);
}

function getThePix(){
    var width = 500;
    var height = 400;
    var imgd = ctx.getImageData(0,0,width,height);
    return imgd;
}
function getNewImgd(imgd){
    var pix = imgd.data;
    var i =0;
    var count=0;
    for(i=0;i<pix.length;i+=4){
        if(i%20 == 0 && pix[i]==0){
            count++;
        }else{
            pix[i]=255;
            pix[i+1] = 255;
            pix[i+2] = 255;
        }
    }
    console.log("getimgd");
    console.log(count);
    return imgd;
}
function drawText(){
    var width = 500;
    var height = 400;
    var imgd = ctx.getImageData(0,0,width,height)
    console.log("drawText");
    var pix = imgd.data;
    var i = 0;
    var x;
    var y;
    var count = 0;
    console.log(pix.length);
    for(i=0;i<pix.length;i+=4){
        if(i/4/500 == 0){
            i+=4*500*30;
        }
        if(pix[i]==0){
            ctx = can.getContext("2d");
            ctx.font = "bold 10px sans-serif";
            x = ((i /4+1) % width)-1;
            y = Math.ceil((i /4+1) / width)-1;
            ctx.fillText("?",x,y);
            count++
        }
    }
    console.log(count);
}
