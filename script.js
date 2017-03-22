function startUp() {
	/*if (document.addEventListener) { // IE >= 9; other browsers
		document.addEventListener('contextmenu', function(e) {
			alert("You've tried to open context menu"); //here you draw your own menu
			e.preventDefault();
		}, false);
	} else { // IE < 9
		document.attachEvent('oncontextmenu', function() {
			alert("You've tried to open context menu");
			window.event.returnValue = false;
		});
	}*/
}

function myFunction() {
	var x = document.getElementById("navbarCollapsed");
	if (x.className.indexOf("w3-show") == -1)
		x.className += " w3-show";
	else
		x.className = x.className.replace(" w3-show", "");
}

function toggleLogin() {
	var x = document.getElementById("loginDiv");
	var header = document.getElementById("header");
	if (x.style.maxHeight === "180px") {
		x.style.maxHeight = "0px";
		header.style.marginTop = "50px";
	}
	else {
		x.style.maxHeight = "180px";
		header.style.marginTop = "230px";
	}
}

window.onresize = function() {
	mtv_extra_padding();
}

window.onload = function() {
	mtv_extra_padding();
}

function mtv_extra_padding() {
	elems = document.getElementsByClassName("mtv-extra-padding");
	if (window.innerWidth > 995) {
		for (i = 0; i < elems.length; i++) {
			elems[i].style.paddingLeft += 50;
			elems[i].style.paddingRight += 50;
		}
	} else {
		for (i = 0; i < elems.length; i++) {
			elems[i].style.paddingLeft -= 50;
			elems[i].style.paddingRight -= 50;
		}
	}
}

var nrTopics = 9;
function nextTopic(id, nextActive) {	
	for (i = 1; i <= nrTopics; i++) {
		document.getElementById("topic"+i).style.display = "none";
		document.getElementById("topic"+i).className = document.getElementById("topic"+i).className.replace(" active", "");
	}
		
	document.getElementById("topic"+id).style.display = "block";
	document.getElementById("topic"+id).className += " active";
	imgs = document.getElementsByClassName("mtv-image-list-img");
	for (i = 0; i < imgs.length; i++)
		imgs[i].className = imgs[i].className.replace(" active", "");
	nextActive.className += " active";
}