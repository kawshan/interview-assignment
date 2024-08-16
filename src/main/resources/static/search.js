window.addEventListener('load',function (){
    deliveries=ajaxGetRequest("/delivery/findall");
    console.log("serch js")
    refreshDeliveryTable();
})



const refreshDeliveryTable = ()=>{

    displayProperty=[
        {dataType:'text',propertyName:'state'},
        {dataType:'text',propertyName:'city'},
        {dataType:'text',propertyName:'postalcodetype'},
        {dataType:'text',propertyName:'postalcode'},
    ]

    fillDataIntoTable(tableDelivery,deliveries,displayProperty,false)

}


const btnSearchPostalCode = ()=>{
    let postal=textPostalCode.value;
    console.log(postal);
    deliveries=ajaxGetRequest("/delivery/postalcode/"+postal);


    displayProperty=[
        {dataType:'text',propertyName:'state'},
        {dataType:'text',propertyName:'city'},
        {dataType:'text',propertyName:'postalcodetype'},
        {dataType:'text',propertyName:'postalcode'},
    ]

    fillDataIntoTable(tableDelivery,deliveries,displayProperty,false)


}