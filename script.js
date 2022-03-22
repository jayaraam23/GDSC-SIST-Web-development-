function themetoggle()  {
    let curr_stylesheet = document.getElementById("dark");
if (curr_stylesheet.href.match("Style.css")) {
    curr_stylesheet.href = "lightmode.css";
}
else {
    curr_stylesheet.href = "Style.css";
}
} 