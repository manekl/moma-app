import AlternateLetters from "./AtlernateLetters"

describe("#AlternateLetters",()=>{

    test("Does the function exist",()=>{
        const inputLetters = "HeLlO";
        AlternateLetters(inputLetters);
    });

    test("Does the function alternate the text values",()=>{
        
        const inputLetters = "HeLlO";
        const outLetters = "hElLo";
        AlternateLetters(inputLetters);

        expect(AlternateLetters(inputLetters)).toEqual(outLetters);
    });


    test("Does the function look at numbers",()=>{
        
        const inputLetters = "H1e2L3l4O";
        const outLetters = "h1E2l3L4o";
        AlternateLetters(inputLetters);

        expect(AlternateLetters(inputLetters)).toEqual(outLetters);
    });

    test("Does the function look at special chars",()=>{
        
        const inputLetters = "H!e2L3l4@";
        const outLetters = "h!E2l3L4@";
        AlternateLetters(inputLetters);

        expect(AlternateLetters(inputLetters)).toEqual(outLetters);
    });




    


});