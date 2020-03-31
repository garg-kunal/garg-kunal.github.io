let  sign="X";
let counter;

function printx(number){
	let isko= document.getElementById("r"+number);
	let turn = document.getElementById("turn");
	if(isko.innerHTML == "X" || isko.innerHTML == "O")
	{
     this.value=value;
	}
	else{
	console.log(isko);
	isko.innerHTML=sign;
	winner();
	changesign(sign);
	turn.innerHTML="Turn of "+sign;
}


}

function changesign(){

if(sign == "X")
{
	sign ="O";
}
else{
	sign="X";
}
}


function getbox(no){
	return document.getElementById( "r"+no).innerHTML;
}

function checkmove(a,b,c,m){
	if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
		return true;
	else return false;

}
function winner(){
	if(checkmove(1,2,3,sign) || checkmove(1,4,7,sign) || checkmove(4,5,6,sign) || checkmove(7,8,9,sign) || checkmove(2,5,8,sign) 
	|| checkmove(3,6,9,sign) || checkmove(1,5,9,sign) || checkmove(3,5,7,sign))
	{
		if(sign == "X"){
			document.getElementById("result").innerHTML="Winner Is X";
			var a=document.getElementById("ptx").innerHTML;
			var b=Number(a);
			var c=b+1;
			document.getElementById("ptx").innerHTML=c;
        
			for(let i=1;i<=9;i++){
			document.getElementById("r"+i).innerHTML=" ";
		}
		}
		else if(sign == "O" ){
			document.getElementById("result").innerHTML="Winner Is O";
			var a=document.getElementById("pto").innerHTML;
			var b=Number(a);
			var c=b+1;
			document.getElementById("pto").innerHTML=c;
			for(let i=1;i<=9;i++){
			document.getElementById("r"+i).innerHTML=" ";
		}
		}
		
		
		throw "game end";
	}

}



function reset(){
	for(let i=1;i<=9;i++){
			document.getElementById("r"+i).innerHTML=" ";
		}
		document.getElementById("ptx").innerHTML=0;
		document.getElementById("pto").innerHTML=0;
		document.getElementById("result").innerHTML="Result Here";
}