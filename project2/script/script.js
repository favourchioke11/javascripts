var content = document.getElementById("content")
// var tabContent = document.getElementById("tabContent")

function bio() {
    // content.style.display = "block" 
    if (tabContent.style.display === "none"){
        tabContent.style.display = "block"
        tabContent1.style.display = "none"
        tabContent2.style.display = "none"
    }else {
        tabContent.style.display = "none"
    }
}

function profile() {
    // content.style.display = "block" 
    if (tabContent1.style.display === "none"){
        tabContent1.style.display = "block"
        tabContent.style.display = "none"
        tabContent2.style.display = "none"
    }else {
        tabContent1.style.display = "none"
    }
}

function security() {
    // content.style.display = "block" 
    if (tabContent2.style.display === "none"){
        tabContent2.style.display = "block"
        tabContent.style.display = "none"
        tabContent1.style.display = "none"
    }else {
        tabContent2.style.display = "none"
    }
}