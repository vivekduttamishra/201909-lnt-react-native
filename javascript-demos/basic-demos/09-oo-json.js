

p={
    name:'Prabhat',
    phones:[  //array
        {type:'mobile', number:'93939393'},
        {type:'office', number:'0802233393'}
    ],
    addresses:{ //object
        residence:{city: 'Bangalore',street:'MGRoad',pin:'511133'},
        office:{city:'Bangalore',street:'Manyata Tech Park', pin:'500101'}
    }
}
for(var i=0;i<p.phones.length;i++){
    var phone=p.phones[i];
    console.log(phone.type,phone.number);
}
console.log('pin or residence',p.addresses.residence.pin);
