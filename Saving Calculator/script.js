const salary = document.getElementById("salary")
const name = document.getElementById("name")
const age = document.getElementById("age")
const savingPercentage = document.getElementById("savingPercentage")
const raiseSalary = document.getElementById("raiseSalary")
const par  = document.getElementById("par")
const cal = document.getElementById("calculate")


cal.onclick = () => {
    let s = salary.value
    let a = age.value
    let sp = savingPercentage.value
    let rs = raiseSalary.value
    let n = name.value

    if (n!="" && s!="" && a!="" && sp!="" && rs!="") {
        if (s > 0 && a > 0 && a < 60 && sp >= 0 && sp <= 100 && rs >= 0 && rs <= 100){
            alert("valid data")
        }else {
            alert("invalid data")
        }
    }else {
        alert("not filled")
    }
}

