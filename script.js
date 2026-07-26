const screen = document.getElementById("screen");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles=[];

document.body.addEventListener("click",()=>{

    screen.classList.add("active");

    for(let i=0;i<120;i++){

        particles.push({
            x:innerWidth/2,
            y:innerHeight/2,
            vx:(Math.random()-0.5)*10,
            vy:(Math.random()-0.5)*10,
            life:100
        });

    }

    animate();
});


function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,i)=>{

        p.x+=p.vx;
        p.y+=p.vy;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x,p.y,3,0,Math.PI*2);
        ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
        ctx.fill();

        if(p.life<=0)
            particles.splice(i,1);

    });

    if(particles.length)
        requestAnimationFrame(animate);
}