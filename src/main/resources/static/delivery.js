window.addEventListener('load',function (){
    refreshDelivery()   //call refresh delivery function
});

//define function for refresh delivery
const refreshDelivery = ()=>{
    delivery = new Object();

    selectState.value=""
    selectCity.value=""
    txtSuburb.value=""
    txtSuburbState.value=""
    selectPostalCodeType.value=""
    txtPostalCode.value=""
    txtOrderValueThreshold.value=""
    txtCostBelowThreshold.value=""
    txtFixedCost.value=""
    textPickupValTh.value=""
    textPickupCBTh.value=""
    textPickupCtABTh.value=""


    selectState.style.border="2px solid #ced4da";
    selectCity.style.border="2px solid #ced4da";
    txtSuburb.style.border="2px solid #ced4da";
    txtSuburbState.style.border="2px solid #ced4da";
    selectPostalCodeType.style.border="2px solid #ced4da";
    txtPostalCode.style.border="2px solid #ced4da";
    txtOrderValueThreshold.style.border="2px solid #ced4da";
    txtCostBelowThreshold.style.border="2px solid #ced4da";
    txtFixedCost.style.border="2px solid #ced4da";
    textPickupValTh.style.border="2px solid #ced4da";
    textPickupCBTh.style.border="2px solid #ced4da";
    textPickupCtABTh.style.border="2px solid #ced4da";


}

const checkFromErrors = ()=>{
    let errors = "";

    if (delivery.state == null){
        errors=errors+"state cannot be empty \n";
    }

    if (delivery.city == null){
        errors=errors+"city cannot be empty \n"
    }

    if (delivery.suburb == null){
        errors=errors+"suburb cannot be empty \n";
    }

    if (delivery.suburbstate == null){
        errors=errors+"suburb state cannot be empty \n"
    }

    if (delivery.postalcodetype==null){
        errors=errors+"postal code type cannot be empty \n";
    }
    if (delivery.postalcode==null){
        errors=errors+"portal code cannot be empty \n";
    }
    if (delivery.ordervaluethreshold==null){
        errors=errors+"order value threshold cannot be empty \n";
    }
    if (delivery.costbelowthreshold==null){
        errors=errors+"cost below threshold cannot be empty \n";
    }
    if (delivery.fixedcost==null){
        errors=errors+"fixed cost cannot be empty \n"
    }
    if (delivery.pickupordervalue==null){
        errors=errors+"pick up order value cannot be empty \n";
    }
    if (delivery.pickupbelow==null){
        errors=errors+"pickup below cannot be empty \n";
    }
    if (delivery.pickupcostabove==null){
        errors=errors+"pickup cost above cannot be empty \n"
    }


    return errors;
}


const buttonSubmit = ()=>{
    let errors = checkFromErrors();
    if (errors==""){
        let userConfirm = confirm("are you sure to add following details \n"
        +"\n state is "+delivery.state
        +"\n city is "+delivery.city
        +"\n suburb is "+delivery.suburb
        +"\n suburb state is "+delivery.suburbstate
        +"\n postal code type is "+delivery.postalcodetype
        +"\n postal code is "+delivery.postalcode
        +"\n order value threshold is "+delivery.ordervaluethreshold
        +"\n cost below threshold is "+delivery.costbelowthreshold
        +"\n fixed cost is "+delivery.fixedcost
        +"\n pickup order value is "+delivery.pickupordervalue
        +"\n pickup below is "+delivery.pickupbelow
        +"\n pickup cost above is "+delivery.pickupcostabove
        );
        if (userConfirm){
            let serverResponse=ajaxPostRequest("delivery",delivery);
            if (serverResponse=="ok"){
                swal.fire({
                    title:"Good Job🎉",
                    text:"save success",
                    icon:"success"
                });
                refreshDelivery();
            }else {
                alert(serverResponse)
            }
        }
    }else {
        alert(errors)
    }
}


















