const salary = document.getElementById("salary")
const name = document.getElementById("name")
const age = document.getElementById("age")
const savingPercentage = document.getElementById("savingPercentage")
const raiseSalary = document.getElementById("raiseSalary")
const par  = document.getElementById("par")
const cal = document.getElementById("calculate")
const span = document.getElementById("span")



cal.onclick = () => {
    let s = salary.value
    let a = age.value
    let sp = savingPercentage.value
    let rs = raiseSalary.value
    let n = name.value

    if (n!="" && s!="" && a!="" && sp!="" && rs!="") {
        if (s > 0 && a > 0 && a < 60 && sp >= 0 && sp <= 100 && rs >= 0 && rs <= 100){
            let restOfAge = 60 - a
            let an_salary = s * 12
            let savingPart;
            let totalSaving = (an_salary * sp) / 100
            for (let i = 1; i < restOfAge; i++) {
                an_salary = (an_salary * rs) / 100 + an_salary
                savingPart = (an_salary * sp) / 100
                totalSaving = totalSaving + savingPart
            }
            par.innerHTML = `Hi ${n}! Your total of saving is : `
            span.innerHTML = `${totalSaving} DH`
        }else {
            alert("invalid data")
        }
    }else {
        alert("not filled")
    }
}

