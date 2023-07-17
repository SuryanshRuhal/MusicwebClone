console.log("WELCOME TO MELANCHOLY");
let songIndex=0;
let audioElement= new Audio('englishsongs/1.mp3');
let masterplay= document.getElementById("masterPlay");
let progressbar= document.getElementById("progressbar");
let songplay= document.getElementById("songplay");
let songitem = Array.from(document.getElementsByClassName("songitem"));

let songs=[
    {songName:"Until I Found You", timestamp:"2:57", filePath:"englishsongs/1.mp3"},
    {songName:"Pastlives", timestamp:"2:33",filePath:"englishsongs/2.mp3"},
    {songName:"Night Changes", timestamp:"3:46",filePath:"englishsongs/3.mp3"},
    {songName:"Photograph", timestamp:"4:24 ",filePath:"englishsongs/4.mp3"},
    {songName:"Dandelions", timestamp:"12:06",filePath:"englishsongs/5.mp3"},
    {songName:"Suzume", timestamp:"3:59",filePath:"englishsongs/6.mp3"},
    {songName:"Faded", timestamp:"3:32",filePath:"englishsongs/7.mp3"},
    {songName:"A Thousand Years", timestamp:"4:47",filePath:"englishsongs/8.mp3"},
    {songName:"We Don't Talk Anymore", timestamp:"3:50",filePath:"englishsongs/9.mp3"},
    {songName:"You Belong With Me", timestamp:"3:48",filePath:"englishsongs/10.mp3"},
    {songName:"Days I'll Remember", timestamp:"3:34",filePath:"englishsongs/11.mp3"},
    {songName:"As It Was", timestamp:"3:05",filePath:"englishsongs/12.mp3"},
    {songName:"Welcome Home", timestamp:"0:29",filePath:"englishsongs/13.mp3"},
] 

songitem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByClassName("songname")[0].innerText= songs[i].songName;
    element.getElementsByClassName("timestamp")[0].innerText= songs[i].timestamp;
})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-regular');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause'); 
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value= progress;
    
})
progressbar.addEventListener('change',()=> {
        audioElement.currentTime = progressbar.value * audioElement.duration / 100;
})

const makeallplay =()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-regular');
        element.classList.remove('fa-circle-pause'); 
        element.classList.add('fa-regular'); 
        element.classList.add('fa-circle-play'); 
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplay();
        songIndex= parseInt(e.target.id);
    e.target.classList.remove('fa-regular');
    e.target.classList.remove('fa-circle-play'); 
    e.target.classList.add('fa-regular'); 
    e.target.classList.add('fa-circle-pause'); 
    audioElement.src=`englishsongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-regular');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause'); 
    })
})


 document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=12;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`englishsongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-regular');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
        makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
 })
 document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=12){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`englishsongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-regular');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
        makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
 })
 let anu=0;
 document.getElementById("shuffle").addEventListener('click',()=>{
    if(anu===0){
        anu=1;
        document.getElementById("shuffle").style.opacity="0.6";
        document.getElementById("shuffle").style.border="2px solid white";
    }
    else {
        anu=0;
        document.getElementById("shuffle").removeAttribute('style');
    }
    console.log("anu:"+anu);
    songIndex= Math.ceil(Math.random()*12);
    console.log(songIndex);
    audioElement.src=`englishsongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-solid');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
        makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
   
 });
 audioElement.addEventListener('timeupdate',()=>{
if(anu===0&&rep===0){
    if(audioElement.currentTime==audioElement.duration){
        if(songIndex>=12){
            songIndex=0;
        }
        else{
            songIndex +=1;
        }
        audioElement.src=`englishsongs/${songIndex+1}.mp3`;
        songplay.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-regular');
            masterplay.classList.remove('fa-circle-play'); 
            masterplay.classList.add('fa-regular'); 
            masterplay.classList.add('fa-circle-pause');
            makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
    }
}else if(anu===1){
    if (audioElement.currentTime==audioElement.duration)
    {
        songIndex= Math.ceil(Math.random()*10);
    console.log(songIndex);
    audioElement.src=`englishsongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-solid');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
        makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
    } 
}
 });
 let rep=0;
 document.getElementById("repeat").addEventListener('click',()=>{
    if(rep===0){
        rep=1;
        document.getElementById("repeat").style.opacity="0.6";
        document.getElementById("repeat").style.border="2px solid white";
    }
    else {
        rep=0;
        document.getElementById("repeat").removeAttribute('style');
    }
    console.log(rep);
    audioElement.src=`englishsongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-solid');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
        makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
 });
 audioElement.addEventListener('timeupdate',()=>{
    if(rep===0){
        if(audioElement.currentTime==audioElement.duration){
            if(songIndex>=12){
                songIndex=0;
            }
            else{
                songIndex +=1;
            }
            audioElement.src=`englishsongs/${songIndex+1}.mp3`;
            songplay.innerText= songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterplay.classList.remove('fa-regular');
                masterplay.classList.remove('fa-circle-play'); 
                masterplay.classList.add('fa-regular'); 
                masterplay.classList.add('fa-circle-pause');
                makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
        }
    } else if(rep===1){
        if (audioElement.currentTime===audioElement.duration)
        { 
            console.log(songIndex);
        audioElement.src=`englishsongs/${songIndex+1}.mp3`;
        songplay.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-solid');
            masterplay.classList.remove('fa-circle-play'); 
            masterplay.classList.add('fa-regular'); 
            masterplay.classList.add('fa-circle-pause');
            makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
        } 
    }
     });
