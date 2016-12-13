//Typer .js
$('document').ready(function(){
        
    //Scroll za dugmad
$(".js--skroluj-usluge").click(function(){
      $("html, body").animate({scrollTop: $(".sekcija-usluge").offset().top}, 1500);
  });
    
$(".js--skroluj-galerija").click(function(){
    $("html, body").animate({scrollTop: $(".sekcija-galerija-radova").offset().top},1500);
});

$(".vrati-se-gore").click(function(){
    $("html, body").animate({scrollTop: $(".gore").offset().top},1000);
});
    
    //Waypoint
    
$(".js--sekcija-omeni").waypoint(function(direction){
    if(direction =="down"){
        $("nav").addClass("lepljiva-navigacija");
        $(".vrati-se-gore").addClass("js--vrati-se-gore");
    }else{
        $("nav").removeClass("lepljiva-navigacija");
        $(".vrati-se-gore").removeClass("js--vrati-se-gore");
    }
},{
    offset:"300px;"
});
$(".js--sekcija-omeni").waypoint(function(direction){
    if(direction =="down"){
        $('.tekst-paragraf').typeTo("My name is Sonja Mrdjenovic, I'm 25 years old and I live in Belgrade. I finished School for beauty care and I have experience for more than 7 years in area of pedicure and manicure. In free time, I love reading books, hanging out with my friends and going out. My biggest motto is that you should never give up and when you believe in something, it will come true ... :))) :D");
    }
},{
    offset:"500px;"
}); 
    
    //SKROL ANIMACIJE
    /*sekcija o meni*/
   $(".js--anim-omeni-slika").waypoint(function(direction){
        $(".js--anim-omeni-slika").addClass('animated fadeIn')
    },{
        offset:"60%"
    });
    
   /*sekcija usluge*/
    $(".js--anim-usluga-div-1").waypoint(function(direction){
        $(".js--anim-usluga-div-1").addClass('animated fadeInLeft')
    },{
        offset:"60%"
    });
    $(".js--anim-usluga-div-2").waypoint(function(direction){
        $(".js--anim-usluga-div-2").addClass('animated fadeInUp')
    },{
        offset:"50%"
    });
     $(".js--anim-usluga-div-3").waypoint(function(direction){
        $(".js--anim-usluga-div-3").addClass('animated fadeInRight')
    },{
        offset:"40%"
    });
    
    /* sekcija galerija*/
     $(".js--anim-galerija").waypoint(function(direction){
        $(".js--anim-galerija").addClass('animated fadeIn')
    },{
        offset:"50%"
    });
    
    /*sekcija musterije*/
    $(".js--anim-musterija-1").waypoint(function(direction){
        $(".js--anim-musterija-1").addClass('animated fadeIn')
    },{
        offset:"60%"
    });
    $(".js--anim-musterija-2").waypoint(function(direction){
        $(".js--anim-musterija-2").addClass('animated fadeIn')
    },{
        offset:"50%"
    });
    $(".js--anim-musterija-3").waypoint(function(direction){
        $(".js--anim-musterija-3").addClass('animated fadeIn')
    },{
        offset:"40%"
    });
    
    /*MOBILNA NAVIGACIJA*/
    $(".mobilna-ikona").click(function(){
        $(".js--navigacija").slideToggle(200);
    });
});

/* Skrol za navigaciju  jquery scrolling snippet*/
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Google mapa

var mapOptions = {
    center: new google.maps.LatLng(44.771954,20.410628),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

var markerOptions = {
    position: new google.maps.LatLng(44.771954,20.410628),
    map: map
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);

var infoWindowOptions = {
    content: 'Sonja Nails'
};

var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
google.maps.event.addListener(marker,'click',function(e){
  
  infoWindow.open(map, marker);
  
});