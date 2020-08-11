function sneak(){
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
	
	this.dir = function(x,y){
		this.xspeed = x;
		this.yspeed = y;
	}


	this.update = function(){
		if(this.total === this.tail.length){
			for(var i=0; i < this.tail.length-1;i++){
				this.tail[i] = this.tail[i+1];
			}

		}
		fill(255);
		this.tail[this.total-1] = createVector(this.x,this.y);

		this.x = this.x + this.xspeed*scal;
		this.y = this.y + this.yspeed*scal;

		this.x = constrain(this.x, 0, width-scal);
		this.y = constrain(this.y, 0, height-scal);
	} 

	this.show = function(){
		fill(2555);
		for(var i=0;i < this.tail.length; i++){
			rect(this.tail[i].x,this.tail[i].y,scal, scal);
		}

		
		rect(this.x, this.y,scal,scal);
	}

	this.eat = function(pos){
		var d = dist(this.x, this.y, pos.x, pos.y);
		if(d < 1){
			this.total++;
			return true;
		} else{
			return false;
		}

	}
	this.death = function(){
		for(var i=0; i < this.tail.length; i++){

			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if(d < 1){
				this.total = 0;
				this.tail = [];
			}
		}
	}
	
}