function matchFinder(string1, string2){
   let count = 0;
   for(let i = 0; i < string1.length; i++){
    for(let j = 0; j < string2.length; j++){
        if(string1[i] == string2[j]){
            count++;
        }
    }
   }
   if(count > 0){
                return true;
            }
            else{
                return false;
            }
    if(typeof String != 'string1' || typeof String != 'string2'){
        return 'Enter a valid string';
    }
    
}

const output = matchFinder('John Doe', 'ohn');
console.log(output);