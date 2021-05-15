function div(valu){
	document.getElementById("text_bar").value += valu;
}
function equal(){
	var value1= document.getElementById("text_bar").value;
			let first_value= eval(value1);
			document.getElementById("text_bar").value=first_value;	
}
function remove(){
	document.getElementById("text_bar").value="";
}
function backspace() {
    
    var value1 = document.getElementById("text_bar").value;
    document.getElementById("text_bar").value=value1.substring(0,value1.length -1);
}
function squar(){
	var value1 = document.getElementById("text_bar").value;
	document.getElementById("text_bar").value=value1*value1;
}
function root(){

    var value1 = document.getElementById("text_bar").value;
    document.getElementById("text_bar").value = Math.sqrt(value1);

}