(function () {
   var writeCookie = function (name, value, days) {
      var date, expires;
      if (days) {
         date = new Date();
         date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
         expires = "; expires=" + date.toGMTString();
      } else {
         expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
   };
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
   var getScriptURL = (function () {
      var scripts = document.getElementsByTagName("script");
      var index = scripts.length - 1;
      var myScript = scripts[index];
      return function () {
         return myScript.src;
      };
   })();
   var scriptUrl = new URL(getScriptURL());
   var scriptSearchUrl = scriptUrl.search;
   var paramsString = scriptSearchUrl;
   var urlParams = window.location.search;
   if (paramsString) {
      console.log("paramsString: " + paramsString);
      writeCookie("rdtrack_ck", paramsString, 90);
   } else if (urlParams) {
      console.log("rdtrack_ck: " + urlParams);
      writeCookie("rdtrack_ck", urlParams, 90);
   }
})();
