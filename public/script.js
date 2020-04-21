for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 5; j++) {
        var element = document.createElement("div");
        element.setAttribute("class", "imagePreview");
        element.setAttribute("id", `preview${i}${j}`);
        document.getElementById("photos").appendChild(element);
        var img = document.createElement("img");
        img.setAttribute("src", "");
        img.setAttribute("class", "image");
        img.setAttribute("id", `image${i}${j}`);
        document.getElementById("photos").querySelector(`#preview${i}${j}`).appendChild(img);
        var span = document.createElement("span");
        span.setAttribute("class", "defaultText");
        span.setAttribute("id", `defaultText${i}${j}`);
        document.getElementById("photos").querySelector(`#preview${i}${j}`).appendChild(span);
        var input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("name", "inpFile");
        input.setAttribute("id", `inpFile${i}${j}`);
        input.setAttribute("multiple", "false");
        input.setAttribute("onchange", `readURL(this, ${i}, ${j});`);
        document.getElementById("photos").querySelector(`#preview${i}${j}`).querySelector(`#defaultText${i}${j}`).appendChild(input);
    }
}

function readURL(input, i, j) {
    var inpFile = document.getElementById(`inpFile${i}${j}`)
    var previewContainer = document.getElementById(`preview${i}${j}`);
    var previewImage = previewContainer.querySelector(".image");
    var previewDefaultText = previewContainer.querySelector(".defaultText");

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";

        reader.onload = function () {
            previewImage.setAttribute("src", this.result);
        };

        reader.readAsDataURL(input.files[0]);
    }

    previewImage.addEventListener("click", function () {
        previewImage.setAttribute("src", " ");
        previewDefaultText.style.display = "block"
    });
}