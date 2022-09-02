//1.

    //Set(4) {1,2,3,4}

//2.

    //ref

//3. 

    //Map(2) {[1,2,3] => true, [1,2,3] => false}

//4. 

const hasDupes = arr => arr.length > new Set(arr);

//5.

const vowelCount = function(str) {
    const vowels = 'aeiou';
    const myMap = new Map();
    [...str].forEach(char => {
        if (vowels.indexOf(char) !== -1) {
            if (myMap.has(char)) {
                myMap.set(char, myMap.get(char)+1);
            } else {
                myMap.set(char, 1);
            }
        }
    });
    return myMap;
};
    