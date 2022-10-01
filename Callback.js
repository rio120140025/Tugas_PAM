function nama() {
    console.log('Rio Prasetyo')
}

function salam(callback) {
    console.log('Nama Saya')
    callback()
}

salam(nama)