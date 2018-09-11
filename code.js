var postRequests;
var getRequests;
var angleFromCoords;

var onLoad = setInterval(function() {
	try {
		if (CodeMirror) {
			init();
			clearInterval(onLoad);
		}
	} catch(e) {}
}, 10);

function init() {
	var codeBox1 = CodeMirror.fromTextArea(document.getElementById("injectJQ"), {
		mode: "javascript",
		theme: "eclipse",
		readOnly: true,
		lineNumbers: true,
		extraKeys: {
			"F11": function(e) {
				e.setOption("fullScreen", !e.getOption("fullScreen"));
			},
			"Esc": function(e) {
				if (e.getOption("fullScreen")) e.setOption("fullScreen", false);
			}
	}
	});
	
	var codeBox2 = CodeMirror.fromTextArea(document.getElementById("postRequests"), {
		mode: "javascript",
		theme: "eclipse",
		readOnly: true,
		lineNumbers: true,
		extraKeys: {
			"F11": function(e) {
				e.setOption("fullScreen", !e.getOption("fullScreen"));
			},
			"Esc": function(e) {
				if (e.getOption("fullScreen")) e.setOption("fullScreen", false);
			}
		}
	});
	
	var codeBox3 = CodeMirror.fromTextArea(document.getElementById("getRequests"), {
		mode: "javascript",
		theme: "eclipse",
		readOnly: true,
		lineNumbers: true,
		extraKeys: {
			"F11": function(e) {
				e.setOption("fullScreen", !e.getOption("fullScreen"));
			},
			"Esc": function(e) {
				if (e.getOption("fullScreen")) e.setOption("fullScreen", false);
			}
		}
	});
	
	var codeBox4 = CodeMirror.fromTextArea(document.getElementById("angleFromCoords"), {
		mode: "javascript",
		theme: "eclipse",
		readOnly: true,
		lineNumbers: true,
		extraKeys: {
			"F11": function(e) {
				e.setOption("fullScreen", !e.getOption("fullScreen"));
			},
			"Esc": function(e) {
				if (e.getOption("fullScreen")) e.setOption("fullScreen", false);
			}
		}
	});	
	
	var codeBox5 = CodeMirror.fromTextArea(document.getElementById("distanceFromCoords"), {
		mode: "javascript",
		theme: "eclipse",
		readOnly: true,
		lineNumbers: true,
		extraKeys: {
			"F11": function(e) {
				e.setOption("fullScreen", !e.getOption("fullScreen"));
			},
			"Esc": function(e) {
				if (e.getOption("fullScreen")) e.setOption("fullScreen", false);
			}
		}
	});
}