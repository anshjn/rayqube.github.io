// *******************************
           // Products
// *******************************
// function hovering(e){
//     if(e===1){
//         $("#first>.img_default").css("display","none");
//         $("#first>.img_hide").css("display","block");
//     }else if(e===2){
//         $("#second>.img_default").css("display","none");
//         $("#second>.img_hide").css("display","block");
//     }else if(e===2){
//         $("#third>.img_default").css("display","none");
//         $("#third>.img_hide").css("display","block");
//     }
// }
function changeimg(e){
    if(e === 1){
        if($("#first>.img_default").css("display")==="block"){
            $("#first>.img_default").css("display","none");
            $("#first>.img_hide").css("display","block");
            $("#first").css("background","#0033A0");
            $("#second").css("background","white");
            $("#third").css("background","white");
            $(".products_content_container").css("background","#0033A0");
            $(".title").css("color","#0033A0");
            $(".products_img").css("background-image", "url('imgs/Blue-Aramco.jpg')");
        }else{
            $("#first>.img_default").css("display","block");
            $("#first>.img_hide").css("display","none");
            $("#first").css("background","white");
        } 
        $("#second>.img_default").css("display","block");
        $("#second>.img_hide").css("display","none");
        $("#third>.img_default").css("display","block");
        $("#third>.img_hide").css("display","none");
        $(".dura_content").css("display","block");
        $(".prima_content").css("display","none");
        $(".ultra_content").css("display","none");
        $(".dura_button").css("display","flex");
        $(".prima_button").css("display","none");
        $(".ultra_button").css("display","none");
    }else if(e === 2){
        if($("#second>.img_default").css("display")==="block"){
            $("#second>.img_default").css("display","none");
            $("#second>.img_hide").css("display","block");
            $("#first").css("background","white");
            $("#second").css("background","#00843D");
            $("#third").css("background","white");
            $(".products_content_container").css("background","#00843D");
            $(".title").css("color","#00843D");
            $(".products_img").css("background-image", "url('imgs/Green-Aramco.jpg')");
        }else{
            $("#second>.img_default").css("display","block");
            $("#second>.img_hide").css("display","none");
            $("#second").css("background","white");
        } 
        $("#first>.img_default").css("display","block");
        $("#first>.img_hide").css("display","none");
        $("#third>.img_default").css("display","block");
        $("#third>.img_hide").css("display","none");
        $(".dura_content").css("display","none");
        $(".prima_content").css("display","block");
        $(".ultra_content").css("display","none");
        $(".dura_button").css("display","none");
        $(".prima_button").css("display","flex");
        $(".ultra_button").css("display","none");
    }else if(e === 3){
        if($("#third>.img_default").css("display")==="block"){
            $("#third>.img_default").css("display","none");
            $("#third>.img_hide").css("display","block");
            $("#first").css("background","white");
            $("#second").css("background","white");
            $("#third").css("background","#F68D2E");
            $(".products_content_container").css("background","#F68D2E");
            $(".title").css("color","#F68D2E");
            $(".products_img").css("background-image", "url('imgs/Orange-Aramco.jpg')");
        }else{
            $("#third>.img_default").css("display","block");
            $("#third>.img_hide").css("display","none");
            $("#third").css("background","white");
        } 
        $("#second>.img_default").css("display","block");
        $("#second>.img_hide").css("display","none");
        $("#first>.img_default").css("display","block");
        $("#first>.img_hide").css("display","none");
        $(".dura_content").css("display","none");
        $(".prima_content").css("display","none");
        $(".ultra_content").css("display","block");
        $(".dura_button").css("display","none");
        $(".prima_button").css("display","none");
        $(".ultra_button").css("display","flex");
    }
}

function aboutselection(e){
    // var x= window.innerWidth;
    // if(x<600){
    //     if(e===1){
    //         $(".sub_contain_luberef").css("display","block");
    //         $(".sub_contain_motiva").css("display","none");
    //         $(".sub_contain_soil").css("display","none");
    //     }else if(e===2){
    //         $(".sub_contain_luberef").css("display","none");
    //         $(".sub_contain_motiva").css("display","block");
    //         $(".sub_contain_soil").css("display","none");
    //     }else if(e===3){
    //         $(".sub_contain_luberef").css("display","none");
    //         $(".sub_contain_motiva").css("display","none");
    //         $(".sub_contain_soil").css("display","block");
    //     }
    // }else{
        if(e===1){
            $(".sub_contain_luberef").css("display","flex");
            $(".sub_contain_motiva").css("display","none");
            $(".sub_contain_soil").css("display","none");
        }else if(e===2){
            $(".sub_contain_luberef").css("display","none");
            $(".sub_contain_motiva").css("display","flex");
            $(".sub_contain_soil").css("display","none");
        }else if(e===3){
            $(".sub_contain_luberef").css("display","none");
            $(".sub_contain_motiva").css("display","none");
            $(".sub_contain_soil").css("display","flex");
        }
    
   
}
// function selection(e){
//     if(e===1){
//         $(".m_luberef").css("display","block");
//         $(".m_motiva").css("display","none");
//         $(".m_soil").css("display","none");
//     }else if(e===2){
//         $(".m_luberef").css("display","none");
//         $(".m_motiva").css("display","block");
//         $(".m_soil").css("display","none");
//     }else if(e===3){
//         $(".m_luberef").css("display","none");
//         $(".m_motiva").css("display","none");
//         $(".m_soil").css("display","block");
//     }
// }
var x = window.innerWidth;
function closed(){
    if(x >=  "600px"){
        $(".burger_menu").css("right","-200px");
    }else{
        $(".burger_menu").css("right","-100%");
    }
    $(".popup").css("display","none");
    $(".tables_popup").css("display","none");
}
function opened(){
    $(".burger_menu").css("right","0px");
}
// function page_change(e){
//     if(e===1){
        
//     }
// }
function popupopen(e){
    if(e===1){
        $(".popup").css("display","flex");
        $(".chart1").css("display","flex");
        $(".chart2").css("display","none");
    }else if(e===2){
        $(".popup").css("display","flex");
        $(".chart2").css("display","flex");
        $(".chart1").css("display","none");
    }
}



// ---------------------------------------tables-carousel---------------------------------------------------------
function change_blue(e){
    console.log(e);
    if(e===1){
        $("#blue1").css("background","#0033A0");
        $("#blue2").css("background","#ffffff");
        $("#blue3").css("background","#ffffff");

        $(".blue_table_1").css("display","block");
        $(".blue_table_2").css("display","none");
        $(".blue_table_3").css("display","none");

    }else if(e===2){
        $("#blue1").css("background","#ffffff");
        $("#blue2").css("background","#0033A0");
        $("#blue3").css("background","#ffffff");

        $(".blue_table_1").css("display","none");
        $(".blue_table_2").css("display","block");
        $(".blue_table_3").css("display","none");
    }else if(e===3){
        $("#blue1").css("background","#ffffff");
        $("#blue2").css("background","#ffffff");
        $("#blue3").css("background","#0033A0");

        $(".blue_table_1").css("display","none");
        $(".blue_table_2").css("display","none");
        $(".blue_table_3").css("display","block");
    }
}
function change_green(e){
    console.log(e);
    if(e===1){
        $("#green1").css("background","#00843D");
        $("#green2").css("background","#ffffff");
        $("#green3").css("background","#ffffff");
        $("#green4").css("background","#ffffff");

        $(".green_table_1").css("display","block");
        $(".green_table_2").css("display","none");
        $(".green_table_3").css("display","none");
        $(".green_table_4").css("display","none");

    }else if(e===2){
        $("#green1").css("background","#ffffff");
        $("#green2").css("background","#00843D");
        $("#green3").css("background","#ffffff");
        $("#green4").css("background","#ffffff");

        $(".green_table_1").css("display","none");
        $(".green_table_2").css("display","block");
        $(".green_table_3").css("display","none");
        $(".green_table_4").css("display","none");
    }else if(e===3){
        $("#green1").css("background","#ffffff");
        $("#green2").css("background","#ffffff");
        $("#green3").css("background","#00843D");
        $("#green4").css("background","#ffffff");

        $(".green_table_1").css("display","none");
        $(".green_table_2").css("display","none");
        $(".green_table_3").css("display","block");
        $(".green_table_4").css("display","none");
    }else if(e===4){
        $("#green1").css("background","#ffffff");
        $("#green2").css("background","#ffffff");
        $("#green3").css("background","#ffffff");
        $("#green4").css("background","#00843D");

        $(".green_table_1").css("display","none");
        $(".green_table_2").css("display","none");
        $(".green_table_3").css("display","none");
        $(".green_table_4").css("display","block");
    }
}


function change_orange(e){
    if(e===1){
        $(".orange_table_1").css("display","block");
        $(".orange_table_2").css("display","none");
        $("#orange1").css("background","#F68D2E");
        $("#orange2").css("background","#ffffff");
    }else if(e===2){
        $(".orange_table_1").css("display","none");
        $(".orange_table_2").css("display","block");
        $("#orange1").css("background","#ffffff");
        $("#orange2").css("background","#F68D2E");
    }
}





function popup_selection(e){
    $(".tables_popup").css("display","flex");
    if(e===1){
        $(".blue_tables").css("display","flex");
        $(".green_tables").css("display","none");
        $(".orange_tables").css("display","none");

        $(".green").css("display","none");
        $(".orange").css("display","none");
        $(".blue").css("display","flex");

        $(".carousel_blue").css("display","flex");
        $(".carousel_orange").css("display","none");
        $(".carousel_green").css("display","none");
    }else if(e===2){
        $(".blue_tables").css("display","none");
        $(".green_tables").css("display","flex");
        $(".orange_tables").css("display","none");

        $(".green").css("display","flex");
        $(".orange").css("display","none");
        $(".blue").css("display","none");

        $(".carousel_blue").css("display","none");
        $(".carousel_orange").css("display","none");
        $(".carousel_green").css("display","flex");
    }else if(e===3){
        $(".blue_tables").css("display","none");
        $(".green_tables").css("display","none");
        $(".orange_tables").css("display","flex");

        $(".green").css("display","none");
        $(".orange").css("display","flex");
        $(".blue").css("display","none");

        $(".carousel_blue").css("display","none");
        $(".carousel_orange").css("display","flex");
        $(".carousel_green").css("display","none");
    }
}