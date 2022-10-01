function outerFunction() {
    const nama = 'Rio Prasetyo'

    function innerFunction() {
        console.log(nama)
    }
    innerFunction()
}
outerFunction()