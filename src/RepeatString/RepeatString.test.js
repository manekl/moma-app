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

});