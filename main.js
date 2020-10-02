
//kita buat sebuah fungsi yang akan 
//memunculkan MODAL

const showModal = () => {

    //kita ambil element yang akan di SHOW
    let modal = document.querySelector('.modalMenu')

    //kita atus STYLE dari element tersebut
    //jadikan dia terlihat
    modal.style.display = 'flex'

}

//kita buat fungsi untuk hide element
const hideModal = () => {
    //kita ambil element yang akan di SHOW
    let modal = document.querySelector('.modalMenu')

    //kita atus STYLE dari element tersebut
    //jadikan dia tersembunyi
    modal.style.display = 'none'
}
// masukan gambar di showcase
//kita ambil dulu elemnt yang kita inginkan


let showcase = document.getElementById('wrapper_showcase')
let nama = 'jonathan'
//KITA INJECT ELEMENTNYA DENGAN SYNTAX HTML
// showcase.innerHTML += `

// <img src="https://picsum.photos/seed/24/300"alt="gambar no 24"/>


// `

for (var i = 0; i < 42; i++) {
    showcase.innerHTML += `
    <img src="https://picsum.photos/seed/${43112 + i}/200"alt='gambar ke ${i}'/>
    
    `
}