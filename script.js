            function compute()
            {
  
  var d = new Date();
  var y = d.getFullYear();
  var s = 0

               	p = document.getElementById("principal").value;
                n = document.getElementById("years").value;
                r = document.getElementById("rate").value;
                result = document.getElementById("result");
                resultn = document.getElementById("resultn");
                resultp = document.getElementById("resultp");
                resultr = document.getElementById("resultr");
				s = Number(n) + Number(y);
           		resultp.innerHTML = "If you deposit " + (p); 
                resultr.innerHTML = "at an interest rate of " + (r); 
                result.innerHTML = " You will receive an amount of " + (p*n*r/100); 
                resultn.innerHTML = "in the year " + (s);
            }


var svalue = document.getElementById("rate");
var output = document.getElementById("rvalue");
output.innerHTML = svalue.value;

svalue.oninput = function() {
output.innerHTML = this.value;
}
