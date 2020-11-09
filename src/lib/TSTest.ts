import inputs from './inputs';

const inputOutput: Array<any> = [];
let output: object;

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

const solution = (S: any):any => {
    const countLimit = 3;
    if (S.length < countLimit) {
        return S.length;
    } else {
        let count: number = 1;
        let resultCount: number = 1;
        for (let i = 1; i < S.length - 1; i++) {
            if(S[i] === S[i - 1] && S[i] === S[i + 1]) {
                resultCount = Math.max(resultCount, count + 1);
                count = 1;
            } else {
                ++count;
            }
        }
        return Math.max(resultCount, count + 1)
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//No Changed below this needed
for(const input of inputs) {
    let a: Array<any> = Object.keys(input).map(key => input[key]);
    output = solution.apply(null, a);
    //output = {};
    inputOutput.push({ input, output });
}

export default inputOutput;


// export const str2: string = 'TSTest.ts'
