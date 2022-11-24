function openTabImg(img){
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = img.src;
    imgText.innerHTML = img.alt;
    expandImg.parentElement.style.display = "block";
}


function checkOfferValue(element){
    console.log(element.value);
    offerValue = element.value;
    var subscribeOption = document.getElementById('subscribe_and_save_options');
    var oneTimeOption = document.getElementById('one_time_options');
   
//    subscribeOption.classList.add('show');
//    oneTimeOption.classList.add('hide');
   if(offerValue == 'subscribe_and_save'){
    // console.log(subscribeOption);
    oneTimeOption.classList.remove('show');
    oneTimeOption.classList.add('hide');

   
    // console.log(oneTimeOption);
    if(!subscribeOption.classList.contains('show')){
        subscribeOption.classList.add("show");
        subscribeOption.classList.remove("hide");

    }    
   }
   else if(offerValue == 'one_time'){
    // console.log(oneTimeOption);
    subscribeOption.classList.remove('show');
    subscribeOption.classList.add('hide');

    // console.log(subscribeOption);
    if(!oneTimeOption.classList.contains('show')){
        oneTimeOption.classList.add("show");
        oneTimeOption.classList.remove("hide");
        
       
    }
    
   }

}