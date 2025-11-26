let inputvalue = document.getElementById('input-box')

let button = document.querySelectorAll('button')

let result = ""

let buttonArr = Array.from(button)

buttonArr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            result = eval(result)
            inputvalue.value = result
        } else if (e.target.innerHTML == "AC") {
            result = ""
            inputvalue.value = result
        }
        else if (e.target.innerHTML == "DEL") {
            result = result.substring(0, result.length - 1)
            inputvalue.value = result
        }
        else {
            result += e.target.innerHTML
            inputvalue.value = result
        }
    })
})
