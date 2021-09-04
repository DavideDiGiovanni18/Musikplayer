
var isplaying = Boolean(false);
var nummerStueck =2;
var count=0;
var songs = ["JuiceWrld","Future","Freebeat"];
var images =["logo.PNG","freebeat1.jpg","freebeat1.jpg"];
var sources = ["Cursed.mp3","ok.mp3","freebeat1.mp3"];
var songname =["Cursed","WRLD On Drugs","Freebeat"];
var albumArtist = ["Album2020-Juice WRLD","Album2020-Future","Yt FreeCC"];
var pfad = 'C:\\Users\\david\\Documents\\HTML-stuff\\Projekt\\' ;
var currentsong =1;
var song =document.getElementById(songs[currentsong]);
var imageplay =Boolean(true);
var a = "hidden";


function playmusic() {
    volume();
  if(isplaying){
    imageplay = false;
      song.pause();
        isplaying = Boolean(false);
}else {
  song.play();
  imageplay = true;
  isplaying = Boolean(true);
  setInterval(time,1000);
}
stopAndPlayIcon();
}


function forward() {
  imageplay = false;
  isplaying = Boolean(false);
  nummerStueck++;

  currentsong++;

    song.pause();
    song.currentTime =0;
    song = document.getElementById("Future");

   //song = document.getElementById(song[currentsong]);

    var image = document.getElementById("change");

    image.src = "IMG\\freebeat1.jpg";
    //image.src = "images[currentsong]";

    document.getElementById("lied").innerHTML="WRLD On Drugs";
   //document.getElementById("lied").innerHTML="songname[currentsong]";

    document.getElementById("album").innerHTML="Album2020-Future";
     //document.getElementById("lied").innerHTML="albumArtist[currentsong]";

    document.getElementById("range").value =0;
    stopAndPlayIcon();
    playmusic();

}

function backward() {
  imageplay = false;
isplaying = Boolean(false);
  if(nummerStueck > 1){
    nummerStueck--;
  }
  song.pause();
    song.currentTime =0;
  song = document.getElementById("JuiceWrld");
  var image = document.getElementById("change");
  image.src = "IMG\\logo.PNG";
  document.getElementById("lied").innerHTML="Cursed";
  document.getElementById("album").innerHTML="Album2020-Juice WRLD";
 document.getElementById("range").value =0;
stopAndPlayIcon();
playmusic();
}



function  range(){
  var test = document.getElementById("range");
  song.currentTime= song.duration/100*test.value;
}

function stopAndPlayIcon() {
      var bild = document.getElementById("ControlPlay");
if(imageplay){
  bild.setAttribute("src","IMG\\stop.jpg");
}else{
    bild.setAttribute("src","IMG\\Play.png");
}
}


function time(){
var t =current(song.currentTime+"")

document.getElementById("start").innerHTML =t;

  document.getElementById("la").innerHTML = current(song.duration);

  var result = ((100*song.currentTime)/song.duration);
  document.getElementById("range").value=result;

  if(song.currentTime==song.duration){
    forward();
  }
}

function current(time) {
  var count =0;
time = parseInt(time);
  while(time >59){
    count++;
    time= time - 60;
  }

  time =Math.round(time);
  var ti = time.toString();

  if(ti.length ==1){
     ti = 0+""+ti;
  }

  return  count +":"+ti;
}

function volume(){
  var reglerValue= document.getElementById("r");
 song.volume =   reglerValue.value/10;
 if(reglerValue.value <=0){
   document.getElementById("hhh").src ="IMG\\nosound.png";
 }else {
   document.getElementById("hhh").src ="IMG\\volume.jpg";
 }
}


function test() {
  if(a == "visible"){
    a = "hidden";
    document.getElementById("r").style.visibility="hidden";
  }else {
    a = "visible";
  document.getElementById("r").style.visibility="visible";
}
}


function test1(){
  var images =["IMG/setting1.jpg","IMG/setting2.jpg","IMG/setting3.jpg","IMG/setting4.jpg"]
  document.body.style.backgroundImage = "url('"+images[Math.floor(Math.random()*4)]+"')";
}
