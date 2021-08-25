import RepeatString from "./RepeatString"

describe("#RepeatString",()=>{

    test("Does the function exist",()=>{
        const inputLetters = "hello";
        const num = 1;
        RepeatString(num,inputLetters);
    });

    test("Testing if the string repeats", ()=>{

        const inputLetters = "hello";
        const num = 3;
        RepeatString(num,inputLetters);

        expect(RepeatString(num,inputLetters)).toEqual("hellohellohello");

    });

    test("Empty string or n is 0", ()=>{

        const inputLetters = "";
        const num = 0;
        RepeatString(num,inputLetters);

        expect(RepeatString(num,inputLetters)).toEqual("");

    });


});