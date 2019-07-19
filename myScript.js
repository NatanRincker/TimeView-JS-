//messages
const GOOD_MORNING='Bom Dia!',
        GOOD_AFTERNOON='Boa Tarde!',
        GOOD_NIGHT='Boa Noite!'

//Design resources
//imgPattern array helper
const PATH_INDEX=0, BG_COLOR_INDEX=1
const MORNING_PATTERN=0, AFTERNOON_PATTERN=1, NIGHT_PATTERN=2,DAWN_PATTERN=3
const imgPattern = [
    ['img/morning.png','#68a3cb'],
    ['img/afternoon.png','#f0d2a0'],
    ['img/night.png','#3d2640'],
    ['img/dawn.png','#2a538b'],
]

var hour, curPatternIndex

function updateTimeView(){
    hour= new Date().getHours()
    writeMessage()
    setDesign()
}

function writeMessage(){
    var msg=document.getElementById('msg')
    msg.innerHTML+=writeWelcome()
    msg.innerHTML+='</br>'+writeHour()
}
function writeWelcome(){
    if(hour==0 || hour<12){
        return GOOD_MORNING
    }else if(hour<=18){
        return GOOD_AFTERNOON
    }else{
        return GOOD_NIGHT
    }
}
function writeHour(){
    return hour==1 ?  `Agora é ${hour} hora` : `Agora são ${hour} horas`
}

function setDesign(){
    switch(writeWelcome()){
        case GOOD_MORNING:
            curPatternIndex=(hour<6)? DAWN_PATTERN:MORNING_PATTERN
        break
        case GOOD_AFTERNOON:
            curPatternIndex=AFTERNOON_PATTERN
        break
        case GOOD_NIGHT:
            curPatternIndex=NIGHT_PATTERN
        break
    }
    setImage()
    setBackgroundColor()
}
function setImage(){
    var img=window.document.getElementById('dayTimeImg')
    img.src=imgPattern[curPatternIndex][PATH_INDEX]
}
function setBackgroundColor(){
    document.body.style.background=imgPattern[curPatternIndex][BG_COLOR_INDEX]
}