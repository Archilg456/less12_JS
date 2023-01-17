"Use Strict"


document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();
  
    let checkbox = document.getElementById("save");
    if (checkbox.checked) {
      let usernameValue = document.getElementById("usernameField2").value;
      Cookies.set("savedUsername", usernameValue);
    } else {
      Cookies.remove("savedUsername");
    }
  
    event.target.submit();
  });
  
  let savedUsernameValue = Cookies.get("savedUsername");
  
  if (savedUsernameValue) {
    document.getElementById("usernameField2").value = savedUsernameValue;
    document.getElementById("save").checked = true;
  }
  