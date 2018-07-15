// page vars
var $sideBar = $('.side-bar');
var $progressBar = $('.progress-container');
var $page = $('.page')
var $main = $('.hero-content');
var $about = $('.about');
var $projects = $('.projects');
var $education = $('.education');
var $contact = $('.contact');

// HTML for different content sections
var $aboutContent = $('.about-content');
var $projectsContent = $('.projects-content');
var $educationContent = $('.education-content');
var $contactContent = $('.contact-content');
var currentActive;

// set timeout for loader
setTimeout(function(){
    $progressBar.fadeOut();
    $page.fadeIn(3000);
}, 3000);

// setup clicks for navigation and fade-in content
$about.click(function(){
    if (currentActive !== undefined){
        currentActive.css('display', 'none');
    }
    $aboutContent.fadeIn(2000);
    currentActive = $aboutContent;
});

$projects.click(function(){
    if (currentActive !== undefined){
        currentActive.css('display', 'none');
    }
    $projectsContent.fadeIn(2000);
    currentActive = $projectsContent;
});

$education.click(function(){
    if (currentActive !== undefined){
        currentActive.css('display', 'none');
    }
    $educationContent.fadeIn(2000);
    currentActive = $educationContent;
});

$contact.click(function(){
    if (currentActive !== undefined){
        currentActive.css('display', 'none');
    }
    $contactContent.fadeIn(2000);
    currentActive = $contactContent;
});



