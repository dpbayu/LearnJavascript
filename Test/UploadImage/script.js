// Version 1 //
const image_input = document.querySelector('#image_input');
var uploaded_image = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})
// Version 1 //

// Version 2 //
$(".image-box").click(function (event) {
    var previewImg = $(this).children("img");
    $(this)
        .siblings()
        .children("input")
        .trigger("click");
    $(this)
        .siblings()
        .children("input")
        .change(function () {
            var reader = new FileReader();
            reader.onload = function (e) {
                var urll = e.target.result;
                $(previewImg).attr("src", urll);
                previewImg.parent().css("background", "transparent");
                previewImg.show();
                previewImg.siblings("p").hide();
            };
            reader.readAsDataURL(this.files[0]);
        });
});
// Version 2 //