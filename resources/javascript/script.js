document.querySelector("#burger-menu").addEventListener("click", () => {
    if (document.querySelector("#menu").style.display === "none") {
        document.querySelector("#menu").style.display = "block";
        document.querySelector("#banner-overlay").style.top = "209px";
        document.querySelector("#banner").style.position = "relative";
        document.querySelector("#banner").style.top = "2px";
    } else {
        document.querySelector("#menu").style.display = "none";
        document.querySelector("#banner-overlay").style.top = "54px";
    }
});