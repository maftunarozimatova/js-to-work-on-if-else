let name = "Alex"
let money = 10000
let account = 7777

let s = prompt("what is your name")

if (s.trim() === name) {
    let b = +prompt("write your account code")
    if (b === account) {
        let c = +prompt("How much money do you want to receive in your account?")
        alert(`
        received : ${c}
        increased : ${money - c}
        `)
    } else {
        alert ("you don't have enough money in your account")
    }
} else {
    alert ("account not found") 
}

