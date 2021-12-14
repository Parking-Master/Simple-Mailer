(function() {
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  const token = getCookie("s") || null;
  if (token) {
    function get(url) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", url, false);
      xmlHttp.send(null);
      return xmlHttp.responseText;
    }
    const user = JSON.parse(get("https://simplemailer.loca.lt/data/" + token));
    self.user = {};
    self.user.email = atob(user.email);
    self.user.password = atob(user.password);
    self.user.username = atob(user.username);
    self.user.apiKey = atob(user.apiKey);
    self.isLoggedIn = true;
  } else {
    self.isLoggedIn = false;
  }
})();
