console.log('script loaded');
$(function() {
    $('#example1').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy"
    });
});

var tabcontent = document.getElementsByClassName("tabcontent");

function closeTabTodo() {
    tabcontent[0].style.display = "none";
    tabcontent[1].style.display = "block";
}

function closeTabGrocery() {
    tabcontent[1].style.display = "none";
    tabcontent[0].style.display = "block";
}