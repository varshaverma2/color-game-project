var num=6;
var color=randomColor(num);
var pikedColor=pickedColor();
var messaged=document.querySelector("#messaged");
var tt=document.querySelector("#tt");
var h1=document.querySelector("h1");
tt.textContent=pikedColor;
var square=document.querySelectorAll(".square");
for(var i=0;i<square.length;i++)
{ square[i].style.background=color[i];
}
for(var j=0;j<square.length;j++)
{square[j].addEventListener("click",function() { var clickedColor=this.style.background; 
	if (clickedColor==pikedColor) {
for(var p=0;p<square.length;p++)
{ square[p].style.background=pikedColor;
}
messaged.textContent="Correct!!"
h1.style.background=pikedColor;
reset.textContent="Play Again?"
}
else 
{ 
this.style.background= "#232323";
messaged.textContent="Try Again."
}});}
function pickedColor()
{ var random=Math.floor(Math.random()*color.length);
return color[random];

}
function randomColor(num)
{ var arr=[];
	for(var i=0;i<num;i++)
	{ arr[i]=ranco();	}
return arr;
}
function ranco()
{ var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb("+r+", "+g+", "+b+")";}

var reset=document.querySelector("#reset");
reset.addEventListener("click",function(){
reset.textContent="New Colors"
color=randomColor(num);
pikedColor=pickedColor();
tt.textContent=pikedColor;
for(var i=0;i<square.length;i++)
{ square[i].style.background=color[i];
}
h1.style.background="steelBlue"
messaged.textContent=null;
});

var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function()

{
	easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
num=3;
color=randomColor(num);
pikedColor=pickedColor();
tt.textContent=pikedColor;

for (var i=0;i<square.length;i++)
{ if(color[i]){ square[i].style.background=color[i];
}
else {square[i].style.display="none" ;} 
}	} )

hardBtn.addEventListener("click",function()

{ easyBtn.classList.remove("selected");

	hardBtn.classList.add("selected");
	num=6;
color=randomColor(num);
pikedColor=pickedColor();
tt.textContent=pikedColor;

for (var i=0;i<square.length;i++)
{ square[i].style.background=color[i];

square[i].style.display="block" ; }}	)




















