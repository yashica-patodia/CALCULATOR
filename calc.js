var x=document.getElementById("first");
var y=document.getElementById("second");
var opp=document.getElementById("operate");
var displ=document.getElementById("displ");
function display()
{
	if (displ.hasChildNodes() == true){
		displ.childNodes[0].remove();
	}

	var no1 = x.value;
	var no2 = y.value;
	no1 = parseInt(no1);
	no2 = parseInt(no2);
	var op = opp.value;
	var ans;
	if(isNaN(no1)|| isNaN(no2))
		alert("enter integers only");
	if(op=='+')
		ans=no1+no2;
	if(op=='*')
		ans=no1*no2;
	if(op=="/")
	{
		if(no2==0)
			alert("Cant divide by zero ");
		ans=no1/no2;
	}
	if(op=='-')
		ans=no1-no2;
	var node = document.createTextNode(ans);
	displ.appendChild(node);
}
