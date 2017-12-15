(function(){

	var v = "1.3.2";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "//ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
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
        jQuery.getJSON('https://api.github.com/repos/musescore/MuseScore/commits?callback=?', function(data) {
            jQuery.each(data, function(key, val) { 
                if(val.length > 0) 
                    jQuery('textarea:focus').val( jQuery('textarea:focus').val()+'github-musescore-MuseScore-'+val[0].sha.substr(0, 10) );
            });
        });
		})();
	}

})();
