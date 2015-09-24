 $(document).ready(function(){

	function convertFromHex(hex) {
	    var hex = hex.toString();//force conversion
	    var str = '';
	    for (var i = 0; i < hex.length; i += 2)
	        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	    return str;
	}

	function convertToHex(str) {
	    var hex = '';
	    for(var i=0;i<str.length;i++) {
	        hex += ''+str.charCodeAt(i).toString(16);
	    }
	    return hex;
	}


	var input = "Philipe Godoy";
	var hexa_value = convertToHex(input).toString();
	var hexa_colors = hexa_value.match(/.{1,6}/g);
	console.log("hexa_colors ->", hexa_colors);




	for (var i = hexa_colors.length - 1; i >= 0; i--) {	
		var currrent_color = hexa_colors[i];
		if(currrent_color.length === 6){
			$("#results").append("<div class='box-color' style='background-color:#" +  currrent_color + "'></div>");	
		}else {
			$("#results").append("<h1>" + currrent_color + "</h1> <br />");	
		}
		
	};
	

 });

