var array=[];


function fibonacci(a){
    if(a===1){
        array=[0];
     }else if(a===2){
        array=[0,1];
    }else{
        array=[0,1];
        for(var i=2;i<a;i++){
        array.push(array[array.length-2] + array[array.length-1]);
        }
      }
    return array;
}
array=fibonacci(45);
console.log(array);
