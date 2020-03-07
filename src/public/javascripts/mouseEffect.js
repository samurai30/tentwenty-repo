var follower = document.getElementById('follower');
var circle = document.getElementById('circle2');

const mouseX = (event) =>{
    return event.clientX;
}

const mouseY = (event) =>{
    return event.clientY;
}

const positionElement = (event) =>{
    let mouse = {
        x: mouseX(event),
    y: mouseY(event)
}
console.log(mouse.y);

follower.style.top = mouse.y+'px';
follower.style.left = mouse.x+'px';

}

var timer = false;

window.onmousemove = init = (event) =>{
    let _event = event;
timer = setTimeout(positionElement(_event),1);
}

$('.hover-mouse').on('mouseover',() =>{
    circle.style.boxShadow = "0px 0px 0px 40px #3580f0";
    circle.style.opacity = 0.5;
});

$('.hover-mouse').on('mouseout',() =>{
    circle.style.boxShadow = "0px 0px 0px 0px #3580f0";
    circle.style.opacity = 1;
});
