function show(e){ 
    highlight(e+1);
    var submenu = document.querySelectorAll(".submenu");
    $(".submenu").css("display","none");
    submenu[e-1].style.display="flex";
    submenu[e-1].style.height="50px";
}
function highlight(e){
    var wbar = document.querySelectorAll(".white_selection");
    var hlight = document.querySelectorAll(".sidemenutext");
    var rotator = document.querySelectorAll(".rotate");
    $(".sidemenutext").removeClass("active");
    $(".white_selection").removeClass("active");
    hlight[e-1].classList.add("active");
    wbar[e-1].classList.add("active");
    $(".rotate").css("transform","rotate(0deg)");
    rotator[e-2].style.transform="rotate(-270deg)";
}

// function openprofile(){
//     // var profile_class=;
//     // alert(profile_class);
//     if($(".profile").css("display")==="flex"){
//         $(".profile").css("display", "none");
//     }else{
//         $(".profile").css("display", "flex");
//     }
// }
$('.profile_card').click(function(e){
    e.preventDefault(); // stops link from making page jump to the top
       e.stopPropagation();
       $(".profile").toggle();
})
  
$('body').click( function() {
      
      $(".profile").css("display", "none");
       
   });
// ************************toggleButton***************
var right = document.querySelectorAll(".tick");
var wrong = document.querySelectorAll(".cross");
var toggle = document.querySelectorAll(".toggle");
function toggleButton(e){
    if(right[e-1].style.display=="block"){
        wrong[e-1].style.display="block";
        right[e-1].style.display="none";
        toggle[e-1].style.background="#DB524B";
    }else{
        wrong[e-1].style.display="none";
        right[e-1].style.display="block";
        toggle[e-1].style.background="#58B957";
    }
}

// ************************Action on toggleButton***************
function activations(){
    var checker=document.querySelectorAll('input[name="checks"]');
    for(var i=0; i<=checker.length-1; i++){
        if(checker[i].checked){
            greenon(i);
        }
    }
    function greenon(e){
        var right = document.querySelectorAll(".tick");
        var wrong = document.querySelectorAll(".cross");
        var toggle = document.querySelectorAll(".toggle");
        wrong[e].style.display="none";
        right[e].style.display="block";
        toggle[e].style.background="#58B957";
    }
}
function deactivations(){
    var checker=document.querySelectorAll('input[name="checks"]');
    for(var i=0; i<=checker.length-1; i++){
        if(checker[i].checked){
            redon(i);
        }
    }
    function redon(e){
        wrong[e].style.display="block";
        right[e].style.display="none";
        toggle[e].style.background="#DB524B";
    }
}
// ****************Addition Button in inventory************************
var additions=document.querySelectorAll(".addition");
var remove=document.querySelectorAll(".close1");
var count=0;
function addfields(){
    count++;
    var addnew= '<div class="addition row_'+ count +'"><div class="Item_name"><input type="text"></div><div class="Item_name"><input type="text"></div><div class="close1 close_row_'+ count +'" onclick="removal('+ count +')">&times;</div></div>'
    $('.product_add').append(addnew);
}
function removal(e){  
    $('.row_'+e).remove();
}
function burger_on_off(){
    
    if($(".sidebar").css("display")==="block"){
        $(".sidebar1").css("display","block");
        $(".sidebar").css("display","none");
        $(".half").css("display","block");
        $(".full").css("display","none");
        $(".logo").css("width","40px");
        $(".burger_profile").css("width",window.innerWidth-40+"px");
        $(".widthforsb i").css("justify-content", "center");
    }else{
        $(".sidebar1").css("display","none");
        $(".sidebar").css("display","block");
        $(".half").css("display","none");
        $(".full").css("display","block");
        $(".logo").css("width","17%");
        $(".burger_profile").css("width","83%");
        $(".widthforsb i").css("justify-content", "flex-start");
    }
}
// ****************Vendors forms functionality************************
var stabs=document.querySelectorAll(".s_tabs");
function firstform(e){
    $(".firstform").css("display","flex");
    $(".secondform").css("display","none");
    $(".thirdform").css("display","none");
    $(".stabs").css("color","#676767");
    $(".one").css("color","white");
    $(".two").css("color","#B3B3B3");
    $(".three").css("color","#B3B3B3");
}
function secondform(e){
    $(".firstform").css("display","none");
    $(".secondform").css("display","flex");
    $(".thirdform").css("display","none");
    $(".one").css("color","#B3B3B3");
    $(".two").css("color","white");
    $(".three").css("color","#B3B3B3");
}
function thirdform(e){
    $(".firstform").css("display","none");
    $(".secondform").css("display","none");
    $(".thirdform").css("display","flex");
    $(".one").css("color","#B3B3B3");
    $(".two").css("color","#B3B3B3");
    $(".three").css("color","#ffffff");
}
//****************Upload Button functionality************************

function checked_checker(e){
    console.log(e);
    var checkboxes = document.querySelectorAll(".fa-check");
    var checker=document.querySelectorAll('input[name="checks"]');
    for(var i=0; i<=checker.length-1; i++){
        if(checker[i].checked){
            console.log("i");
            checkings1(i);
        }else{
            console.log("i");
            checkings(i);
        }
    }
    function checkings(e){
        console.log(checkboxes[e]);
        checkboxes[e].style.display="block";
    }
    function checkings1(e){
        console.log(checkboxes[e]);
        checkboxes[e].style.display="none";
    }
}

function readURL(input) {
    var ext = $('#vendorimage').val().split('.').pop().toLowerCase();
    
    if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
        alert('invalid file type!'); return false;
    }
    var file_size = $('#vendorimage')[0].files[0].size;
    console.log($('#vendorimage')[0].files[0]);
if(file_size>512000) {
   alert("File size is greater than 500 KB.");
   
    return false;
} 
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var filename = $('#vendorimage')[0].files[0].name;
        reader.onload = function (e) {
            $('#vendorimageholder')
                .attr('src', e.target.result); 
            $("#path_vendor").html(filename)
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function readURL(input) {
    var ext = $('#eventimage').val().split('.').pop().toLowerCase();
    
    if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
        alert('invalid file type!'); return false;
    }
    var file_size = $('#eventimage')[0].files[0].size;
    console.log($('#eventimage')[0].files[0]);
if(file_size>512000) {
   alert("File size is greater than 500 KB.");
   
    return false;
} 
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var filename = $('#eventimage')[0].files[0].name;
        reader.onload = function (e) {
            $('#eventimageholder')
                .attr('src', e.target.result); 
            $("#eventimagepath").html(filename)
        };

        reader.readAsDataURL(input.files[0]);
    }
}