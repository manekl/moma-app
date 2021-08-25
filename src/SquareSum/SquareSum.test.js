import suqareSum from "./SquareSum"

  describe("#squareSum",() =>{

    // Overall testing pattern ZOM(BIES)
    // Zero
    // One case
    // Many and More complex

    test('squareSum exists', () => {
        const testSet = [1,2,2]
        // check if the function exists
        let setPassed = suqareSum(testSet);
      });

      test('squareSum - standard values', ()=>{

        const inputArr = [0,4,5,7];
        const expectResult = 90;
        
          expect(suqareSum(inputArr)).toEqual(expectResult);
      });

      test('squareSum - edge case with no value', ()=>{

        const inputArr = [];
        const expectResult = 0;
        
        expect(suqareSum(inputArr)).toEqual(expectResult);
      });

      

  });



