let i = 0;                          //  set your counter to 1
let i_end = 11;
let time = 0;
let time_step = 0.3;
tend = 3;
let timeout = 300;

let promise = timeLoop(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 2300);
});

promise.then(
    result => alert(result), // выведет "done!" через одну секунду
    error => alert(error) // не будет запущена
);

async function timeLoop() {                 //  create a loop function

    setTimeout(function () {   //  call a 0.3s setTimeout when the loop is called
        //console.log('hello');       //  your code here
        time = time + time_step;
        if (i < i_end ) { //  if the counter < 11, call the loop function
            i++;                      // increment the counter
            console.log('i = '+i
                +'  time = ' + time);
            timeLoop();               //  ..  again which will trigger another
        }                             //  ..  setTimeout()

    }, timeout)

};

async function nextLoop() {                 //  create a loop function
    console.log('j = ');
    i=10;
    setTimeout(function () {
        //console.log('hello');       //  your code here
        if (i>0 ) {       //  decrement i and call myLoop again if i > 0
            i--;
            console.log('j = ' + i
                + " time = " + time);
            nextLoop(i,time);
        }
    }, timeout)
};

// start the loop
timeLoop();
nextLoop(i,time);
