console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='You have changed the text';
var img=document.getElementById('imad');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function()
{ 
    var interval = setInterval(moveRight, 100);
}
