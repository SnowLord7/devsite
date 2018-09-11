var onLoad = setInterval(function() {
	try {
		if (CodeMirror) {
			init();
			clearInterval(onLoad);
		}
	} catch(e) {}
}, 10);

function init() {
	var delay;
	var codeBox = CodeMirror.fromTextArea(document.getElementById("code"), {
		mode: "htmlmixed",
		theme: "eclipse",
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

	codeBox.on("change", function() {
		clearTimeout(delay);
		delay = setTimeout(updatePreview, 300);
	});
		
	function updatePreview() {
		var previewFrame = document.getElementById('preview');
		var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
		preview.open();
		preview.write(codeBox.getValue());
		preview.close();
	}
	setTimeout(updatePreview, 300);
}