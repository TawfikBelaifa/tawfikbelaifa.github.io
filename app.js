
const test = document.querySelector('.front-contain') 
test.addEventListener("mouseover", function(e) {
    time = setTimeout(function(){
        const textAnim = document.querySelector('.Bref-presentation');
        new Typewriter(textAnim, {
            deleteSpeed: 5
            })
        .changeDelay(10)
        .typeString("At <strong>ASWO</strong>, with great pleasure, I will participate in their <strong>development of</strong> ")
        .pauseFor(300)
        .typeString('<strong class="redWord">WMS software</strong>, ')
        .pause(1000)
        .typeString('<strong class="redWord">mobile application (Scanners, Ipods)</strong>')
        .pause(1000)
        .typeString(' dedicated to their logistics ')
        .pause(1000)
        .typeString('but I will also participate in <br/>')
        .pause(1000)
        .typeString('<strong class="redWord">the agile implementation ...<strong>')
        .start()

    }, 2500);
})


