function changeColorImg() {
    const img = document.getElementById("blacksmithImage");
    img.style.border = img.style.border === "none" ? "2px solid red" : "none";
}

function selectedStickers() {
    const text = document.getElementById("selectedStickers");
    const sticker1 = Number(document.getElementById("sticker1").value);
    const sticker2 = Number(document.getElementById("sticker2").value);
    const sticker3 = Number(document.getElementById("sticker3").value);

    const total = sticker1 + sticker2 + sticker3;
    const total2= 10 - total  ;
    text.innerHTML = total <= 10
        ? `Llevas un total de: ${total} stickers. Te faltan ${total2}, para completar los 10.`
        : `Llevas en total: ${total} stickers, solo puedes llevar 10 :(`;
}

function validatePassword() {
    const res = document.getElementById("resValPass");
    const value1 = document.getElementById("selectPsw1").value;
    const value2 = document.getElementById("selectPsw2").value;
    const value3 = document.getElementById("selectPsw3").value;

    const password = value1 + value2 + value3;

    if (password === "911") {
        res.style.color = "green"
        res.innerHTML = "La contraseña 1 es correcta &#128079";
    } else if (password === "714") {
        res.style.color = "green"
        res.innerHTML = "La contraseña 2 es correcta &#128079";
    } else {
        res.style.color = "red"
        res.innerHTML = "La contraseña NO es correcta &#128542";
    }
}
