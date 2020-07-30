class gold extends BaseClass {
    constructor(x, y){
      super(x,y,200,200);
     this.image = loadImage("sprites/hmm.png");
      this.Visiblity = 200;
      
    }
  
   display(){
     
   // console.log(this.body.speed);
     if(this.body.speed < 15){
      super.display();
     
     
     }

     else{
       World.remove(world, this.body);
       textStyle(ITALIC);
      
       textSize(50);
      text("you did it!!!",1000,100);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 1200, 100);
       pop();
     }
   }
    
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  
  
  
  };