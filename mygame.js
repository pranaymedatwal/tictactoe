
var player='X',id1,count=0,box;
var id=["1","2","3","4","5","6","7","8","9"];
var dbcl=["1","2","3","4","5","6","7","8","9"];
function click(){
	if(player=='X'){
		player=0;
	}else{
		player='X';
  }
  return player;
}

$(document).ready(function(){
	$(".game").click(function(){
	 id1=$(this).attr('id');
    if(id[id1]==dbcl[id1]){
	  	box=click();
   		count++;
	 		document.getElementById(id1).innerHTML=box;
    	id[id1]=box;
	 		check();
		}
	});
});


function check(){
	if((id[0]==id[1]&&id[1]==id[2])||(id[0]==id[3]&&id[3]==id[6])||(id[1]==id[4]&&id[4]==id[7])
		||(id[2]==id[5]&&id[5]==id[8])||(id[3]==id[4]&&id[4]==id[5])||(id[6]==id[7]&&id[7]==id[8])
		||(id[0]==id[4]&&id[4]==id[8])||(id[2]==id[4]&&id[4]==id[6]))
	{
		document.getElementById("body1").innerHTML=box+" "+"WINS";
	}else{
		if(count==9){
			document.getElementById("body1").innerHTML="IT'S DRAW";
		}
	}
}
