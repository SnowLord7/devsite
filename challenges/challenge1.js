var onLoad = setInterval(function() {
	try {
		if (CodeMirror) {
			init();
			clearInterval(onLoad);
		}
	} catch(e) {}
}, 10);

function init() {
	var codeBox1 = CodeMirror.fromTextArea(document.getElementById("problem1a"), {
		mode: "htmlmixed",
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
	
	var codeBox2 = CodeMirror.fromTextArea(document.getElementById("problem1b"), {
		mode: "htmlmixed",
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
	
	var codeBox3 = CodeMirror.fromTextArea(document.getElementById("problem2a"), {
		mode: "htmlmixed",
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
	
	var codeBox4 = CodeMirror.fromTextArea(document.getElementById("problem2b"), {
		mode: "htmlmixed",
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
	
	var codeBox5 = CodeMirror.fromTextArea(document.getElementById("problem3a"), {
		mode: "htmlmixed",
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

	var codeBox6 = CodeMirror.fromTextArea(document.getElementById("problem3b"), {
		mode: "htmlmixed",
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

function submit() {
	var score = 0;
	if (document.getElementById("question1a").checked) {
		score += 33;
	}
	if (document.getElementById("question2a").checked) {
		score += 33;
	}
	if (document.getElementById("question3b").checked) {
		score += 33;
	}
	if (score == 99) {
		score = 100;
	}
	document.getElementById("result").innerHTML = "You scored " + score + "%!";
}