function openTab(event, title) {
    var tabContent = document.getElementsByClassName("tabContent")
    var tabLinks = document.getElementsByClassName("link")

    //DISPLAYING ALL THE TAB CONTENT TO NONE
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
        
    }

    // REMOVING THE ACTIVE CLASSNAME
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active")
        
    }

    // TO DISPLAY TH ACTUAL TABCONTENT
    document.getElementById(title).style.display = "block"
    console.log(event)

    // GIVING THE ACTIVE CLASSNAME 
    event.currentTarget.className += " active"

}