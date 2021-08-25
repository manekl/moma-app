//TODO alternating text 

// Input "HeLlO" 
// Output "hElLo"

function AlternateLetters(inputString){

    console.log("I am in AlternateLetters", inputString);

    // input the string and convert it into array with characters 
    const stringArray = inputString.split('');
    let resultArray = [];
    console.log("array is >>",stringArray);
    // convert each character to alternate case  
    stringArray.forEach(element => {

        // check if character is upper or lower case
        if(element == element.toUpperCase()){
            // convert it to lowercase
            element = element.toLowerCase();
        }else if(element == element.toLowerCase()){
            // convert to uppercase
            element = element.toUpperCase();
        }

        resultArray.push(element);
    });

    return resultArray.join('');
    
}

export default AlternateLetters