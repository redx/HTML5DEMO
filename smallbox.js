window.onload = function (){
    var can = document.getElementById("can");
    can.style.border = "1px dashed #111";
    can.onclick = mouseClick;
    document.body.onkeydown = kbPress;
    box1 = Box.CreatNew();
    ctx = can.getContext("2d");
    t = setTimeout(function(){drawFrame()},50);
    ctx.fillStyle = 'rgb(255,155,155)';
    ctx.fillRect(box1.x,box1.y,30,30);
}

var Box  = {
    CreatNew:function(){
        var box = {};
        box.x = 0;
        box.y = 0;
        return box;
    }
}

var drawFrame = function (){
    ctx.clearRect(0,0,400,500);
    t = setTimeout(function(){drawFrame()},20);
    ctx.fillRect(box1.x,box1.y,30,30);
}

function mouseClick(e){
    var evt = e?e:window.event;
    var clickX,clickY;
    var click = new Array;
    clickX = evt.clientX -(can.offsetLeft - document.body.scrollLeft) ;
    clickY = evt.clientY -(can.offsetTop - document.body.scrollTop);
    console.log(evt.clientX,evt.clientY);
    console.log(document.body.scrollTop,document.body.scrollLeft);
    click.push(clickX);
    click.push(clickY);
    function getPosition(){
        return click;
    }
    transBox(clickX,clickY);
    return getPosition();
}
function kbPress(e){
//    console.log("keypress");
    var keyCode =  ('which' in e )? e.which : e.keyCode;
    console.log(keyCode);
    if(keyCode == 87){

        box1.y-=5;
    }
}

function transBox(x,y){
    ctx.clearRect(box1.x,box1.y,30,30);
    box1.x = x;
    box1.y = y;
}