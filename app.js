'use strict';
let totalSecs = [];
//welcome back page 



/////////////// new run function 
let homePage = document.getElementById('homePage');
let createRunPage = document.getElementById('createRunPage');

function newRunPageLoad(){
    homePage.style.display = 'none';
    createRunPage.style.display = 'block';
}

/////////////hide welcome page when new run is clicked
let newRunBtn = document.querySelector('.newRunBtn');
newRunBtn.addEventListener('click', newRunPageLoad);


/////////// generate squares function 
let day = document.querySelector('.day');
            //write function that takes the date from new Date and converts the amount of days into a number
function dayGenerator(){
    for(let i=2; i<=31; i++){
        day.insertAdjacentHTML('afterend', '<div class="day" id=""></div>')
    }
}
dayGenerator();
// on click left button function 

// on click right button function 


// CREATE RUN PAGE

//show runs on screen
let hr = document.querySelector('.hr');
let min = document.getElementById('min');
let sec = document.querySelector('.sec');


let walkBtn = document.querySelector('.walkBtn');
let jogBtn = document.querySelector('.jogBtn');
let runBtn = document.querySelector('.runBtn');

//counter used for knowing which color to use for screen above
let counter = 0;
let totalRun = [];
let run = [];

walkBtn.addEventListener('click', walkConvertInputToReadableTime);
jogBtn.addEventListener('click', jogConvertInputToReadableTime);
runBtn.addEventListener('click', runConvertInputToReadableTime);


let runInterval = document.querySelector('.runInterval' + `${counter}` );

function walkConvertInputToReadableTime(){
    //covert to seconds
    let hrSecs = hr.value * 60 * 60;
    let minSecs = min.value * 60;
    let secSecs = sec.value;
    let totalSecs = hrSecs + minSecs + secSecs;
    totalRun.push('w');
    totalRun.push(totalSecs);
    
    //if the input is more than allowed throw error
    if(hr.value >23 ||min.value >=60 || sec.value >=60) hr.value = alert('not valid input');
    
    runInterval.insertAdjacentHTML('beforebegin', `<div class="runInterval runInterval${counter%6} runIntervalwalk" id="walk${counter}"> ${hr.value}:${min.value}:${sec.value}</div>`);
    counter=counter+1; 
    
    console.log('walk')
    console.log(counter + ' counter')
    console.log(totalRun )
}

function jogConvertInputToReadableTime(){
    //covert to seconds
    let hrSecs = hr.value * 60 * 60;
    let minSecs = min.value * 60;
    let secSecs = sec.value;
    let totalSecs = hrSecs + minSecs + secSecs;
    totalRun.push('j');
    totalRun.push(totalSecs);
    
    //if the input is more than allowed throw error
    if(hr.value >23 ||min.value >=60 || sec.value >=60) hr.value = alert('not valid input');
    
    runInterval.insertAdjacentHTML('afterend', `<div class="runInterval runInterval${counter%6} runIntervalwalk" id="jog${counter}"> ${hr.value}:${min.value}:${sec.value}</div>`);
    counter=counter+1; 
    console.log('jog')
    console.log(counter + ' counter')
    console.log(totalRun )
}


function runConvertInputToReadableTime(){
    //covert to seconds
    let hrSecs = hr.value * 60 * 60;
    let minSecs = min.value * 60;
    let secSecs = sec.value;
    let totalSecs = hrSecs + minSecs + secSecs;
    totalRun.push('r');
    totalRun.push(totalSecs);
    
    //if the input is more than allowed throw error
    if(hr.value >23 ||min.value >=60 || sec.value >=60) hr.value = alert('not valid input');
    runInterval.insertAdjacentHTML('afterend', `<div class="runInterval runInterval${counter%6} runIntervalwalk" id="run${counter}"> ${hr.value}:${min.value}:${sec.value}</div>`);
    counter=counter+1; 
    console.log('run')
    console.log(counter + ' counter')
    
    console.log(totalRun)
}











//on start 

let start = document.querySelector('.startBtn');

start.addEventListener('click', lastSteps);

let w = document.querySelector('.walkingg');
let j = document.querySelector('.joggingg');
let r = document.querySelector('.runningg');

function lastSteps(){
    console.log(totalRun)
    // totalRun[length] = 'fin';
    // totalRun[length + 1] = 'fin';
    // totalRun.reverse();
    totalRun.unshift('none');
  
    console.log(totalRun)
    init();
}

let warmupPage = document.querySelector('.warmupPage');

function init(){
    let runningTotal = 1;
    console.log('init function has been called');
    warmupPage.style.zIndex = 9;

    for(let i=0; i<=totalRun.length; i++){
        console.log(totalRun[i] + 'hello')
        // console.log(totalRun[i][0] + 'ooo')
        if( totalRun[i] === 'w' ){
            w.style.zIndex = 0;
                j.style.zIndex = 1;
                r.style.zIndex = 10;
            runningTotal=parseInt(parseInt(runningTotal)+parseInt(totalRun[i+1]));
            console.log(runningTotal + 'runningTotal')
            setTimeout(function(){
                console.log(1+1, 'walking Timer is complete');
                console.log(9+878);
                warmupPage.style.zIndex = -9;
                w.style.zIndex = 0;
                j.style.zIndex = 1;
                r.style.zIndex = 10;
                }, parseInt(runningTotal*1000));
        }else if ( totalRun[i] === 'j'){
            runningTotal=parseInt(parseInt(runningTotal)+parseInt(totalRun[i+1]));
            console.log(runningTotal + 'runningTotal')
            console.log('jog');
            w.style.zIndex = 0;
                j.style.zIndex = 10;
                r.style.zIndex = 1;
            setTimeout(function(){
                console.log(1+1, 'jogging Timer is complete');
                console.log(9+878);
                warmupPage.style.zIndex = -9;
                w.style.zIndex = 0;
                j.style.zIndex = 10;
                r.style.zIndex = 1;
                }, parseInt(runningTotal*1000));
            
        }else if ( totalRun[i] === 'r'){
            runningTotal=parseInt(parseInt(runningTotal)+parseInt(totalRun[i+1]));
            console.log(runningTotal + 'runningTotal')
            console.log('run');
            w.style.zIndex = 10;
                j.style.zIndex = 1;
                r.style.zIndex = 0;
            setTimeout(function(){
                console.log(1+1, 'walking Timer is complete');
                console.log(9+878);
                warmupPage.style.zIndex = -9;
                w.style.zIndex = 10;
                j.style.zIndex = 1;
                r.style.zIndex = 0;
                }, parseInt(runningTotal*1000));
        }else if(totalRun[i][0] === '0'){
            console.log(totalRun[i] +'jjjjjjjjjjjjj')
           
        }else{
            homePage.style.display = 'block'; 
            homePage.style.zIndex = 10; 
            w.style.zIndex = -2;
            j.style.zIndex = -3;
            r.style.zIndex = -1;
            setTimeout(function(){
                
                console.log('finish');
                homePage.style.display = 'block'; 
                homePage.style.zIndex = 10; 
                w.style.zIndex = -2;
                j.style.zIndex = -3;
                r.style.zIndex = -1;
                }, parseInt(runningTotal*1100));
        }
        
    }
}


