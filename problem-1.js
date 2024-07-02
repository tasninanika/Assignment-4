function cubeNumber(number){
    const result = Math.pow(number, 3);
    if(typeof number != 'number'){
        return 'Please enter a number';
    }
    return result;
}
const output = cubeNumber(3);
console.log(output);