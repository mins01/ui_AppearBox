var AppearBox = (function(){
	var AppearBox = function(target){
		this.target = target;
		this.tc = new TimerChain();
	};
	var prt = AppearBox.prototype;
	prt.target = null;
	prt.tc = null;
	prt.contentHtml = function(html){
		$(this.target).find('.appear-box-content').html(html)
		return this;
	}
	prt.contentText = function(text){
		$(this.target).find('.appear-box-content').text(text)
		return this;
	}
	prt.showAnmation = 'bounceIn';
	prt.show = function(delay){
		if(delay==null) delay = 0;
		var thisC = this;
		
		this.tc.push(function(){
			$(thisC.target).addClass('on');
			$(thisC.target).addClass('animated '+thisC.showAnmation);
		},delay)
		.push(function(){
			$(thisC.target).removeClass('animated '+thisC.showAnmation);
		},1000).start()
		
		return this
	}	
	prt.hideAnmation = 'bounceOut';
	prt.hide = function(delay){
		if(delay==null) delay = 0;
		var thisC = this;
		this.tc.push(function(){
			$(thisC.target).addClass('animated '+thisC.hideAnmation);	
		},delay)
		.push(function(){
			$(thisC.target).removeClass('animated '+thisC.hideAnmation);
			$(thisC.target).removeClass('on');
			
		},1000).start();
		return this
	}
	prt.addFn = function(fn,delay){
		if(delay==null) delay = 0;
		var thisC = this;
		
		this.tc.push(function(){
			fn()
		},delay)
		.start()
		return this
	}
	
	return AppearBox;
})()