
const howManyCastlesToBuild = (topography) => {
    if (!topography || !topography.length) {
        return 0;
    }

    const result = topography
        .filter((height, i, array) => {
            const peekHeight = i < (array.length - 1) ? array[i + 1] : undefined;
            return peekHeight !== height;
        })
        .reduce((acc, height, i, array) => {
        if (i === 0) {
            return ++acc;        // by rule, we always build at the start of the array
        } else {
            const prevHeight = array[i - 1];
            const peekHeight = i < (array.length - 1) ? array[i + 1] : undefined;

            const shouldWeBuild = (height > prevHeight && (peekHeight < height || peekHeight === undefined)) ||
                                  (height < prevHeight && (peekHeight > height || peekHeight === undefined));
            return shouldWeBuild ? ++acc : acc;
        }
    }, 0);

    return result;
}

const tests = [
    {
        topo: undefined,
        expected: 0
    },
    {
        topo: [],
        expected: 0
    },
    {
        topo: [2,6,6,6,3],
        expected: 3
    },
    {
        topo: [6,1,4],
        expected: 3
    },
    {
        topo: [2,2,4,5,7,3,1,5,5,5],
        expected: 4
    },
    {
        topo: [2,2,2,2,2],
        expected: 1
    },
    {
        topo: [10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10],
        expected: 2
    },
    {
        topo: [10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-8],
        expected: 3
    },
    {
        topo: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
        expected: 2
    },
    {
        topo: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,8],
        expected: 3
    },
    {
        topo: [2,2,2,8,8,8],
        expected: 2
    },
    {
        topo: [2,2,2,8,4,4,4],
        expected: 3
    },
    {
        topo: [9,9,9,8,7,6,6,7,8,9,10,11,12,13,15,14,13,12,11,10,9,8,7,6,7,8,8,8,9,10,10,9,8,9,10,11,12,12,12,12],
        expected: 7
    },
    {
        topo: [1,1,1,2,3,4,5,5,5,6,7,8,9,9,9,8,7,6,5,4,4,4,3,2,1,0,-1,-2,-2,-2,-2],
        expected: 3
    },
];
let failCount = 0;
for (let i = 0; i < tests.length; i++) {
    const topo = tests[i].topo;
    const expected = tests[i].expected;
    const result = howManyCastlesToBuild(topo);
    const passed = result === expected;
    if (!passed) {
        failCount++;
    }
    console.log(`For [${topo}] got: ${result} - ${passed ? 'PASS' : 'FAIL'}`);
}
console.log(`\nFor ${tests.length} total tests, ${tests.length - failCount} PASSed and there were ${failCount} that FAILed.`);
