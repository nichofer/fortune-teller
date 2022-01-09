import FortuneTeller from "./index";

const myFortuneDiv = document.querySelector('#myFortune');

renderPage();

function renderPage(){
    addAFortune();
}

function addAFortune(){
    const createBtn = document.querySelector('#submit');
    const firstNameInput = document.querySelector('#firstName');
    const lastNameInput = document.querySelector('#lastName');
    const ageInput = document.querySelector('#age');
    const birthMonthInput = document.querySelector('#birthMonth');
    const favColorInput = document.querySelector('#favColor');
    const siblingsInput = document.querySelector('#siblings');
    

    createBtn.addEventListener('click', () => {
        // alert('hello');
        // console.log('create button click');
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const age = ageInput.value;
        const birthMonth = birthMonthInput.value;
        const favColor = favColorInput.value;
        const siblings = siblingsInput.value;
        // console.log(firstName.toLowerCase());

        const createdFortune = new FortuneTeller(firstName, lastName, age, birthMonth, favColor, siblings);
        
        const createdFortuneSection = document.createElement('section');
        const fortuneInfoPara = document.createElement('p');
        const fortuneInfoAgePara = document.createElement('p');
        const fortuneInfoBirthMonthPara = document.createElement('p');
        const fortuneInfoFavColorPara = document.createElement('p');
        const fortuneInfoSiblingsPara = document.createElement('p');
        fortuneInfoPara.innerText =  createdFortune.firstName + ' ' + createdFortune.lastName;
        
        if ((age % 2) === 0) {
            fortuneInfoAgePara.innerText = ' is lame!';
        } else {
            fortuneInfoAgePara.innerText = ' is cool!';
        }

        if (birthMonth < 4) {
            fortuneInfoBirthMonthPara.innerText = 'You get a donkey!';
        } else if (birthMonth > 3 && birthMonth < 7) {
            fortuneInfoBirthMonthPara.innerText = 'You get an alpaca!';
        } else if (birthMonth > 6 && birthMonth < 10) {
            fortuneInfoBirthMonthPara.innerText = 'You get an mini horse!';
        } else {
            fortuneInfoBirthMonthPara.innerText = 'You get an goat!';
        }

        
        if (favColor === 'red' || favColor === 'orange' || favColor === 'yellow' || favColor === 'green') {
            fortuneInfoFavColorPara.innerText = 'You love money $$$';
        } else if (favColor === 'blue' || favColor === 'indigo' || favColor === 'violet') {
            fortuneInfoFavColorPara.innerText = 'You love food!';
        }

        if (siblings < 5) {
            fortuneInfoSiblingsPara.innerText = 'Not many siblings...better fight for that inheritance!';
        } else {
            fortuneInfoSiblingsPara.innerText = 'You must be crazy!';
        }
       
        // fortuneInfoPara.innerText + ' ' + createdFortune.firstName + ' ' + createdFortune.lastName + ' ' + fortuneInfoAgePara.innerText + ' ' +
        // fortuneInfoBirthMonthPara.innerText + ' ' + fortuneInfoFavColorPara.innerText + ' ' + fortuneInfoSiblingsPara.innerText;
        
        
        createdFortuneSection.appendChild(fortuneInfoPara);
        createdFortuneSection.appendChild(fortuneInfoAgePara);
        createdFortuneSection.appendChild(fortuneInfoBirthMonthPara);
        createdFortuneSection.appendChild(fortuneInfoFavColorPara);
        createdFortuneSection.appendChild(fortuneInfoFavColorPara);
        createdFortuneSection.appendChild(fortuneInfoSiblingsPara);
        myFortuneDiv.appendChild(createdFortuneSection);
        
   
   
    });

    
}