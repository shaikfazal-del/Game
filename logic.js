const choices = document.querySelectorAll(".ch")
const place_holder = document.querySelector("#showwinner")
const user_scored = document.querySelector("#user")
const comp_scored = document.querySelector("#comp")

let user_score = 0
let comp_score = 0

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_selected = choice.getAttribute("id")
        palygame(user_selected)
    })
});

const comp_selected = () => {
    arry_comp = ["rock", "paper", "scissors"]
    aryy_idx = Math.floor(Math.random() * 3)
    return (arry_comp[aryy_idx])
}
const palygame = (user_selected) => {
    const comp_select = comp_selected()
    if (user_selected === comp_select) {
        return draw_game()
    } else {
        let user_win = true
        if (user_selected === "rock") {
            if (comp_select === "paper") {
                user_win = false
            }
            else {
                user_win = true
            }
        }
        else if (user_selected === "paper") {
            if (comp_select === "scissors") {
                user_win = false
            }
            else {
                user_win = true
            }
        }
        else {
            if (comp_select === "rock") {
                user_win = false
            }
            else {
                user_win = true
            }
        }
        show_winner(user_win, comp_select, user_selected)
    }
}
const show_winner = (user_win, comp_select, user_selected) => {
    if (user_win) {
        user_score++
        user_scored.innerText = user_score
        place_holder.innerText = (`${user_selected} beats computer's ${comp_select}`)
        place_holder.style.backgroundColor = "green"
    } else {
        comp_score++
        comp_scored.innerText = comp_score
        place_holder.innerText = (`${comp_select} beats your ${user_selected}`)
        place_holder.style.backgroundColor = "red"
    }
}
const draw_game = () => {
    place_holder.innerText = "Game was draw"
    place_holder.style.backgroundColor = "blue"
}