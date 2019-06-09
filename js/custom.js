$(document).ready(function(){


    // Initialize ScollOut
    ScrollOut({
    });



    // Disable scrolling during initial cover
    window.addEventListener('scroll', noscroll);
    setTimeout(function() {
        window.removeEventListener('scroll', noscroll);
    },4000);
    // END -- Disable scrolling during initial cover



    // Cover img animation handling
    setTimeout(function() {
        $(".cover").removeClass("fadein delay-1s");
        $(".cover").addClass("flipOutX");      
    },2000);
    // END -- Cover img animation handling



    // Remove Cover
    setTimeout(function() {
          $(".cover, .basecover" ).addClass("d-none");
          $(".home-cover .title" ).removeClass("delay-3s");
    },4000);
    // END -- Remove Cover



    // Bounce animation handling on players menu
    $("#playersTab-menu .nav-item").on('click touchstart', function () {
        var el = $(this);
        $(el).removeClass('animated bounce bounceInDown');        
        setTimeout(function() {            
            $(el).addClass('animated bounce');
        },1);
        setTimeout(function() {
            $(el).removeClass('animated bounce');
        },1500);
    });
    // END -- Bounce animation handling on players menu



    // Scroll to top on menu item click
    $("header .carousel-indicators li").on('click touchstart', function () {
        setTimeout(function() {
            $("html, body").scrollTop(0);
        },200);
    });
    // END -- Scroll to top on menu item click



    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 400



    // Load iframe after initial animations end
    setTimeout(function() {
        $('#playersTab #spotify').append('<iframe width="100%" height="400" frameborder="0" src="https://open.spotify.com/embed/artist/50zQ8XSq3k4WlVshi4a3hj" allowtransparency="true" allow="encrypted-media"></iframe>');   
    },4000);
    setTimeout(function() {
        $('.shop-container').append('<iframe src="https://shop.spreadshirt.it/ExabyteShop/mountain+piercer"></iframe>');   
    },4500);
    // END -- Load iframe after initial animations end

    

    // Load iframes on menu players item click    
    $("#soundcloud-tab").on('click touchstart', function () {
        if (!$('#playersTab #soundcloud iframe').length) {     
            $('#playersTab #soundcloud').append('<iframe width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/136809438&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'); 
        }
    });
    $("#beatport-tab").on('click touchstart', function () {
        if (!$('#playersTab #beatport iframe').length) {     
            $('#playersTab #beatport').append('<iframe src="https://embed.beatport.com/?id=10115839&amp;type=track" width="100%" height="198" frameborder="0" scrolling="no"></iframe> <iframe src="https://embed.beatport.com/?id=9508458&amp;type=track" width="100%" height="198" frameborder="0" scrolling="no">beatport</iframe>'); 
        }
    });
    $("#itunes-tab").on('click touchstart', function () {
        if (!$('#playersTab #itunes iframe').length) {     
            $('#playersTab #itunes').append('<div class="row"><div class="col-md-6"><iframe allow="autoplay *; encrypted-media *;" frameborder="0" width="100%" height="400" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/it/album/scene-single/1330283207?app=music"></iframe></div><div class="col-md-6"><iframe allow="autoplay *; encrypted-media *;" frameborder="0" width="100%" height="400" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/it/album/algorithm-ep/1255292353?app=music"></iframe></div></div>'
            ); 
        }
    });
    $("#deezer-tab").on('click touchstart', function () {
        if (!$('#playersTab #deezer iframe').length) {     
            $('#playersTab #deezer').append('<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=55871692&app_id=1" width="100%" height="90" style="margin-bottom: 20px;"></iframe><iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=45324811&app_id=1" width="100%" height="305"></iframe>'); 
        }
    });
    $("#bandcamp-tab").on('click touchstart', function () {
        if (!$('#playersTab #bandcamp iframe').length) {     
            $('#playersTab #bandcamp').append('<iframe style="border: 0; max-width: 700px;  width: 100%; height: 400px; display: flex; margin: auto;" src="https://bandcamp.com/EmbeddedPlayer/album=4156891043/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/" seamless><a href="http://mountainpiercer.bandcamp.com/album/disappear-2">Disappear by Mountain Piercer</a></iframe>'
            ); 
        }
    });
    $("#youtube-tab").on('click touchstart', function () {
        if (!$('#playersTab #youtube iframe').length) {     
            $('#playersTab #youtube').append('<div class="row"><div class="col-md-6"><iframe width="100%" height="400" src="https://www.youtube.com/embed/IAUgzC46xDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="col md-6"><iframe width="100%" height="400" src="https://www.youtube.com/embed/2Eoe7054Y48" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>'
            ); 
        }
    });
    // END -- Load iframes on menu players item click



    // No scroll fror shop slide
    $("#shop-button").on('click touchstart', function () {
        window.addEventListener('scroll', noscroll);
    });

    $(".noshop-button").on('click touchstart', function () {
        window.removeEventListener('scroll', noscroll);      
    });    
    // END -- No scroll fror shop slide


    $('#privacy_ceck').change(function(){        
        if($(this).is(":checked")) {
            var currentdate = new Date(); 
            var datetime = "Autorizzo al trattamento dei dati il " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " alle ore "  
                + currentdate.getHours() + " e "  
                + currentdate.getMinutes() + " minuti.";
            $('#submit').removeAttr('disabled');
            $(this).attr('value', datetime);
        } else {
            $('#submit').attr('disabled', ""); 
            $(this).attr('value', 'Non autorizzo al trattamento dei dati');           
        }
    });


    // Form netlify AJAX
    $("#form").submit(function(e) {
        e.preventDefault();
    
        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
        alert("Messaggio inviato!");
        $('#form').trigger("reset");
        });
    });
    // END -- Form netlify AJAX



    // Print inverse email in contact page
    var name = 'mountainpiercer';
    var at = '@';
    var domain = 'libero.it';
    var s = name + at + domain;
    var e = s.split("").reverse().join("");
    $('#email1').html(e);

    var name = 'exabyterecords';
    var at = '@';
    var domain = 'google.com';
    var s = name + at + domain;
    var e = s.split("").reverse().join("");
    $('#email2').html(e);

    var name = 'exabyterecords';
    var at = '@';
    var domain = 'google.com';
    var s = name + at + domain;
    var e = s.split("").reverse().join("");
    $('#email3').html(e);
    // END -- Print inverse email in contact page




    
    $("#banner-button").on("click", function(){
        scriviCookie('accetta', 'true', 365);
        $('#banner').addClass("d-none");
    });

    var accetta = leggiCookie('accetta');
    if(accetta != "true") {
        setTimeout(function() {
            $('#banner').removeClass("d-none");
      },5000);
        // $('#banner').removeClass("d-none");
    }


    // Functions
    function noscroll() {
        window.scrollTo( 0, 0 );
    }

    function scriviCookie(nomeCookie,valoreCookie,durataCookie) {
        var scadenza = new Date();
        var adesso = new Date();
        scadenza.setTime(adesso.getTime() + (parseInt(durataCookie) * 86400));
        document.cookie = nomeCookie + '=' + escape(valoreCookie) + '; expires=' + scadenza.toGMTString() + '; path=/';
    }

    function leggiCookie(nomeCookie) {
        if (document.cookie.length > 0) {
            var inizio = document.cookie.indexOf(nomeCookie + "=");
            if (inizio != -1) {
                inizio = inizio + nomeCookie.length + 1;
                var fine = document.cookie.indexOf(";",inizio);
                if (fine == -1) fine = document.cookie.length;
                return unescape(document.cookie.substring(inizio,fine));
            } else {
                return "";
            }
        }
        return "";
    }
});