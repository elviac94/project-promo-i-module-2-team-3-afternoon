'use strict';

console.log('hola');


//DESIGN COLOR

const designTop = document.querySelector('.design--top');
const designBottom = document.querySelector('.design--bottom');
const inputColorPalette1 = document.querySelector('#color-option1')
const inputColorPalette2 = document.querySelector('#color-option2')
const inputColorPalette3 = document.querySelector('#color-option3')
const cardDecoration = document.querySelector('#image--preview_text')
const cardIcons = document.querySelector('#image--preview_icons')

function onClickDesignTop() {
  designBottom.classList.toggle('design--bottom--visible');
  designTop.classList.toggle('design--top--active');
}

function changePalette1() {
  cardDecoration.classList.add('color-palette1');
  cardIcons.classList.add('icon-palette1');
  cardDecoration.classList.remove('color-palette2');
  cardIcons.classList.remove('icon-palette2');
  cardDecoration.classList.remove('color-palette3');
  cardIcons.classList.remove('icon-palette3');
}

function changePalette2() {
  cardDecoration.classList.add('color-palette2');
  cardIcons.classList.add('icon-palette2');
  cardDecoration.classList.remove('color-palette1');
  cardIcons.classList.remove('icon-palette1');
  cardDecoration.classList.remove('color-palette3');
  cardIcons.classList.remove('icon-palette3');
}

function changePalette3() {
  cardDecoration.classList.add('color-palette3');
  cardIcons.classList.add('icon-palette3');
  cardDecoration.classList.remove('color-palette1');
  cardIcons.classList.remove('icon-palette1');
  cardDecoration.classList.remove('color-palette2');
  cardIcons.classList.remove('icon-palette2');
}


designTop.addEventListener('click', onClickDesignTop);
inputColorPalette1.addEventListener('change', changePalette1)
inputColorPalette2.addEventListener('change', changePalette2)
inputColorPalette3.addEventListener('change', changePalette3)

//DESIGN SCRIPT

const fillTop = document.querySelector('.fill--top');
const fillBottom = document.querySelector('.fill--bottom');

let inputName = document.querySelector('#firstName');
let inputJob = document.querySelector('#addjob');
let cardFullName = document.querySelector('.card--full_name');
let cardFullProfession = document.querySelector('.card--full_profession');

function onClickFillTop() {
  fillBottom.classList.toggle('fill--bottom--visible');
  fillTop.classList.toggle('fill--top--active');
}

function print(evt) {
  if (evt.currentTarget.name === 'firstName') {
    cardFullName.innerHTML = evt.currentTarget.value
  }
  if (evt.currentTarget.name === 'addjob') {
    cardFullProfession.innerHTML = evt.currentTarget.value
  }
};

const FillIconPhone = document.querySelector('#icon1');
const FillIconEmail = document.querySelector('#icon2');
const FillIconLinkedin = document.querySelector('#icon3');
const FillIconGithub = document.querySelector('#icon4');
let FillInputPhone = document.querySelector('#addphone');
let FillInputEmail = document.querySelector('#addemail');
let FillInputLinkedin = document.querySelector('#addlinkedin');
let FillInputGithub = document.querySelector('#addgithub');
const FillButtonClose = document.querySelector('.fill--buttton');
const FillFormBottom = document.querySelector('.fill--bottom');

function chosenInput() {
  return event.currentTarget;
}

function showIcon(event) {
  const finalInput = chosenInput();
  if (finalInput === FillInputPhone) {
    FillIconPhone.classList.remove('hidden--fill')
  }
  if (finalInput === FillInputEmail) {
    FillIconEmail.classList.remove('hidden--fill')
  }
  if (finalInput === FillInputLinkedin) {
    FillIconLinkedin.classList.remove('hidden--fill')
  }
  if (finalInput === FillInputGithub) {
    FillIconGithub.classList.remove('hidden--fill')
  }
}

 

fillTop.addEventListener('click', onClickFillTop);
inputName.addEventListener('keyup', print);
inputJob.addEventListener('keyup', print);
FillInputPhone.addEventListener('keypress', showIcon);
FillInputEmail.addEventListener('keypress', showIcon);
FillInputLinkedin.addEventListener('keypress', showIcon);
FillInputGithub.addEventListener('keypress', showIcon);


// FILL AND ERRORS

<<<<<<< HEAD
const textErrorAll = document.querySelectorAll('.text-error');
const inputFill = document.querySelectorAll('.input-fill');
const fillForm = document.querySelectorAll('.fillform');
const createButton = document.querySelector('.create-card--button');


    function validateForm(){
        
     for(let myInput of inputFill){
        if(myInput.value !==""){
        myInput.classList.remove("input-error");
        myInput.classList.add("input-correct");
        }else{
        myInput.classList.remove("input-correct");
        myInput.classList.add("input-error");
    }    
    validateText(textErrorAll); 
    }
}
    

    function validateText(textErrorAll){
        for(let myInput of inputFill){
        for (let item of textErrorAll){
            if (myInput.value === ""){
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        }
        //myInput.addEventListener('keyup', validateForm);
    }}



createButton.addEventListener('click', validateForm);

//STORE INPUT INFORMATION // HAY QUE DEFINIR LA FUNCIÓN

function storeFullName() {
    storedData.name = inputName.value, storeData()
  }
function storeJob() {
    storedData.job = inputJob.value, storeData()
  }
function storeEmail() {
   storedData.email = FillInputEmail.value, storeData()
}
function storeTelf() {
    storedData.phone = FillInputPhone.value, storeData()
  }
function storeLinkedin() {
   storedData.linkedin = FillInputLinkedin.value, storeData()
}
function storeGithub() {
    storedData.github = FillInputGithub.value, storeData()
  }
=======
//ESTOS BORRAR
//let inputName = document.querySelector('#firstName');
//let inputJob = document.querySelector('#addjob');
//const FillInputEmail = document.querySelector('#addemail');
//const FillInputLinkedin = document.querySelector('#addlinkedin');
//const FillInputGithub = document.querySelector('#addgithub');
//HASTA AQUÍ
//const inputError = document.querySelector('#text-error');

//if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputError.value)) {
//  inputName.classList.remove('input-error');
// inputError.classList.add('hidden');
// return (true);
//} else {
//    inputEmail.classList.add('input-error');
//  emailError.classList.remove('hidden');
//  return (false);
//}
>>>>>>> 35785eabed1d15ed4db9a22a4f122adfc935f292


//DESING COMPARTE

const shareTop = document.querySelector('.share--top');
const shareBottom = document.querySelector('.share--bottom');
const createCardContainer = document.querySelector('created-card--container');

function onClickShareTop() {
  shareBottom.classList.toggle('share--bottom--visible');
  shareTop.classList.toggle('share--top--active');
}

<<<<<<< HEAD
function onClickCreateButton(){
    createButton.classList.add('create-card--button--active');
    //createCardContainer.classList.add('created-card--container--visible');
=======
function onClickCreateButton() {
  createButton.classList.add('create-card--button--active');
  createCardContainer.classList.add('created-card--container--visible');
>>>>>>> 35785eabed1d15ed4db9a22a4f122adfc935f292
}

shareTop.addEventListener('click', onClickShareTop);
createButton.addEventListener('click', onClickCreateButton);



// RESET BUTTON
const resetButton = document.querySelector('.button--preview');

function reset() {
  
  inputName.value = '';
  inputJob.value = '';
  FillInputPhone.value = '';
  FillInputEmail.value = '';
  FillInputGithub.value ='';  
  FillInputLinkedin.value='';
  cardFullName.innerHTML = 'Nombre Apellidos';
  cardFullProfession.innerHTML = 'Front-end developer';
  
  
  
    FillIconPhone.classList.add('hidden--fill');
    FillIconEmail.classList.add('hidden--fill');
    FillIconLinkedin.classList.add('hidden--fill');
    FillIconGithub.classList.add('hidden--fill');



  
  changePalette1()
  showIcon(event) 
  chosenInput()





}







resetButton.addEventListener('click', reset)





/* 
  
  
  
    palette1.checked = true;

    const imageUrl = './assets/images/profile-picture.gif';
    profileImage.style.backgroundImage = `url(${imageUrl})`;
    profilePreview.style.backgroundImage = `url(${imageUrl})`;

    fillTelf();
    fillEmail();
    fillLinkedin();
    fillGithub();
    setTheme();

    validateAll();
    toggleDesign()

    cardShare.classList.add('hidden'); */

    //  cardIcons.classList.add('hidden');
