console.log("WELCOME TO MELANCHOLY");
let songIndex=0;
let audioElement= new Audio('hindisongs/1.mp3');
let masterplay= document.getElementById("masterPlay");
let progressbar= document.getElementById("progressbar");
let songplay= document.getElementById("songplay");
let songitem = Array.from(document.getElementsByClassName("songitem"));

let songs=[
    {songName:"Ajeeb Dastan Hai Yeh", timestamp:"4:48", filePath:"hindisongs/1.mp3"},
    {songName:"Kyon", timestamp:"4:26",filePath:"hindisongs/2.mp3"},
    {songName:"Phir Le Aya Dil", timestamp:"4:45",filePath:"hindisongs/3.mp3"},
    {songName:"Tera Mujhse Hai Pehle Ka", timestamp:"4:13 ",filePath:"hindisongs/4.mp3"},
    {songName:"Chalte Chalte Yun Hi Koi", timestamp:"5:54",filePath:"hindisongs/5.mp3"},
    {songName:"Tu Jaane Na", timestamp:"5:37",filePath:"hindisongs/6.mp3"},
    {songName:"Tera Yaar Hu Main", timestamp:"0:34",filePath:"hindisongs/7.mp3"},
    {songName:"Tum Tak", timestamp:"5:05",filePath:"hindisongs/8.mp3"},
    {songName:"Mitwa", timestamp:"6:00",filePath:"hindisongs/9.mp3"},
    {songName:"Yeh Sham Mastani", timestamp:"4:41",filePath:"hindisongs/10.mp3"},
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
    audioElement.src=`hindisongs/${songIndex+1}.mp3`;
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
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`hindisongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-regular');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
 })
 document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`hindisongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-regular');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
 })