var body = document.querySelector("ul")


document.querySelector(".ikonki").onclick = () =>
{
    ClearColor()
    body.classList.toggle("ikonki")
    document.querySelector("ul").style.background = "green"
}
document.querySelector(".primery").onclick = () =>
{
    ClearColor()
    body.classList.toggle("primery")
    document.querySelector(".ul1").style.background = "green"
}
function ClearColor()
{
    if (body.classList.value)
        body.classList.toggle(body.classList.value)
}
