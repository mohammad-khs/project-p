function openNav() {
    let sideNavWidth = document.getElementById("side-nav")

    if (sideNavWidth.style.width == "150px" || sideNavWidth.style.width == "250px") {
        document.getElementById("side-nav").style.width = "0"
        return
    }

    if (innerWidth <= "580") {
        sideNavWidth.style.width = "150px"

    } else {
        sideNavWidth.style.width = "250px"

    }




}
function closeNav() {
    document.getElementById("side-nav").style.width = "0"

}


let checkBox = document.getElementById("night-CBox")

function lightMode() {
    if (checkBox.checked) {
        localStorage.setItem("theme", "light")
        
        document.querySelector("link").href = "lightStyle.css"
        document.querySelector("body").style.transition = ".3s"
        document.querySelector("body").style.backgroundColor = "rgb(253, 242, 239)"
    } else {
        localStorage.setItem("theme", "dark")
        
        document.querySelector("link").href = "style.css"
        document.querySelector("body").style.transition = ".3s"
        document.querySelector("body").style.backgroundColor = "rgb(44, 41, 40)"
    }
}







addEventListener("load", (e) => {
    if (window.innerWidth <= "471") {
        document.getElementById("sky-img").style.fontSize = "32px"
        document.getElementById("start-here").style.fontSize = "15px"
    } else {
        document.getElementById("sky-img").style.fontSize = "350%"
        document.getElementById("start-here").style.fontSize = "20px"

    }
    if (localStorage.getItem("theme") == "light") {
        checkBox.checked = true
        document.querySelector("link").href = "lightStyle.css"
        document.querySelector("body").style.transition = ".3s"
        document.querySelector("body").style.backgroundColor = "rgb(253, 242, 239)"

    } else {
        checkBox.checked = false
        document.querySelector("link").href = "style.css"
        document.querySelector("body").style.transition = ".3s"
        document.querySelector("body").style.backgroundColor = "rgb(44, 41, 40)"
    }
})