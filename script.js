
let cards = document.getElementById("cards")

function chiqar(data) {
    cards.innerHTML = null

    data.forEach((item) => {
        const li = document.createElement("li")
        li.className = "card"

        li.innerHTML = `
            <img class="card-image" src=${item.rasm} alt="avatar">
            <h2 class="card-name">${item.ism} ${item.familiya}</h2>
            <p class="card-vil">${item.mahallasi}</p>
        `

        cards.appendChild(li)
    })
}

chiqar(data)

