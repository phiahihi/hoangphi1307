var menus = document.querySelectorAll(".accordion > li");

menus.forEach(function(menu) {
    menu.addEventListener("click", function(e) {
        e.preventDefault()
        menus.forEach(function(menu) {
            menu.classList.remove("active");
            })
            menu.classList.add("active");
    })
})