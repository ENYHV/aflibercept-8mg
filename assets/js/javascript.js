function changeIcon(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa');
    icon.classList.toggle('fa-times');
    anchor.querySelector("span").textContent = icon.classList.contains('fa');
}

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 50); 
        return false; 
    }); 
});