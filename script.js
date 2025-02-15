let qrcode = new QRCode(
    document.querySelector(".qrcode")
);

qrcode.makeCode(" ");

function generateQR(){
    if(document.querySelector("input").value === "" || document.querySelector("input").value === " "){
        alert("Please enter a valid URL");
    }else{
        qrcode.makeCode(document.querySelector("input").value);
    }
}