// Getter and Setter

// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = { x: 0, y: 0 };

//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     }
//     this.draw = function() {
//         console.log('draw');
//     };

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         },
//         set: function(value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid location.');
            
//             defaultLocation = value;
//         }
//     });
// }

// const circle = new Circle(10);
// circle.defaultLocation =1;
// circle.draw();


// Stopwatch Excersize

// function Stopwatch() {
//     let startTime, endTime, running, duration = 0;
    
//     this.start = function() {
//         if (running) 
//         throw new Error('Stopwatch has already started.');
        
//         running = true;
//         startTime = new Date();
//     };
    
//     this.stop = function() {
//         if (!running)  
//         throw new Error('Stopwatch is not started.');
        
//         running = false;
//         endTime = new Date();
        
//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         duration += seconds;
//     };

//     this.reset = function() {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     };
    
//     Object.defineProperty(this, 'duration', {
//         get: function() { return duration; }
//     });
// }



// const sw = new Stopwatch();

// Prototype Solutions

function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });

    Object.defineProperty(this, 'startTime', {
        get: function() { return startTime; }
    });

    Object.defineProperty(this, 'endtime', {
        get: function() { return endtime; }
    });

    Object.defineProperty(this, 'running', {
        get: function() { return running; }
    });
    
}
Stopwatch.prototype.start = function() {
    if (this.running) 
    throw new Error('Stopwatch has already started.');
    
    this.running = true;
    this.startTime = new Date();
};

Stopwatch.prototype.stop = function() {
    if (!this.running)  
    throw new Error('Stopwatch is not started.');
    
    this.running = false;
    this.endTime = new Date();
    
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
};

Stopwatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this. duration = 0;
};

const sw = new Stopwatch();