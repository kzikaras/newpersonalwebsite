// page vars
var $sideBar = $('.side-bar');
var $progressBar = $('.progress-container');
var $page = $('.page')
var $main = $('.hero-content');
var $about = $('.about');
var $projects = $('.projects');
var $education = $('.education');
var $contact = $('.contact');

// HTML for different nav sections
var $aboutContent = $('.about-content');
var $projectsContent = $();
var $educationContent = $();
var $contactContent = $();

// set timeout for loader
setTimeout(function(){
    $progressBar.fadeOut();
    $page.fadeIn(3000);
}, 3000);

// setup clicks for navigation
$about.click(function(){
    $aboutContent.fadeIn(2000);
});

$projects.click(function(){
    $projectsContent.fadeIn(2000);
});

$education.click(function(){
    $educationContent.fadeIn(2000);
});

$contact.click(function(){
    $contactContent.fadeIn(2000);
});



