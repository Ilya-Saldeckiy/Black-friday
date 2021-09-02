$(function() {
    $( ".accordion" ).accordion({
        heightStyle: 'content',
        active: true,
        collapsible: true
    } );
});

$(document).on('click', '.video__preview', function() {
	var $video = $('#video'),
		src = $video.attr('src');

	$video.attr('src', src + '&autoplay=1');
});

document.querySelectorAll('.question-link').forEach(function(cart){
    cart.addEventListener('click', function(event){
        document.querySelectorAll('.last-accord-line').forEach(function(tabContent) {
            tabContent.classList.toggle('close-border')
        })
    })
})


document.getElementById('testBtn').addEventListener('click', function(event){
	const el = document.getElementById('test-2');
	el.scrollIntoView({behavior: "smooth"});
})



let radio1 = document.getElementById("#radio");

let block1 = document.getElementById("text");

function check() {
	if (radio1.checked == true){
		block1.classList.add("active");
	}else{
		block1.classList.remove("active");
	}
}

