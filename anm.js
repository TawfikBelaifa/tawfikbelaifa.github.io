    $(document).ready(function() {
        $('.UL-navig a').click(function(e){
            e.preventDefault();
            $id = $(this).attr('href');
            $('body,html').animate({
            scrollTop: $($id).offset().top -20
            }, 750)       
        })

        $('.UL-navig-RWD a').click(function(e){
            e.preventDefault();
            $id = $(this).attr('href');
            $('body,html').animate({
            scrollTop: $($id).offset().top -20
            }, 750)       
        })

    

   $('.title-LS').on('click', function(){
       lang = $(this).attr('data-langage')
       id = $(this).attr('id')
       if($('#__'+id).hasClass('rotation')){
            $('#__'+id).removeClass('rotation')
            $('#__'+id).addClass('InverseRotate')
        }else{
            $('#__'+id).addClass('rotation')
            $('#__'+id).removeClass('InverseRotate')
       }
       $('.'+lang).toggleClass('affiche')
   })

   $(window).scroll(function() {
        var hT = $('.en-tete').offset().top
        if (hT > 10){
            $('.en-tete').addClass('addBox-shadow')
        }
        if(hT < 10 ){
            $('.en-tete').removeClass('addBox-shadow')
        }
    });

    $('.Btn-PersonJ').on('click', function(){
        $('.opacBtn').toggleClass('opacBtn')
        $(this).toggleClass('opacBtn')
        $('.afficheQualPart').removeClass('afficheQualPart')
        $('#_'+$(this).attr('id')).addClass('afficheQualPart')
    })

    $('.fa-bars').on('click', function(){
        if(($('.cGYg').hasClass('afficheNavBar'))){
            $('.cGYg').removeClass('afficheNavBar')
            $('.cGYg').addClass('hideNavBar')
        }
        else{
            $('.cGYg').addClass('afficheNavBar')
            $('.cGYg').removeClass('hideNavBar')
        }
        
    })

    $('.UL-navig-RWD a').on('click', function(){
        $('.cGYg').removeClass('afficheNavBar')
        $('.cGYg').addClass('hideNavBar')
    })

    $('.View').on('click', function(){
        FrontEnd = $(this).attr('data-PopupService')
        $('._' + $(this).attr('data-PopupService')).addClass('_front-end flexClass')

    })

    $('.exit').on('click', function(){
        $('._' + FrontEnd).toggleClass('flexClass')
    })
})