const address = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'

};
function findAddress(add){
    const output = Object.values(address);
    console.log(output);
    return output;
}
findAddress(address);




const address2 = {
    street: 10,
    house: '__',
    society: 'Earth Perfect'

};
function findAddress2(add){
    const output2 = Object.values(address2);
    console.log(output2);
    return output2;
}
findAddress2(address2);



const address3 = {
    street: 10,
    house: '__',
    society: '__'

};
function findAddress3(add){
    const output3 = Object.values(address3);
    console.log(output3);
    return output3;
}
findAddress3(address3);
