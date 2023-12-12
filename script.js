const baslik = document.getElementById('baslik')
const icerik = document.getElementById('icerik')

const inpbaslik = document.getElementById('inpbaslik').textContent
const inpicerik = document.getElementById('inpicerik').textContent

const btngonder = document.getElementById('btn-gonder')

btngonder.addEventListener("click",btngonder1)

function btngonder1(){
const inpbaslik = document.getElementById('inpbaslik')

document.getElementById('baslik').innerText = inpbaslik.innerText;



  console.log(baslik.innerHTML);
  console.log(icerik.innerHTML);
}

