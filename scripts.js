var angry = new Audio('assets/sounds/angry.mp3')
var bubbably = new Audio('assets/sounds/bubbably.mp3')
var didYouNotice = new Audio('assets/sounds/didyouNotice.mp3')
var flaflip = new Audio('assets/sounds/flaflip.mp3')
var itsFillingUp = new Audio('assets/sounds/itsFillingUp.mp3')
var makingConversation = new Audio('assets/sounds/makingConversation.mp3')
var meetingsOver = new Audio('assets/sounds/meetingsOver.mp3')
var monstersUniversity = new Audio('assets/sounds/monstersUniversity.mp3')
var mushroomsComing = new Audio('assets/sounds/mushroomsComing.mp3')
var peeyo = new Audio('assets/sounds/peeyo.mp3')
var quiet = new Audio('assets/sounds/quiet.mp3')
var scaredOfBirds = new Audio('assets/sounds/scaredOfBirds.mp3')
var snails = new Audio('assets/sounds/snails.mp3')
var tipsyScoop = new Audio('assets/sounds/tipsyScoop.mp3')
var whatsCinammon = new Audio('assets/sounds/whatsCinnamon.mp3')


document.addEventListener("DOMContentLoaded", function(){
let buttonGrid = document.getElementsByClassName('buttonGrid')[0]
document.getElementsByClassName("peeyo")[0].addEventListener("click", function() {
    peeyo.play();
})
document.getElementsByClassName("monstersUniversity")[0].addEventListener("click", function() {
    monstersUniversity.play();
})
document.getElementsByClassName("bubbably")[0].addEventListener("click", function() {
    bubbably.play();
})
document.getElementsByClassName("didYouNotice")[0].addEventListener("click", function() {
    didYouNotice.play();
})
document.getElementsByClassName("scaredOfBirds")[0].addEventListener("click", function() {
    scaredOfBirds.play();
})
document.getElementsByClassName("flaflip")[0].addEventListener("click", function() {
    flaflip.play();
})
document.getElementsByClassName("itsFillingUp")[0].addEventListener("click", function() {
    itsFillingUp.play();
})
document.getElementsByClassName("makingConversation")[0].addEventListener("click", function() {
    makingConversation.play();
})
document.getElementsByClassName("meetingsOver")[0].addEventListener("click", function() {
    meetingsOver.play();
})
document.getElementsByClassName("mushroomsComing")[0].addEventListener("click", function() {
    mushroomsComing.play();
})
document.getElementsByClassName("quiet")[0].addEventListener("click", function() {
    quiet.play();
})
document.getElementsByClassName("snails")[0].addEventListener("click", function() {
    snails.play();
})
document.getElementsByClassName("tipsyScoop")[0].addEventListener("click", function() {
    tipsyScoop.play();
})
document.getElementsByClassName("whatsCinnamon")[0].addEventListener("click", function() {
    whatsCinammon.play();
})
document.getElementsByClassName("angry")[0].addEventListener("click", function() {
    angry.play();
})
})

