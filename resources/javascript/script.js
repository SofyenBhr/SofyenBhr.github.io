document.querySelector("#burger-menu").addEventListener("click", () => {
    if (document.querySelector("#menu").style.display === "none") {
        document.querySelector("#menu").style.display = "block";
        document.querySelector("#banner-overlay").style.top = "13rem";
    } else {
        document.querySelector("#menu").style.display = "none";
        document.querySelector("#banner-overlay").style.top = "3.4rem";
    }
});