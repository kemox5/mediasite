
	$(window).scroll(function() {
            var x = $(document).scrollTop();
            var height=$('.content').height()-500;
            if(x < 410){
                $(".side_ad > div > div ").css({
                    'top': '0px',
                    'position': 'relative'
                });
            }
            
            if (x > 410 && x < $(".content").height()-500) {
                $(".side_ad > div > div").css({
                    'top': '90px',
                    'position': 'fixed'
                });
            }
            
            if( x > $(".content").height()-500){
                 $(".side_ad > div > div").css({
                     'top': height-400,
                    'position': 'relative'
                });
            }

        });