var bgImg;
var cat,catImg2,catImg3,catImg4;
var mouse, mouseImg2,mouseImg3,mouseImg4;


function preload() {
    //carregue as imagens aqui

    bgImg = loadImage("images/garden.png");

    cat = loadImage("images/cat1.png");

    mouse = loadImage("images/mouse1.png");

    catImg2 = loadImage("images/cat2.png");

    mouseImg2 = loadImage("images/mouse2.png");

    catImg3 = loadImage("images/cat3.png");

    mouseImg3 = loadImage ("images/mouse3.png");

    catImg4 = loadImage ("images/cat4.png");

    mouseImg4 = loadImage ("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui

    cat = createSprite (870, 600);
    cat.addAnimation ("gatoSentando", catImg2);
    cat.scale = 0.2;

    mouse = createSprite (50,600);
    mouse.addAnimation ("ratoFeliz", mouseImg2);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("últimaImagemGato", catImg3);
        cat.changeAmimation("últimaImagemGato");
        cat.x = 300;
        cat.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if (keyCode === LEFT_ARROW){
    mouse.addAnimation("ratoProvocando", mouseImg2);
    mouse.changeAnimation("ratoProvocando");
    mouse.frameDelay = 25;

    cat.velocityX = -5

  }


}
