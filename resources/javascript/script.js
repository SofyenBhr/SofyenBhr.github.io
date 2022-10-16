document.querySelector("#burger-menu").addEventListener("click", () => {
    if (document.querySelector("#menu").style.display === "none") {
        document.querySelector("#menu").style.display = "block";
        document.querySelector("#banner-overlay").style.top = "209px";
    } else {
        document.querySelector("#menu").style.display = "none";
        document.querySelector("#banner-overlay").style.top = "54px";
    }
});