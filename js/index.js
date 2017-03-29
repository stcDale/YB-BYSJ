var n=0;
var timmer;
function fun1(){
    $("#lb").animate({left:(n*640-350)+"px"}, function () {
        n=n-1;
        if(n<-2){
            n=0;
        }
    });
}
timmer=setInterval(fun1,2000);
var c1,c2,c3,c4,c5,c6;
function fun2(){
    c1=Math.round(Math.random()*255);
    c2=Math.round(Math.random()*255);
    c3=Math.round(Math.random()*255);
    c4=Math.round(Math.random()*255);
    c5=Math.round(Math.random()*255);
    c6=Math.round(Math.random()*255);
    $("#food_m div").css({color:"rgb("+c1+","+c2+","+c3+")"});
    $("#pc_m div").css({color:"rgb("+c2+","+c3+","+c4+")"});
    $("#clo_m div").css({color:"rgb("+c3+","+c4+","+c5+")"});
    $("#flo_m div").css({color:"rgb("+c4+","+c5+","+c6+")"});
    $("#fur_m div").css({color:"rgb("+c6+","+c1+","+c2+")"});
    $("#qt_m div").css({color:"rgb("+c1+","+c2+","+c3+")"});
}
setInterval(fun2,1000);