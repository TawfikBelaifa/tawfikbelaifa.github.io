$(document).ready(function() {
    $('.UL-navig a').click(function(e){
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
})