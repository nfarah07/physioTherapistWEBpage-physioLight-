//onchange method posts: serviceChoice, dateChoice, emailInput, phoneInput, nameInput evelistenner id="booking"
function bookingComplete(){
    let name= document.getElementById('form-name').value;
    //console.log("inputtedName",name);
    //console.log("length",name.length);
    let email= document.getElementById('form-email').value;
    let number= document.getElementById('form-number').value;
    let serviceChoice= document.getElementById('serviceSelected').value;
    let date= document.getElementById('form-date').value;
    //dateFormatValidator(date);
    //numberValidator(number); check back handle displaying to user
    let emailBool= emailValidator(email);
    let numberBool= numberValidator(number);
    let dateBool= dateFormatValidator(date);



    
    if(name.length<3){
        alert("Please Input Name");
    }
    if(emailBool== false){
        alert("Please enter valid email address");

    }
    if(numberBool== false){
        alert("Please enter a valid phone number ex: 613-123-4567");

    }
    //Please enter a valid date
    if(dateBool== false){
        alert("Please enter a valid date");

    }
    alert("Thank-you", name," for booking at LightningPhysio");

    
   

}

function emailValidator(email){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
        //return (true);
        console.log("email validator t", true);
        return (true);
    }
   //alert("You have entered an invalid email address!")
    return (false);

}
function numberValidator(number){
    let info= number; 
    let message= "Please enter a valid phone number ex: 613-123-4567"; 
    if( ( (info.charAt(3)) && (info.charAt(7))) != '-'){
        // advise user not proper format "Please enter a valid phone number"
        return (false);

    }
    else{
        for(let x=0; x< info.length; x++){
            if(x==3 || x==7){
                x=x+1;

            }
            else{
                if(!(info.charAt(x)<10)){
                    return (false); 

                    // advise user not proper format "Please enter a valid phone number"
                }
                if(x== info.length){
                    return (true);

                }

            }
        }

    }

}

function dateFormatValidator(date){

    let info= date; 
    let b=true;
    if( ( (info.charAt(2)) && (info.charAt(5))) != '/'){
        // advise user not proper format "Please enter a valid date"
        console.log("2,5 issue", info.charAt(x))
        b=false;


    }
    else{
        for(let x=0; x< info.length; x++){
            if((x==2) || (x==5)){
                x=x+1;
            }
            else{
                if(!((info.charAt(x))<13)){
                    console.log("<13 issue", info.charAt(x))
                    b= false;

                    // advise user not proper format "Please enter a valid date"
                }
            

            }
        }
        if(!((info.charAt(3)<2) && (info.charAt(4)<3) )){
            b=false
        }
        let year= date.substring(6,10);
        let v= parseInt(year);
        if(v<2021){
            b=false; 
        }
        return b;

    }

    


}

