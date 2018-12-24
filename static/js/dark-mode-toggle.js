function set_theme(theme) {
	var el = document.querySelector("html");
    if (theme === "dark" ) { el.className = "dark"; }
    else { 	el.className = "light";                 }
    localStorage.setItem("light-dark", theme);
}

var theme = localStorage.getItem("light-dark");
if (theme) {
	set_theme(theme);
}	

window.onload=function() {
	var button = document.querySelector('.night-mode-button');
	var container = document.querySelector('html');
    button.onclick =  function() {
        if (container.classList.contains('dark')) {
            set_theme('light');
        }
        else {
            set_theme('dark');
        }
	}
}
