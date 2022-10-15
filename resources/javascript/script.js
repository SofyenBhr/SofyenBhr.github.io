document.querySelector("#burger-menu").addEventListener("click", () => {
    if (document.querySelector("#menu").style.display === "block") {
        document.querySelector("#menu").style.display = "none";
    } else {
        document.querySelector("#menu").style.display = "block";
    }
});