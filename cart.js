function increase(element){

const mobilenumber= document.getElementById(element)
const mobilenumberstr= mobilenumber.value;
const premobilenum= parseInt(mobilenumberstr);
const newmobilenum= premobilenum+1;
mobilenumber.value=newmobilenum;



return newmobilenum             
// return the value for increasing or decreasing the price;

}






// for mobile now

document.getElementById('btn-mobile-plus').addEventListener('click',function(){

// const mobilenumber= document.getElementById('mobile-input')
// const mobilenumberstr= mobilenumber.value;
// const premobilenum= parseInt(mobilenumberstr);
// const newmobilenum= premobilenum+1;
// mobilenumber.value=newmobilenum;

const newmobilenum=increase('mobile-input');
//  console.log(newmobilenum); getting the input value

const mobiletotalprice= newmobilenum* 1159;
document.getElementById('mobile-price').innerText= mobiletotalprice;

total();


})





function decrease(element){

const mobilenumber=document.getElementById(element);
const mobilenumberstr=mobilenumber.value;
const premobilenum=parseInt(mobilenumberstr);
const newmobilenum=premobilenum-1

if(newmobilenum<0){
    alert("Not less than 0")
}
else{

  mobilenumber.value=newmobilenum;
}

return newmobilenum;

}


document.getElementById('btn-mobile-minus').addEventListener('click',function(){

// const mobilenumber=document.getElementById('mobile-input');
// const mobilenumberstr=mobilenumber.value;
// const premobilenum=parseInt(mobilenumberstr);
// const newmobilenum=premobilenum-1

// if(newmobilenum<0){
//     alert("Not less than 0")
// }
// else{

//   mobilenumber.value=newmobilenum;
// }

const newmobilenum=decrease('mobile-input');

const mobiletotalprice=newmobilenum*1159;
document.getElementById('mobile-price').innerText= mobiletotalprice;

total();


})


// for case now


document.getElementById('btn-case-plus').addEventListener('click',function(){

const newcasenum=increase('case-input');

const casetotalprice= newcasenum* 49;
document.getElementById('case-price').innerText= casetotalprice;

total();

})


// I can use on_click here in html page

document.getElementById('btn-case-minus').addEventListener('click',function(){

 const newcasenum=decrease('case-input');
 const casetotalprice= newcasenum*49;
 document.getElementById('case-price').innerText=casetotalprice;

 total();

})




function total (){
// subtotal for mobile
const currentmobilepricestr= document.getElementById('mobile-price').innerText;
const currentmobileprice= parseInt(currentmobilepricestr);

// subtotal for case
const currentcasepricestr= document.getElementById('case-price').innerText;
const currentcaseprice= parseInt(currentcasepricestr);

const subtotal = currentcaseprice + currentmobileprice;

document.getElementById('Subtotal').innerText= subtotal;

// calculate tax

const taxamountstr=(subtotal* 0.01).toFixed(2);
const taxamount= parseFloat(taxamountstr);
document.getElementById('Tax').innerText= taxamount;


// calculate total price

const totalprice= subtotal + taxamount;


document.getElementById('Total').innerText=totalprice;

}


