function numberPyramid (input){
    let num = Number(input[0]);
    let counter = 1;
    let isBigger = false;
for (let rows = 1; rows<=num; rows ++){
    let buff = "";
    for(let cols = 1; cols<=rows; cols++){
        buff += counter + " " 
        counter ++;
        if (counter > num){
            isBigger = true;
            break;
        }
    }
    console.log (buff)
    if (isBigger){
        break;
}
}
}
numberPyramid (["7"])