const section = document.createElement("section")
section.className = "client_review"
document.body.append(section)
let div1 = document.createElement("div")
div1.className = "container"
section.append(div1)
let div2 = document.createElement("div")
div2.className = "row justify-content-center"
div1.append(div2)
let div3 = document.createElement("div")
div3.className = "col-lg-8"
div2.append(div3)
let div4 = document.createElement("div")
div4.className = "client_review_slider owl-carousel"
div3.append(div4)
const text = [
    document.querySelectorAll(".client_review_title"),
    document.querySelectorAll(".client_review_text"),
    document.querySelectorAll(".client_review_http")
]
for (let index = 0; index < text[0].length; index++) {
    let div = document.createElement("div")
    div.className = "single_client_review"
    div4.append(div)
    let pTitle = document.createElement("p")
    pTitle.textContent = text[0][index].id
    div.append(pTitle)
    let pText = document.createElement("p")
    pText.textContent = text[1][index].id
    div.append(pText)
    let h5 = document.createElement("h5")
    div.append(h5)
    let a = document.createElement("a")
    a.href = text[2][index].id
    a.textContent = "Ссылка на полный отзыв"
    h5.append(a)
}