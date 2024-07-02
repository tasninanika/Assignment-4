function sortMaker(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0 && array[i] != array[i+1] && array[i] < array[i+1]){
            const decArr = [];
            for(let j = array.length-1; j >= 0; j--){
                decArr.push(array[j]);
                
            }
            return decArr;
        }
        else if(array[i] == array[i+1] && array[i] > 0){
            return 'equal';
        }
        else if(array[i] > 0 && array[i+1] > 0 && array[i]>array[i+1]){
            return array;
        }
        else{
           return 'Invalid Input';
        }
    } 
    
}
const arr = [1,2];
const output = sortMaker(arr);
console.log(output);
