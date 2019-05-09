/**
 * AppearBox
 * http://mins01.com
 * https://github.com/mins01/ui_AppearBox
 * Date : 2019-05-09
 */
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
	prt.contentHtml = function(html,delay){
		if(delay==null) delay = 0;
		var thisC = this;
		this.add(function(){
			if(thisC.content) thisC.content.innerHTML = html;	
		},delay)
		return this;
	}
	prt.contentText = function(text,delay){
		if(delay==null) delay = 0;
		var thisC = this;
		this.add(function(){
			if(thisC.content) thisC.content.innerText = text;	
		},delay)
		return this;
	}
	prt.showAnmation = 'bounceIn';
	prt.show = function(delay){
		if(delay==null) delay = 0;
		var thisC = this;
		
		this.add(function(){
			thisC.box.classList.add('on');
			thisC.fence.classList.add('animated');
			thisC.fence.classList.add(thisC.showAnmation);
		},delay)
		.add(function(){
			thisC.fence.classList.remove('animated');
			thisC.fence.classList.remove(thisC.showAnmation);
		},1000);
		
		return this
	}	
	prt.hideAnmation = 'bounceOut';
	prt.hide = function(delay){
		if(delay==null) delay = 0;
		var thisC = this;
		this.add(function(){
			thisC.fence.classList.add('animated');
			thisC.fence.classList.add(thisC.hideAnmation);
		},delay)
		.add(function(){
			thisC.box.classList.remove('on');
			thisC.fence.classList.remove('animated');
			thisC.fence.classList.remove(thisC.hideAnmation);			
		},1000)
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