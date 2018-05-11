function cclick(){	
	document.getElementsByClassName("b-link js-profile-header-vote")[0].click();
}

var myVarc = setInterval(function(){ cclick() }, 100);
