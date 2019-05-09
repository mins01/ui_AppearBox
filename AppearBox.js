var AppearBox = (function(){
	var AppearBox = function(target){
		this.target = target;
		this.content = target.querySelector('.appear-box-content');
		this.tc = new TimerChain();
	};
	var prt = AppearBox.prototype;
	prt.target = null;
	prt.content = null;
	prt.tc = null;
	prt.contentHtml = function(html){
		if(this.content) this.content.innerHTML = html;
		return this;
	}
	prt.contentText = function(text){
		if(this.content) this.content.innerText = text;
		return this;
	}
	prt.showAnmation = 'bounceIn';
	prt.show = function(delay){
		if(delay==null) delay = 0;
		var thisC = this;
		
		this.tc.push(function(){
			thisC.target.classList.add('on');
			thisC.target.classList.add('animated');
			thisC.target.classList.add(thisC.showAnmation);
			// $(thisC.target).addClass('on');
			// $(thisC.target).addClass('animated '+thisC.showAnmation);
		},delay)
		.push(function(){
			thisC.target.classList.remove('animated');
			thisC.target.classList.remove(thisC.showAnmation);
		},1000).start()
		
		return this
	}	
	prt.hideAnmation = 'bounceOut';
	prt.hide = function(delay){
		if(delay==null) delay = 0;
		var thisC = this;
		this.tc.push(function(){
			thisC.target.classList.add('animated');
			thisC.target.classList.add(thisC.hideAnmation);
		},delay)
		.push(function(){
			thisC.target.classList.remove('on');
			thisC.target.classList.remove('animated');
			thisC.target.classList.remove(thisC.hideAnmation);			
		},1000).start();
		return this
	}
	prt.add = function(fn,delay){
		if(delay==null) delay = 0;
		var thisC = this;
		
		this.tc.push(function(){
			fn()
		},delay)
		.start()
		return this
	}
	prt.clear = function(){
		this.tc.clear();
		return this
	}
	
	return AppearBox;
})()