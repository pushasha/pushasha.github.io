riot.tag2('about-page', '<div class="starter-template"> <h1>About</h1> <p class="lead">Content coming soon!</p> </div>', '', '', function(opts) {
});
riot.tag2('sp-navbar', '<nav class="navbar navbar-inverse navbar-fixed-top"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#">Sarah Plotkin</a> </div> <div id="navbar" class="collapse navbar-collapse"> <ul class="nav navbar-nav"> <li class="active"><a href="#">Home</a></li> <li><a href="#about">About</a></li> <li><a href="#contact">Contact</a></li> </ul> </div> </div> </nav>', '', '', function(opts) {
});

riot.tag2('script', '', '', '', function(opts) {
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
});
riot.tag2('contact-page', '<div class="starter-template"> <h1>Contact</h1> <p class="lead">Content coming soon!</p> </div>', '', '', function(opts) {
});
riot.tag2('home-page', '<div class="starter-template"> <h1>Home</h1> <p class="lead">Content coming soon!</p> </div>', '', '', function(opts) {
});
riot.tag2('not-found-page', '<div class="starter-template"> <h1>404</h1> <p class="lead">Something went wrong...</p> </div>', '', '', function(opts) {
});