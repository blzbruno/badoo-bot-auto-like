function cclick(){	
	document.getElementsByClassName("js-profile-header-vote-yes")[0].click();
}

var myVarc = setInterval(function(){ cclick() }, 100);
