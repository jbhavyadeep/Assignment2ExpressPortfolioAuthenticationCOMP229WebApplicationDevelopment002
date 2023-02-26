(function () {
    function start() {
        console.log("App Started...");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for (button of deleteButton)
        {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure")) {
                    event.preventDefault();
                    window.location.assign('/contactList');
                }
            });
            }
    }
    window.addEventListener("load", start);
})();
(function(){
    function start(){
        console.log("App Started...");

    }
    window.addEventListener("load", start);
})();


//Function for Clicking send button on Contact page to send user back to home page and save details entered.
var  button  = document.getElementById("button1");

button.setAttribute("onclick", "move();", "save();");
function move() {

window.location.href = "/home";

}
function save(){
    var fullname = document.myform.fname.value;
    var number = document.getElementById("mnum").value;
    
    var email = document.getElementById("email").value;
    
    var message = document.getElementById("message").value;
}