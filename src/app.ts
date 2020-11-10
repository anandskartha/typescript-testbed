import inputOutput from './lib/TSConcepts';
//import inputOutput from './lib/TSTest'

const testBed = document.querySelector('#testBed')!;
let outputStr: string = '';
console.log(inputOutput)
for(let io of inputOutput) {
    outputStr += `<div><p>Input: ${JSON.stringify(io.input, null, '\t')}</p><p>Output: ${JSON.stringify(io.output, null, '\t')}</p></div>`
}
testBed.innerHTML = outputStr;