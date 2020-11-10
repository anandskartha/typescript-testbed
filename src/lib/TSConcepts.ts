interface Provider {
    input: string,
    output: string
}
const inputOutput: Array<Provider> = [];
let result: Provider;

let solution = (S: any) => {
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

result = solution('anandbaaabbabbbanand');
inputOutput.push({ ...result });

result = solution('babba');
inputOutput.push({ ...result });

result = solution('abaaaa');
inputOutput.push({ ...result });



export default inputOutput;