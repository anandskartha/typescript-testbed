import inputs from './inputs';
interface Provider {
    input: string,
    output: string
}
const inputOutput: Array<Provider> = [];
let result: Provider;

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

const solution = (S: any) => {
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
        return {
            input: S,
            output: Math.max(resultCount, count + 1)
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//No Changed below this needed

for(const input of inputs) {
    result = solution.apply(null, Object.keys(input).map(key => input[key]));
    inputOutput.push({ ...result });
}

export default inputOutput;
