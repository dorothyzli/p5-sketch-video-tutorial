// sunburst pngs variables (was not able to figure out how to properly make a clean sunburst shape using just code so had to pivot to using pngs)

let sunburst1; 
let sunburst2;
let sunburst3;
let sunburst4;
let sunburst5;
let sunburst6;
let sunburst7;
let sunburst8;
let sunburst9;
let sunburst10;
let sunburst11; 
let sunburst12;
let sunburst13; 
let sunburst14;
let sunburst15;
let sunburst16;
let sunburst17;
let sunburst18;
let sunburst19;
let sunburst20; 

let girl;

// empty array to hold all of my sunburst objects

let bursts = [];

// defining size variables

let size1 = 70;
let size2 = 100;
let size3 = 130;
let size4 = 160;

// audio variables

let audioFriends;
let audioFriends2; 
let audioMom;
let audioSchool;
let audioSummer;
let audioWarmweather;
let audioNomemory;

// data card variables

let card1;
let card2;
let card3;
let card4;
let card5;
let card6;
let card7;
let card8; 
let card9;
let card10; 
let card11; 
let card12;
let card13; 
let card14; 
let card15;
let card16; 
let card17;
let card18; 
let card19;
let card20;

function preload(){
  
  // storing pngs into sunburst variables 
  
  sunburst1 = loadImage("/Sunbursts/Sunburst1.png");
  sunburst2 = loadImage("/Sunbursts/Sunburst2.png");
  sunburst3 = loadImage("/Sunbursts/Sunburst3.png");
  sunburst4 = loadImage("/Sunbursts/Sunburst4.png");
  sunburst5 = loadImage("/Sunbursts/Sunburst5.png");
  sunburst6 = loadImage("/Sunbursts/Sunburst6.png");
  sunburst7 = loadImage("/Sunbursts/Sunburst7.png");
  sunburst8 = loadImage("/Sunbursts/Sunburst8.png");
  sunburst9 = loadImage("/Sunbursts/Sunburst9.png");
  sunburst10 = loadImage("/Sunbursts/Sunburst10.png");
  sunburst11 = loadImage("/Sunbursts/Sunburst11.png");
  sunburst12 = loadImage("/Sunbursts/Sunburst12.png");
  sunburst13 = loadImage("/Sunbursts/Sunburst13.png");
  sunburst14 = loadImage("/Sunbursts/Sunburst14.png");
  sunburst15 = loadImage("/Sunbursts/Sunburst15.png");
  sunburst16 = loadImage("/Sunbursts/Sunburst16.png");
  sunburst17 = loadImage("/Sunbursts/Sunburst17.png");
  sunburst18 = loadImage("/Sunbursts/Sunburst18.png");
  sunburst19 = loadImage("/Sunbursts/Sunburst19.png");
  sunburst20 = loadImage("/Sunbursts/Sunburst20.png");
  
  girl = loadImage("Figure.png");
  
  soundFormats('wav');
  audioFriends = loadSound("audio/friends.wav");
  audioFriends2 = loadSound("audio/friends2.wav");
  audioMom = loadSound("audio/mom.wav");
  audioSchool = loadSound("audio/school.wav");
  audioSummer = loadSound("audio/summers.wav");
  audioWarmweather = loadSound("audio/warmweather.wav");
  audioNomemory = loadSound("audio/nomemory.wav");
  
  card1 = loadImage("cards/card1.png");
  card2 = loadImage("cards/card2.png");
  card3 = loadImage("cards/card3.png");
  card4 = loadImage("cards/card4.png");
  card5 = loadImage("cards/card5.png");
  card6 = loadImage("cards/card6.png");
  card7 = loadImage("cards/card7.png");
  card8 = loadImage("cards/card8.png");
  card9 = loadImage("cards/card9.png");
  card10 = loadImage("cards/card10.png");
  card11 = loadImage("cards/card11.png");
  card12 = loadImage("cards/card12.png");
  card13 = loadImage("cards/card13.png");
  card14 = loadImage("cards/card14.png");
  card15 = loadImage("cards/card15.png");
  card16 = loadImage("cards/card16.png");
  card17 = loadImage("cards/card17.png");
  card18 = loadImage("cards/card18.png");
  card19 = loadImage("cards/card19.png");
  card20 = loadImage("cards/card20.png");
  
}



function setup() {
  
  // size of browser 
  
  createCanvas(windowWidth, windowHeight);
  
  windowResized(); // makes sure that my sunburst objects are created and displayed right away without having to resize canvas
  
}



// sunburst arrays and loop in windowResized so new objects can be created every time the window is resized

function windowResized() {

// runs whenever browser changes size and makes sure canvas is updated without stretching
  
  resizeCanvas(windowWidth, windowHeight); 
  
  bursts = []; // reset by deleting old sunbursts and avoiding overlapping/duplicating sunbursts every time i resize the canvas/browser
  
// array to hold all of my sunburst images
  
  let sunburst = [ 
    
sunburst1, sunburst2, sunburst3, sunburst4, sunburst5, sunburst6, sunburst7, sunburst8, sunburst9, sunburst10, sunburst11, sunburst12, sunburst13, sunburst14, sunburst15, sunburst16, sunburst17, sunburst18, sunburst19, sunburst20
    
]; 

// array to match sunburst size categories to each individual sunburst image/object
  
   let sunburstSizes = [
   
size1, size3, size4, size3, size2, size1, size2, size3, size4, size3, size3, size2, size3, size1, size1, size3, size1, size3, size1, size2
   
 ];
  
   let sunburstAudios = [
     
audioFriends, audioMom, audioWarmweather, audioSchool, audioNomemory, audioNomemory, audioFriends, audioNomemory, audioSummer, audioFriends2, audioSummer, audioSummer, audioNomemory, audioFriends2, audioWarmweather, audioSchool, audioMom, audioSummer, audioFriends, audioFriends

   ]
   
   let sunburstCards = [
     
card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20
     
   ]
  
// loop pattern where it starts counting from 0 and keeps going until the end of te array is reached. makes sure to add one each time. sunburst.length tells us how many items are in the array which is 20 here. essentially from 0 to 19, create one complete interactive object
  
  for(let i = 0; i < sunburst.length; i++) {
    
    let img = sunburst[i]; // get the image at position i
    let s = sunburstSizes[i]; // get matching size
    let a = sunburstAudios[i]; // get matching audio 
    let c = sunburstCards[i]; // get matching data card
    
// creating the object/sunbursts by calling class constructor(img, size, audio, card). adding push means add new Sunburst object into the bursts array. passes audio and size in
    
    bursts.push(new Sunburst(img, s, a, c));
    
  }
}



function draw() {
  background(255, 244, 240);
  
   imageMode(CENTER); 
  
   let w = 500; // new width for the girl image
  
// to make sure image doesn't squish, the newHeight = newWidth * originalHeight / originalWidth
  
   let h = w * girl.height / girl.width; 
  
   image(girl, width/2, height/2, w, h); // draws the girl at the center of the screen
  
// loop that goes through every object in my bursts array and run its behaviors without having to manually write each behavior for every object...
  
   for(let b of bursts) { 
    
    b.display(); // draws sunbursts
    b.handleAudio(); // check hover sound
    b.displayCard(); // draws data card if open/clicked
    b.motion(); // add floating motion 

  }
}



class Sunburst { // the recipe to my cookies: the sunbursts, defining what a sunburst is!
  
  constructor(img, size, audio, card) {

//properties of each object 
    
    this.img = img;
    this.size = size; // each sunburst gets own size from array 
    this.audio = audio; // stores audio inside object 
    this.card = card; // stores data card inside the object
    this.isPlaying = false; // remember if already playing
    this.isOpen = false; // remember if data card is open or not
    this.floatOffset = random(1000); // what point of the wave the motion starts at
    this.floatSpeed = random(0.01, 0.005); // how fast it moves
    this.floatAmount = random(4,12); // how far up/down it moves
    
// establishes the girl is dead center of canvas
    
    let centerX = width/2;
    let centerY = height/2;
    
    let safeFromGirl = 320; // makes sure that sunbursts do not come that many pixels near the girl
    let safeFromBursts = 40; // makes sure that sunbursts do not come that many pixels near other sunbursts, avoid overlap
    
    let goodSpot = false; // did we find a good location?
    let attempts = 0; // how many attempts did we try to find a good location?
    
// search until successful situation where a while loop should be used instead of a for loop because we don't know how many attempts will take to get the perfect position. this tells the loop to keep running while we haven't found a good spot yet and we haven't tried more than 1000 times. ! means not and flips the boolean value. && operator makes sure both conditions have to be true for the loop to run
    
    while (!goodSpot && attempts < 1000) {

// each time we enter the loop, add 1 to the counter so the loop will stop running at 1000 attempts
      
    attempts++;

// random positions for each sunburst, divide half to make sure they don't go off screen
      
    let x = random(this.size/2, width - this.size/2);
    let y = random(this.size/2, height - this.size/2);
      
    goodSpot = true;
      
// checks the distance of the random point of sunburst to the girl
      
    let dGirl = dist(x, y, centerX, centerY);
    
// if sunburst is in the girl's bubble, reject it and skip the rest of the loop and try a brand new position. continue makes sure if the condition is false, then go back to the beginning of the loop and try again for a new position
      
    if(dGirl < safeFromGirl) {
      goodSpot = false;
      continue;
    }
      
// look at every sunburst that was created
      
    for(let otherBursts of bursts) { 
      
        let d = dist(x, y, otherBursts.x, otherBursts.y); // compare distance between the already existing sunburst position to the new position
      
// how far apart we must be to not touch. (the radius of sunburst + the radius of already existing sunburst) + extra padding. divide the diameter in half so they won't overlap
      
        let spaceGap = (this.size + otherBursts.size) / 2 + safeFromBursts;
      
// if too close, reject this spot
      
        if(d < spaceGap) {
          goodSpot = false;
          break;
          
        }
      }

// if position passes all the tests, then the position is saved inside the object
      
      if (goodSpot) {
        this.x = x;
        this.y = y;
        
      }
    }
  }
  
  
  
// draws the sunbursts
  
  display() {
    
   image(this.img, this.x, this.y, this.size, this.size);
    
  } 
  
  

// motion logic 
  
  motion() {
    
    this.y += sin(frameCount * this.floatSpeed + this.floatOffset) * 0.03;
    
  }
  
// hover check function 
  
  isHovered() {
    
    let d = dist(mouseX, mouseY, this.x, this.y);
    
// divide this.size by half because it's measuring center of image to edge
    
    if(d < this.size / 2) { 
      return true; // this will allow the code to run 
    } else {
      return false;
    }
  }
  
  
  
// audio logic

  handleAudio(){

// makes sure that if the audio does not exist, to exit the function so nothing else will run
    
  if(!this.audio) return;

  if(this.isHovered()) {

    if (!this.isPlaying) {
      this.audio.setVolume(0);
      this.audio.loop();
      this.audio.amp(0.6, 1.5); // ramps the audio from 0 to 0.6 over 1.5 seconds, creating a smooth fade in effect
      this.isPlaying = true;
    }

// if mouse is not hovering
    
  } else {
     
    if(this.isPlaying) {
    this.audio.amp(0, 1.2); // fade out the audio
    
// setTimeout is a function that delays the code for a certain number of milliseconds and stops the audio completely so it won't loop forever
      
    setTimeout(() => {
    this.audio.stop(); 
    }, 1200); // 1200 ms equates to 1.2 seconds (fade out)
                }
    this.isPlaying = false;
    }
  }
  
  
  
// data card logic
  
   isClicked() {
     
     let d = dist(mouseX, mouseY, this.x, this.y);
     return d < this.size/2; // use return here to tell rest of the code if the sunburst was clicked or not
     
   }
  
  
  
   displayCard() {
     
// stops function if the card is not opened or if there's no image
     
     if(!this.isOpen || !this.card) return;
     
     push();
     
     imageMode(CENTER);
     
     let w = 380;
     let h = w * this.card.height / this.card.width;
     
     
     image(this.card, width/2, height/2, w, h);
     
     pop();
     
   }
}



function mousePressed() {
  
    userStartAudio();

    let clickedOnAny = false;

    for (let b of bursts) {
    if (b.isClicked()) { // b represents the current sunburst in the loop
      b.isOpen = true;
      clickedOnAny = true;
    }
  }

// if clicked empty space, close the card
  
    if (!clickedOnAny) {
    for (let b of bursts) {
      b.isOpen = false;
    }
  }
}