

function RepeatString(n,str) {

    if(str === "" || n === 0){
        return "";
    }

    let finalStr = "";
    while(n>0){
        finalStr = finalStr.concat(str);
        n--;
    }

    return finalStr;
}

export default RepeatString