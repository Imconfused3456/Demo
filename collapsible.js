function col(id) {
    toCollapse = document.getElementById(id);
    if (toCollapse.style.display == "none") {
        toCollapse.style.display = "block";
    } else {
        toCollapse.style.display = "none";
    }
}