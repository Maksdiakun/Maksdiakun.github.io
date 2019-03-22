window.onload=function(){
	const item  = document.getElementsByClassName('product-box__item'),
		  btn =document.getElementsByClassName('product-box__btn'),
	 	  selectPrice = document.getElementById('select-price'),
		  selectType =  document.getElementById('select-type'),
		  showqty =  document.getElementById('quantity'),
		  sum =  document.getElementById('sum'),
		  qtyAll =  document.getElementsByClassName('qty__item'),
		  popup = document.getElementById('pop-up'),
		  close = document.getElementById('close'),
		  name = document.getElementById('name'),
		  email = document.getElementById('email');
	   
				//filters

	selectPrice.onchange = takePrice;
	function takePrice(){
		let ps= parseInt(selectType.value),
			 pi= parseInt(selectPrice.value);
			 console.log(ps);
			  console.log(pi);

	for (let  i = 0; i < item.length; i++) {
		let  price =parseInt(item[i].getAttribute('data-price')),
			 typeItem =parseInt(item[i].getAttribute('data-type'));

		if ( ps == typeItem || ps == 0 ) {
		if ( price <= pi || pi == 0   ){

				item[i].style.display = 'block';


			}else{
					item[i].style.display = 'none';


				}
		}else{
			item[i].style.display = 'none';
		}
		};
	};


	selectType.onchange = takePrice;
	
			//counting

	let cost = Math.trunc(0),
	 	quantity = Math.trunc(0);

	for(var i = 0; i < btn.length; i++){
			let pp = qtyAll[i];
			let  price = item[i].getAttribute('data-price');
		   btn[i].onclick = function() {
   			
   		   let qty=parseInt(pp.value);
   		 
   		  if (qty >= 0) {
	   		   price = qty*price
	   			 cost = cost + price;
				quantity= quantity + qty;
   		  
			}

  	 	sum.innerHTML = cost;
  	 	 showqty.innerHTML =quantity;
};


	
 };
 				//popup
 document.getElementById('order').onclick= function(){
		popup.style.display = 'block';
 };
 document.getElementById('close').onclick = function () {
		popup.style.display = 'none';
}; 
	



send.onclick = function () {
	const emailVal=email.value,
		nameVal= name.value;

	if ( nameVal == '' ||  emailVal == '') {
            alert("Please enter your name and email");
	} 
	else {
		alert("Thank you !");
		popup.style.display = 'none';
		sum.innerHTML = 0;
		showqty.innerHTML = 0;
		
	}
};
};
