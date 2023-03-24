function pdf(){


const element=document.getElementById('invoice');

html2pdf().from(element).save()


}

window.addEventListener('load', () => {



    
     const name = localStorage.getItem('NAME');
    
    
  
    
    document.getElementById('subtotal').innerText = name;
  

})