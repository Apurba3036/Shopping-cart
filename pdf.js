const querystring= window.location.search



let urlParams = new URLSearchParams(querystring);

const total = urlParams.get('total');
document.getElementById("subtotal").innerText  = urlParams.get('sub');
const tax = urlParams.get('tax');

// document.getElementById("subtotal").innerHTML = subtotal;
document.getElementById("Tax").innerHTML = tax;
document.getElementById("Total").innerHTML = total;


function pdf(){


const element=document.getElementById('invoice');

html2pdf().from(element).save()


}

