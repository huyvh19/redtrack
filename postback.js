(function(){
	var readCookie = function (name) {
      var i,
         c,
         ca,
         nameEQ = name + "=";
      ca = document.cookie.split(";");
      for (i = 0; i < ca.length; i++) {
         c = ca[i];
         while (c.charAt(0) == " ") {
            c = c.substring(1, c.length);
         }
         if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
         }
      }
      return "";
   };
   var paramsString = readCookie("rdtrack_ck");
   var cachebuster = Math.round(new Date().getTime() / 1000);
   console.log(paramsString);
	if (paramsString) {
		var img = document.createElement("img");
		img.setAttribute('id', cachebuster)
		img.setAttribute("src", `https://ygqvv.rdtk.io/postback${paramsString}&rtkck=${cachebuster}&format=img`);
		document.body.appendChild(img);
	}
})();