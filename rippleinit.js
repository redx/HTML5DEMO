window.onload = (function(){
                      pic= document.getElementById("pic");
                      ctx = pic.getContext('2d');
                     var img = new Image();
                     img.onload = function(){
                         ctx.drawImage(img,0,0,800,400);
                         for(var i=0;i<10;i++){
                             reverse();
                         }
                     }
                     img.src="snow.jpg";
                     pic.style.border="#777 1px dashed";
                 })();
function reverse(){
    var imgd = ctx.getImageData(0,0,800,400);
    var pix = imgd.data;
    var r=0,g=0,b=0;
    for(var i=3200;i<pix.length-3200;i+=4){
        r=pix[i]*0.147+(pix[i+4]+pix[i-4]+pix[i+3200]+pix[i-3200])*0.118+(pix[i+3200-4]+pix[i+3200+4]+pix[i-3200-4]+pix[i-3200+4])*0.094;
        g=pix[i+1]*0.147+(pix[i+1+4]+pix[i+1-4]+pix[i+1+3200]+pix[i+1-3200])*0.118+(pix[i+1+3200-4]+pix[i+1+3200+4]+pix[i+1-3200-4]+pix[i+1-3200+4])*0.094;
        b=pix[i+2]*0.147+(pix[i+2+4]+pix[i+2-4]+pix[i+2+3200]+pix[i+2-3200])*0.118+(pix[i+2+3200-4]+pix[i+2+3200+4]+pix[i+2-3200-4]+pix[i+2-3200+4])*0.094;
        pix[i]=r;
        pix[i+1]=g;
        pix[i+2]=b;
    }
    ctx.putImageData(imgd,0,0);
}