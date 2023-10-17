let imgBox = document.getElementById("image_box");
let QRimage = document.getElementById("QR_image");
let QRtext = document.getElementById("QR_text");
let API = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function QRGenerate()
{
    if(QRtext.value.length>0)
    {
    QRimage.src = API + QRtext.value;
    imgBox.classList.add("show-img");
    }else{
        QRtext.classList.add("error");
        setTimeout(()=>{
            QRtext.classList.remove("error");
        },1000);
    }
}