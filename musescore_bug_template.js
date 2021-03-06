(function(){

	var v = "1.3.2";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
        $.getJSON('https://api.github.com/repos/musescore/MuseScore/commits?callback=?', function(data) {
            $.each(data, function(key, val) { 
                if (key != 'data') 
                	return;
                var sha = "";
                if(val.length > 0) 
                	sha = 'github-musescore-MuseScore-'+val[0].sha.substr(0, 10);
               	var text = "MuseScore " + sha + "\n\n <ol>\n<li></li>\n<li></li>\n<li></li>\n<li></li>\n</ol>\n\n";
                $('textarea:focus').val( $('textarea:focus').val()+ text );
            });
        });
		})();
	}

})();
