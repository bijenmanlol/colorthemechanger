// elements var
root = document.getElementsByTagName("html")[0];
head = document.getElementsByTagName("head")[0];

// adding stylesheet, attribute and button
head += '<link rel="stylesheet" href="https://bijenmanlol.github.io/colorthemechanger/src/style.css" type="text/css">';
head.setAttribute("current-color-scheme", "light")
root = '<button id="color-scheme-selector">LIGHT MODE</button>' + root;

// element var
root = document.getElementsByTagName("html")[0];

// saving color scheme in local storage
if(localStorage.getItem("current-color-scheme") == "light") {
    root.setAttribute("current-color-scheme", "light");
    button.innerHTML = "DARK MODE";
    localStorage.setItem("current-color-scheme", "light");
}else {
    root.setAttribute("current-color-scheme", "dark");
    button.innerHTML = "LIGHT MODE";
    localStorage.setItem("current-color-scheme", "dark");
}

// changing color theme
button.addEventListener("click", function() {
    if(root.getAttribute("current-color-scheme") == "dark") {
        root.setAttribute("current-color-scheme", "light");
        button.innerHTML = "DARK MODE";
        localStorage.setItem("current-color-scheme", "light");
    }else {
        root.setAttribute("current-color-scheme", "dark");
        button.innerHTML = "LIGHT MODE";
        localStorage.setItem("current-color-scheme", "dark");
    }
})

