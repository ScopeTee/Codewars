console.log('line 1')
// alert ('line 2')

let inputt = document.getElementById("input")

document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('spam').innerText = 'hello'
    document.getElementById('put').innerText = 'hello'

    console.log(inputt.value)

})