// element vars
root = document.getElementsByTagName("html")[0]
button = document.getElementById("color-scheme-selector")

// saving color scheme in local storage
if(localStorage.getItem("current-color-scheme") == "light") {
    root.setAttribute("current-color-scheme", "light");
    button.innerHTML = "DARK MODE";
    localStorage.setItem("current-color-scheme", "light")
}else {
    root.setAttribute("current-color-scheme", "dark");
    button.innerHTML = "LIGHT MODE";
    localStorage.setItem("current-color-scheme", "dark")
}

// changing color theme
button.addEventListener("click", function() {
    if(root.getAttribute("current-color-scheme") == "dark") {
        root.setAttribute("current-color-scheme", "light");
        button.innerHTML = "DARK MODE";
        localStorage.setItem("current-color-scheme", "light")
    }else {
        root.setAttribute("current-color-scheme", "dark");
        button.innerHTML = "LIGHT MODE";
        localStorage.setItem("current-color-scheme", "dark")
    }
})

