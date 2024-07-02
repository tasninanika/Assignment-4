function canPay(array, number){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] == -1){
            return 'Enter some numbers';
        }
        else{
            total += array[i];
        }
    }
    
    if(total >= number){
        return true;
    }
    else{
        return false;
    }
}
const array = [1, 5, 5];
const number = 10;
console.log(canPay(array, number));