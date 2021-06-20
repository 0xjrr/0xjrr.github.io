'use strict'

const startButton = document.querySelector('.nav-start-button')
const aboutButton = document.querySelector('.nav-about-button')
const projectButton = document.querySelector('.nav-project-button')
const contactButton = document.querySelector('.nav-contact-button')

const startSection = document.querySelector('.nav-start-section')
const aboutSection = document.querySelector('.nav-about-section')
const projectSection = document.querySelector('.nav-project-section')
const contactSection = document.querySelector('.nav-contact-section')



startButton.addEventListener('click',function(){
    startSection.classList.replace('invisible','visible')
    aboutSection.classList.replace('visible','invisible')
    projectSection.classList.replace('visible','invisible')
    contactSection.classList.replace('visible','invisible')
})
aboutButton.addEventListener('click',function(){
    aboutSection.classList.replace('invisible','visible')
    startSection.classList.replace('visible','invisible')
    projectSection.classList.replace('visible','invisible')
    contactSection.classList.replace('visible','invisible')
})
projectButton.addEventListener('click',function(){
    projectSection.classList.replace('invisible','visible')
    startSection.classList.replace('visible','invisible')
    aboutSection.classList.replace('visible','invisible')
    contactSection.classList.replace('visible','invisible')
})
contactButton.addEventListener('click',function(){
    contactSection.classList.replace('invisible','visible')
    startSection.classList.replace('visible','invisible')
    aboutSection.classList.replace('visible','invisible')
    projectSection.classList.replace('visible','invisible')
})