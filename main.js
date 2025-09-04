var audio = new Audio("MainMenuTheme2.mp3")
var TextNumber = 0

function play(){
 audio.loop = true
 audio.play()
}

function GoToTutorial(){
    window.location = "Tutorial.html"
}

function ChangeText(){
    TextNumber++

    if (TextNumber == 1){
      document.getElementById("ClickAbleTutorial").innerHTML = "Ok this works"
    }

}
