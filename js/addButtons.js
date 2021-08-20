AFRAME.registerComponent("create-buttons", {
    init: function() {
        var button1 = document.createElement("button");
        button1.innerHTML = "ORDER";
        button1.setAttribute("id","order-button")
        button1.setAttribute("class", "button-menu")

        var buttonDiv = documnet.getElementById("button-div")
        buttonDiv.appendChild(button1)
    }
});