$(function(){
	$("#nav-placeholder").load("navbar.html");
	$("#footer-placeholder").load("footer.html");
  });

  lightBoxClose = function() {
	document.querySelector(".lightbox").classList.add("closed");
  }

