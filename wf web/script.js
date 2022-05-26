window.onload = document.getElementById("header").scrollIntoView();
document.querySelector(`#homebutton`).setAttribute("class", "activebutton");
    function openmods() {
        document.querySelector(`#home`).style.display = "none";
        document.querySelector(`#changelog`).style.display = "none";
        document.querySelector(`#modlist`).style.display = "block";
        document.querySelector(`#homebutton`).setAttribute("class", "inactivebutton");
        document.querySelector(`#modsbutton`).setAttribute("class", "activebutton");
        document.querySelector(`#changelogbutton`).setAttribute("class", "inactivebutton");
    }
    function openhome() {
        document.querySelector(`#modlist`).style.display = "none";
        document.querySelector(`#changelog`).style.display = "none";
        document.querySelector(`#home`).style.display = "block";
        document.querySelector(`#modsbutton`).setAttribute("class", "inactivebutton");
        document.querySelector(`#homebutton`).setAttribute("class", "activebutton");
        document.querySelector(`#changelogbutton`).setAttribute("class", "inactivebutton");
        
    }
    function openchangelog() {
        document.querySelector(`#modlist`).style.display = "none";
        document.querySelector(`#home`).style.display = "none";
        document.querySelector(`#changelog`).style.display = "block";
        document.querySelector(`#homebutton`).setAttribute("class", "inactivebutton");
        document.querySelector(`#changelogbutton`).setAttribute("class", "activebutton");
        document.querySelector(`#modsbutton`).setAttribute("class", "inactivebutton");
        
    }

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "flex") {
        content.style.display = "none";
        } else {
        content.style.display = "flex";
        }
    });
    }