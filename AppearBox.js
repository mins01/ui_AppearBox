var AppearBox = (function(){
	var AppearBox = function(box){
		this.box = box;
		this.content = box.querySelector('.appear-box-content');
		this.fence = box.querySelector('.appear-box-fence');
		this.tc = new TimerChain();
	};
	var prt = AppearBox.prototype;
	prt.box = null;
	prt.content = null;
	prt.fence = null;
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
			thisC.box.classList.add('on');
			thisC.fence.classList.add('animated');
			thisC.fence.classList.add(thisC.showAnmation);
		},delay)
		.push(function(){
			thisC.fence.classList.remove('animated');
			thisC.fence.classList.remove(thisC.showAnmation);
		},1000).start()
		
		return this
	}	
	prt.hideAnmation = 'bounceOut';
	prt.hide = function(delay){
		if(delay==null) delay = 0;
		var thisC = this;
		this.tc.push(function(){
			thisC.fence.classList.add('animated');
			thisC.fence.classList.add(thisC.hideAnmation);
		},delay)
		.push(function(){
			thisC.box.classList.remove('on');
			thisC.fence.classList.remove('animated');
			thisC.fence.classList.remove(thisC.hideAnmation);			
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