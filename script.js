$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});

<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
{"}"}