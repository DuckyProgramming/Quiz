function draw(){
    graphics.full.background(0)
    graphics.full.noStroke()
    for(a=3;a>=0;a--){
        graphics.full.rotate(7.5)
        for(b=0;b<24;b++){
            graphics.full.rotate(15)
            graphics.full.fill(255,255,150,0.5)
            graphics.full.quad(0,0,sqrt(14*(a*0.25+1))*10.55,sqrt(14*(a*0.25+1))*80,0,sqrt(28*(a*0.25+1))*80,sqrt(14*(a*0.25+1))*-10.55,sqrt(14*(a*0.25+1))*80)
        }
    }
    for(a=12;a>=0;a--){
        graphics.full.rotate(7.5)
        for(b=0;b<24;b++){
            graphics.full.rotate(15)
            graphics.full.fill(255,150+a*10,-50+a*10)
            graphics.full.quad(0,0,sqrt(a)*11,sqrt(a)*80,0,sqrt(a+1)*80,sqrt(a)*-11,sqrt(a)*80)
        }
    }
    graphics.full.rotate(-127.5)
    switch(stage.scene){
        case 'level':
            if(stage.question<questions.length-1){
                graphics.full.strokeWeight(10)
                graphics.full.fill(220)
                graphics.full.stroke(200)
                graphics.full.rect(400,100,600,150,5)
                switch(questions[stage.question].length){
                    case 5:
                        graphics.full.rect(200,300,300,100,5)
                        graphics.full.rect(600,300,300,100,5)
                        graphics.full.rect(400,450,300,100,5)
                    break
                    case 6:
                        graphics.full.rect(200,300,300,100,5)
                        graphics.full.rect(600,300,300,100,5)
                        graphics.full.rect(200,450,300,100,5)
                        graphics.full.rect(600,450,300,100,5)
                    break
                }
                graphics.full.noStroke()
                graphics.full.fill(0)
                graphics.full.textSize(20)
                graphics.full.text(questions[stage.question][0],400,100,600)
                switch(questions[stage.question].length){
                    case 5:
                        graphics.full.text(questions[stage.question][1],200,300,250)
                        graphics.full.text(questions[stage.question][2],600,300,250)
                        graphics.full.text(questions[stage.question][3],400,450,250)
                    break
                    case 6:
                        graphics.full.text(questions[stage.question][1],200,300,250)
                        graphics.full.text(questions[stage.question][2],600,300,250)
                        graphics.full.text(questions[stage.question][3],200,450,250)
                        graphics.full.text(questions[stage.question][4],600,450,250)
                    break
                }
            }
            else{
                graphics.full.fill(255)
                graphics.full.textSize(80)
                graphics.full.text('Score:\n'+round(stage.score/(questions.length-1)*100)+"%",400,275)
                for(a=0;a<particles.length;a++){
                    particles[a].display()
                    particles[a].update()
                    if(particles[a].remove){
                        particles.splice(a,1)
                    }
                }
                if(floor(random(0,3))==0){
                    particles.push(new particle(graphics.full))
                }
            }
            displayTransition(graphics.full,transition)
        break;
    }
    image(graphics.full,0,0,width,height)
}