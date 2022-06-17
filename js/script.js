let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let content_div = document.querySelector('.content-div');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    content_div.classList.toggle('active');
}

//add active class to selected items
let list = document.querySelectorAll('.list')
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }

        list[i].className = 'list active';
    }
}