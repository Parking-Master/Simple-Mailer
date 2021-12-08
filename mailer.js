(async function() {
  const i = function() {
    const to = arguments[0];
    const name = (arguments[1] || "Simple Mailer");
    const subject = arguments[2] || "No subject";
    const message = arguments[3] || "<i style=\"color: #444;\">This message has no content</i>";

    return new Promise(function(resolve, reject) {
      fetch("https://simplemailer.loca.lt/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: btoa(String(to)),
          subject: btoa(String(subject)),
          name: btoa(String(name)),
          message: btoa(String(message))
        })
      }).then(data => {
	   if ((data.ok || data.responseText == "OK") && to) {
             resolve();
	   } else {
	     reject("No recipients defined");
	   }
	 });
    });
  };
  Object.defineProperty(self, "email", {
    value: function email() {
      return i(arguments[0], arguments[1], arguments[2], arguments[3]);
    },
    writable: false,
    enumerable: true,
    configurable: false
  });
})();
