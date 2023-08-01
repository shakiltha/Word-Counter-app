let dummyText = document.getElementById('dummy');
dummyText.innerText = "Lorem ipsum dolor sit amet consectetur35 adipisicing eli2345t. Amet molestiae2345 perf098 987erendis (298*234) veritatis(823&223), cumq(<)>*987 lkae sim./ \'234 kjh <(i2837)> {liq} [ue] =vol- upt_atum &^dol^%$ ores$ temp#@ !ore `com` ~modi :hic; so'luta, provident, 'magni' ||harum? Necess\ /itat/ ?ibus?, inven <()> Ull098 ;'&*am illo, amet ratione rem corrupti ipsum co 0987 0nsec (78()())te tur sed offi&^% ciis veri #@$ tat is ut er @!#ror tem+_ pora disti (+_)nctio corpo +ris =culpa __-modi enim numquam no 65&^strum! Ad fug^iat t..otam dol;orem.";

dummyText.addEventListener('dblclick', () => {
    dummyText.select();
    let dummyValue = dummyText.value;
    navigator.clipboard.writeText(dummyValue);
})

const inputText = document.getElementById('inputText');
let totalWord = document.querySelector('.total-word');
let totalLetter = document.querySelector('.total-letter');
let totalSymbol = document.querySelector('.total-symbol');
let totalNumber = document.querySelector('.total-number');
let totalSpace = document.querySelector('.total-space');

inputText.addEventListener('input', () => {
    let splitted = inputText.value.trim().split(/[\s][^~`@#$%^&*()-_+={}[]|\/:;"'<>,.?  ]\D/);
    let wordCount = 0;
    for(let text of splitted) {
        wordCount++;
        if(splitted[0] === '') {
            wordCount = 0;
        }
    } 
    totalWord.textContent = wordCount;

    let letterCount = (inputText.value.match(/[a-z]/ig) || []).length;
    totalLetter.textContent = letterCount;

    // special symbol ~`@#$%^&*()-_+={}[]|\/:;"'<>,.?   

    let symbolCount = (inputText.value.match(/[\~\`\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]|\\\/\:\;\"\'\<\>\,\.\?]/g) || []).length;
    totalSymbol.textContent = symbolCount;

    let numberCount = (inputText.value.match(/[0-9]/g) || []).length;
    totalNumber.textContent = numberCount;

    let spaceCount = (inputText.value.trim().match(/[\s]/g) || []).length;
    totalSpace.textContent = spaceCount;

});

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', () => {
    inputText.value = '';
    totalWord.textContent = 0;
    totalLetter.textContent = 0;
    totalSymbol.textContent = 0;
    totalNumber.textContent = 0;
    totalSpace.textContent = 0;
})

// dialox box section
const myLetterModal = document.querySelector('#letter-modal');
const mySymbolModal = document.querySelector('#symbol-modal');
const myNumberModal = document.querySelector('#number-modal');
const openLetterModal = document.querySelector('.individual-letter-count-btn');
const openSymbolModal = document.querySelector('.individual-symbol-count-btn'); 
const openNumberModal = document.querySelector('.individual-number-count-btn');
const closeDialog = document.querySelectorAll('.close-dialog-btn'); 

openLetterModal.addEventListener('click', () => { 
    myLetterModal.showModal();
    let totalA = document.querySelector('.total-a');
    let totalB = document.querySelector('.total-b');
    let totalC = document.querySelector('.total-c');
    let totalD = document.querySelector('.total-d');
    let totalE = document.querySelector('.total-e');
    let totalF = document.querySelector('.total-f');
    let totalG = document.querySelector('.total-g');
    let totalH = document.querySelector('.total-h');
    let totalI = document.querySelector('.total-i');
    let totalJ = document.querySelector('.total-j');
    let totalK = document.querySelector('.total-k');
    let totalL = document.querySelector('.total-l');
    let totalM = document.querySelector('.total-m');
    let totalN = document.querySelector('.total-n');
    let totalO = document.querySelector('.total-o');
    let totalP = document.querySelector('.total-p');
    let totalQ = document.querySelector('.total-q');
    let totalR = document.querySelector('.total-r');
    let totalS = document.querySelector('.total-s');
    let totalT = document.querySelector('.total-t');
    let totalU = document.querySelector('.total-u');
    let totalV = document.querySelector('.total-v');
    let totalW = document.querySelector('.total-w');
    let totalX = document.querySelector('.total-x');
    let totalY = document.querySelector('.total-y');
    let totalZ = document.querySelector('.total-z');

    let inputValueA = (inputText.value.match(/a/ig) || []).length;    
    totalA.textContent = inputValueA;
    let inputValueB = (inputText.value.match(/b/ig) || []).length;
    totalB.textContent = inputValueB;
    let inputValueC = (inputText.value.match(/c/ig) || []).length;
    totalC.textContent = inputValueC;
    let inputValueD = (inputText.value.match(/d/ig) || []).length;
    totalD.textContent = inputValueD;
    let inputValueE = (inputText.value.match(/e/ig) || []).length;
    totalE.textContent = inputValueE;
    let inputValueF = (inputText.value.match(/f/ig) || []).length;
    totalF.textContent = inputValueF;
    let inputValueG = (inputText.value.match(/g/ig) || []).length;
    totalG.textContent = inputValueG;
    let inputValueH = (inputText.value.match(/h/ig) || []).length;
    totalH.textContent = inputValueH;
    let inputValueI = (inputText.value.match(/i/ig) || []).length;
    totalI.textContent = inputValueI;
    let inputValueJ = (inputText.value.match(/j/ig) || []).length;
    totalJ.textContent = inputValueJ;
    let inputValueK = (inputText.value.match(/k/ig) || []).length;
    totalK.textContent = inputValueK;
    let inputValueL = (inputText.value.match(/l/ig) || []).length;
    totalL.textContent = inputValueL;
    let inputValueM = (inputText.value.match(/m/ig) || []).length;
    totalM.textContent = inputValueM;
    let inputValueN = (inputText.value.match(/n/ig) || []).length;
    totalN.textContent = inputValueN;
    let inputValueO = (inputText.value.match(/o/ig) || []).length;
    totalO.textContent = inputValueO;
    let inputValueP = (inputText.value.match(/p/ig) || []).length;
    totalP.textContent = inputValueP;
    let inputValueQ = (inputText.value.match(/q/ig) || []).length;
    totalQ.textContent = inputValueQ;
    let inputValueR = (inputText.value.match(/r/ig) || []).length;
    totalR.textContent = inputValueR;
    let inputValueS = (inputText.value.match(/s/ig) || []).length;
    totalS.textContent = inputValueS;
    let inputValueT = (inputText.value.match(/t/ig) || []).length;
    totalT.textContent = inputValueT;
    let inputValueU = (inputText.value.match(/u/ig) || []).length;
    totalU.textContent = inputValueU;
    let inputValueV = (inputText.value.match(/v/ig) || []).length;
    totalV.textContent = inputValueV;
    let inputValueW = (inputText.value.match(/w/ig) || []).length;
    totalW.textContent = inputValueW;
    let inputValueX = (inputText.value.match(/x/ig) || []).length;
    totalX.textContent = inputValueX;
    let inputValueY = (inputText.value.match(/y/ig) || []).length;
    totalY.textContent = inputValueY;
    let inputValueZ = (inputText.value.match(/z/ig) || []).length;
    totalZ.textContent = inputValueZ;
})

openNumberModal.addEventListener('click', () => { 
    myNumberModal.showModal();
    let totalZero = document.querySelector('.total-zero');
    let totalOne = document.querySelector('.total-one');
    let totalTwo = document.querySelector('.total-two');
    let totalThree = document.querySelector('.total-three');
    let totalFour = document.querySelector('.total-four');
    let totalFive = document.querySelector('.total-five');
    let totalSix = document.querySelector('.total-six');
    let totalSeven = document.querySelector('.total-seven');
    let totalEight = document.querySelector('.total-eight');
    let totalNine = document.querySelector('.total-nine');

    let inputZero = (inputText.value.match(/0/g) || []).length;
    totalZero.textContent = inputZero;
    let inputOne = (inputText.value.match(/1/g) || []).length;
    totalOne.textContent = inputOne;
    let inputTwo = (inputText.value.match(/2/g) || []).length;
    totalTwo.textContent = inputTwo;
    let inputThree = (inputText.value.match(/3/g) || []).length;
    totalThree.textContent = inputThree;
    let inputFour = (inputText.value.match(/4/g) || []).length;
    totalFour.textContent = inputFour;
    let inputFive = (inputText.value.match(/5/g) || []).length;
    totalFive.textContent = inputFive;
    let inputSix = (inputText.value.match(/6/g) || []).length;
    totalSix.textContent = inputSix;
    let inputSeven = (inputText.value.match(/7/g) || []).length;
    totalSeven.textContent = inputSeven;
    let inputEight = (inputText.value.match(/8/g) || []).length;
    totalEight.textContent = inputEight;
    let inputNine = (inputText.value.match(/9/g) || []).length;
    totalNine.textContent = inputNine;
})

closeDialog[0].addEventListener('click', () => { 
    myLetterModal.close();
})

closeDialog[1].addEventListener('click', () => { 
    myNumberModal.close();
})

