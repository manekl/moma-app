

function RepeatString(n,str) {

    let finalStr = "";
    while(n>0){
        finalStr = finalStr.concat(str);
        n--;
    }

    return finalStr;
}

export default RepeatString