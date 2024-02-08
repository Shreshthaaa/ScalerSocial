const btn = document.getElementById('heart');

btn.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'red';
});
btn.addEventListener('dblclick', function onClick(event) {
    event.target.style.backgroundColor = 'white';
});
const paragraph = document.getElementById("text");
const edit_button = document.getElementById("edit-button");

edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
} );

const element = document.getElementsByClassName("tweet-card2");
const del_button = document.getElementById("del-button");

del_button.addEventListener("click", function() {
    element.remove();
} );

