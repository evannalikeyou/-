//发布表白字数
(function(){
	function GetId(name){
		return document.getElementById(name);
	};
	var wordsize;
	var maxlength = 500;
	GetId("text").addEventListener("click", function(){
		// cleartitle();
		getwordsize();
	}, false);
	function getwordsize(){
		wordsize = GetId("text").value.length;
		setTimeout(function(){
			getwordsize();
			setwordsize();
		}, 100);
	};
	function setwordsize(){
		var maxText = GetId("text").getAttribute("maxlength");
		if(wordsize >= maxlength){ 
			GetId("text").value = GetId("text").value.substring(0,maxlength); 
		}
		GetId("wordsize").innerHTML = wordsize;
	};
})();