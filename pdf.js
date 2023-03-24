let urlParams = new URLSearchParams(location.search);

const total = urlParams.get('total');
const subtotal = urlParams.get('sub');
const tax = urlParams.get('tax');

document.getElementById("subtotal").innerHTML = subtotal;
document.getElementById("Tax").innerHTML = tax;
document.getElementById("Total").innerHTML = total;

function pdf(){


const element=document.getElementById('invoice');

html2pdf().from(element).save()


}

