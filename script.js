function togglecompose() {
    console.log("toggling")
    const modal = document.querySelector(".modal");
    console.log(modal.style.display);
    modal.style.display = modal.style.display === "none" ? "block" : "none";
}
togglecompose()


