var onLoad = setInterval(function() {
	try {
		if (CodeMirror) {
			init();
			clearInterval(onLoad);
		}
	} catch(e) {}
}, 10);

function init() {
	var acc = document.getElementsByClassName("accordion");
	for (var i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight){
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	}
}