<html>
<head>
<title>
first site 
</title>

<script type="text/javascript" src="second.js"></script>
<script>
function create_html()
{
a = document.getElementById("poda").value
b = document.createElement("p")
c = document.createTextNode(a)
b.append(c)
 d = document.getElementById("imagin")
d.appendChild(b)
}
</script>

<style>
#imagin
{

color:red;
}
input
{
color:red;
padding:10px;
font-size:18px;
radious:50px;
}
h1
{
color:brown;
}

</style>





</head>
<body>
<h1 id="demo"> SIMPLE CALCULATOR</h1>

</br>
<div id="imagin"> </div>
<input type="text" placeholder="type" id="poda"></input>

<button onclick=create_html()> submit</button>
<br>

<div class="calc">
<form name="form1">
<input type="text" id="result"><br>
<input type="button" value="1" onclick="form1.result.value=form1.result.value+'1'">
<input type="button" value="2" onclick="form1.result.value=form1.result.value+'2'">
<input type="button" value="3" onclick="form1.result.value=form1.result.value+'3'">
<input type="button" value="+" onclick="form1.result.value=form1.result.value+'+'">
<br>
<input type="button" value="4" onclick="form1.result.value=form1.result.value+'4'">
<input type="button" value="5" onclick="form1.result.value=form1.result.value+'5'">
<input type="button" value="6" onclick="form1.result.value=form1.result.value+'6'">
<input type="button" value="-"onclick="form1.result.value=form1.result.value+'-'">
</br>
<input type="button" value="7" onclick="form1.result.value=form1.result.value+'7'">
<input type="button" value="8" onclick="form1.result.value=form1.result.value+'8'">
<input type="button" value="9" onclick="form1.result.value=form1.result.value+'9'">
<input type="button" value="=" onclick="form1.result.value =eval(form1.result.value)">
</br>

<input type="button" value="0" onclick="form1.result.value=form1.result.value+'0'">
<input type="button" value="C" onclick="form1.result.value=''">
<input type="button" value="." onclick="form1.result.value=form1.result.value+'.'">
<input type="button" value="*" onclick="form1.result.value=form1.result.value+'*'">
</br>
<input type="button" value="/" onclick="form1.result.value=form1.result.value+'/'">
<input type="button" value="%" onclick="form1.result.value=form1.result.value+'%'">
</form>





</div>
