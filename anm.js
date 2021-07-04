$(document).ready(function() {
    $('.UL-navig a').click(function(e){
       e.preventDefault();
       $id = $(this).attr('href');
       $('body,html').animate({
       scrollTop: $($id).offset().top -20
       }, 750)
   })

   $('.title-LS').on('click', function(){
       $('.rotation').toggleClass('rotation')
       $('.affiche').toggleClass('affiche')
       lang = $(this).attr('data-langage')
       id = $(this).attr('id')
       $('#__'+id).addClass('rotation')
       $('.'+lang).toggleClass('affiche')
   })
})