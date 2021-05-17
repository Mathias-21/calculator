let n1 = document.querySelector('button.nums#n1')
let n2 = document.querySelector('button.nums#n2')
let n3 = document.querySelector('button.nums#n3')
let n4 = document.querySelector('button.nums#n4')
let n5 = document.querySelector('button.nums#n5')
let n6 = document.querySelector('button.nums#n6')
let n7 = document.querySelector('button.nums#n7')
let n8 = document.querySelector('button.nums#n8')
let n9 = document.querySelector('button.nums#n9')
let n0 = document.querySelector('button.nums#n0')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let times = document.getElementById('times')
let dividedBy = document.getElementById('dividedBy')
let equal = document.getElementById('equal')
let percent = document.getElementById('percent')
let coma = document.getElementById('coma')
let plusMinus = document.getElementById('plusMinus')
let clearC = document.getElementById('clearC')
let clear = document.getElementById('clear')
let clearAll = document.getElementById('clearAll')
let oneDivisedByX = document.getElementById('oneDividedByX')
let Xsquared = document.getElementById('Xsquared')
let squareRoot = document.getElementById('squareRoot')
let buttons = document.getElementById('buttons')
let res = document.getElementById('res')
let calculation = document.getElementById('calculation')
let v1 = ''
let v2 = ''
let result = ''
let oper = ''
let temp = ''
let Sequal = '='
let Sminus = '-'
let Splus = '+'
let SdividedBy = '÷'
let Stimes = '×'
let SsquareRoot = '√'
let Spercent = '%'

function addValues() {
    n1.addEventListener('click', function () {
        temp += '1'
    })
    n2.addEventListener('click', function () {
        temp += '2'
    })
    n3.addEventListener('click', function () {
        temp += '3'
    })
    n4.addEventListener('click', function () {
        temp += '4'
    })
    n5.addEventListener('click', function () {
        temp += '5'
    })
    n6.addEventListener('click', function () {
        temp += '6'
    })
    n7.addEventListener('click', function () {
        temp += '7'
    })
    n8.addEventListener('click', function () {
        temp += '8'
    })
    n9.addEventListener('click', function () {
        temp += '9'
    })
    n0.addEventListener('click', function () {
        temp += '0'
    })
    plus.addEventListener('click', function () {
        if (v1 !== '') {
            v1 = Number(v1) + Number(temp)
            calculation.innerHTML = `${v1} ${Splus} `
            temp = ''
        } else {
            v1 = temp
            calculation.innerHTML = `${temp} ${Splus} `
            temp = ''
            result = Splus
        }
    })
    minus.addEventListener('click', function () {
        v1 = temp
        calculation.innerHTML = `${temp} ${Sminus} `
        temp = ''
        result = Sminus
    })
    times.addEventListener('click', function () {
        v1 = temp
        calculation.innerHTML = `${temp} ${Stimes} `
        temp = ''
        result = Stimes
    })
    dividedBy.addEventListener('click', function () {
        v1 = temp
        calculation.innerHTML = `${temp} ${SdividedBy} `
        temp = ''
        result = SdividedBy
    })
    squareRoot.addEventListener('click', function () {
        calculation.innerHTML = `${SsquareRoot}(${temp})`
        temp = Math.sqrt(temp)
    })
    Xsquared.addEventListener('click', function () {
        calculation.innerHTML = `sqr(${temp})`
        temp *= temp
    })
    oneDividedByX.addEventListener('click', function () {
        calculation.innerHTML = `1/(${temp})`
        temp = 1 / temp
    })
    plusMinus.addEventListener('click', function () {
        temp = -temp
    })
    percent.addEventListener('click', function () {
        v1 = temp
        calculation.innerHTML = `${temp} ${Spercent} `
        temp = ''
        result = Spercent
    })
    coma.addEventListener('click', function () {
        temp += '.'
    })
    equal.addEventListener('click', function () {
        v2 = temp
        calculation.innerHTML += `${temp} ${Sequal}`
        if (result === Splus) {
            result = Number(v1) + Number(v2)
        } else if (result === Sminus) {
            result = Number(v1) - Number(v2)
        } else if (result === Stimes) {
            result = Number(v1) * Number(v2)
        } else if (result === SdividedBy) {
            result = Number(v1) / Number(v2)
        } else if (result === Spercent) {
            result = (Number(v1) / 100) * v2
        }
        temp = result
    })
    clear.addEventListener('click', function () {
        temp = temp.slice(0, -1)
    })
    clearC.addEventListener('click', function () {
        v1 = ''
        v2 = ''
        temp = ''
        result = ''
        calculation.innerHTML = temp
    })
    clearAll.addEventListener('click', function () {
        v1 = ''
        v2 = ''
        temp = ''
        result = ''
        calculation.innerHTML = temp
    })
    setInterval(function () {
        res.innerHTML = temp
    }, 50)
}

window.addEventListener('load', addValues)