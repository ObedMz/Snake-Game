var s;
var scal = 15;
var food;

function setup(){
createCanvas(600,600);
s = new sneak();
pickLocation();
frameRate(12);

}

function pickLocation(){
	var cols = floor(width/scal);
	var rows = floor(height/scal);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scal);
	//var c = document.getElementById("defaultCanvas0");
 	//var ctx = c.getContext("2d");
	//ctx.drawImage(img, 1, 1);
}



function draw(){
	background(51);
	if(s.eat(food)){
		pickLocation();
	}
	s.update();
	s.death();
	s.show();
	
	fill(255,0,10);
	rect(food.x,food.y,scal,scal);
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		if(s.tail.length < 1){
			s.dir(0,-1);	
		}
		
		for(var i=0; i < s.tail.length; i++){
			var pos = s.tail[i];
			var d = s.y - pos.y;
			console.log(d);

			 if(d === 0){
				s.dir(0,-1);
			 } else if(d >= 15){
			 	 s.dir(0,1);
			 }
		}

	} else if(keyCode === DOWN_ARROW){

		if(s.tail.length < 1){
		s.dir(0,1);
		}
		
		for(var i=0; i < s.tail.length; i++){
			var pos = s.tail[i];
			var d = s.y - pos.y;
			console.log(d);

			 if(d === 0){
				s.dir(0,1);
			 }
		}
	} else if(keyCode === RIGHT_ARROW){

		if(s.tail.length < 1){
			s.dir(1,0);
		}
		
		for(var i=0; i < s.tail.length; i++){
			var pos = s.tail[i];
			var d = s.x - pos.x;
			console.log(d);

			 if(d === 0){
				s.dir(1,0);
			 }
		}
	} else if(keyCode === LEFT_ARROW){
		if(s.tail.length < 1){
			s.dir(-1,0);
		}
		
		for(var i=0; i < s.tail.length; i++){
			var pos = s.tail[i];
			var d = s.x - pos.x;
			console.log(d);

			 if(d === 0){
				s.dir(-1,0);
			 } else if(d >= 15){
				s.dir(1,0);
			 }
		}
	} 
}