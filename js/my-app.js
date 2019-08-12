// Initialize app
var myApp = new Framework7();
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
// alert('fdfd');
if(navigator.connection.type==0)
{
    alert('This application requires internet. Please connect to the internet.');
    navigator.app.exitApp()

}
else if(navigator.connection.type=='none')
{
    alert('This application requires internet. Please connect to the internet.');
    navigator.app.exitApp()

}
    // alert($('.page').data('page'));
    // my_toast();
// alert($.mobile.activePage.is('#homepage'));


document.addEventListener("backbutton", function(e){
 
 var unique =  window.localStorage.getItem("unique");   
 var unique_home =  window.localStorage.getItem("unique_home");   

  if(unique_home == 0){

        if (confirm("Are you sure you want to Exit?")) {
    
  navigator.app.exitApp()
  
        }
        else {
            return false;
        }
    
  }else{
  if ($('#view_card_in_popup').is(':visible')) {

    $('#view_card_in_popup').modal('hide');
  }else{
 if(unique == 'home'){
    // alert('h');

    $$('#bck2').trigger("click");

  }else if($('.page').data('page') == 'viewcard'){
    // alert('p');
    
   
     $$('#bck').trigger("click");
    window.localStorage.setItem("unique",'profile');
    $('.bk_link').append('<a href="home.html" id="bck2"></a>');
  
  }else if($('.page').data('page') == 'profile'){
    // alert('p');
    $$('#bck').trigger("click");
    window.localStorage.setItem("unique",'profile');
    $('.bk_link').append('<a href="home.html" id="bck2"></a>');
  }else if($('.page').data('page') == 'about_me' || $('.page').data('page') == 'upload_profile' || $('.page').data('page') == 'contact_detail' 
    || $('.page').data('page') == 'company_logo' || $('.page').data('page') == 'skils' || $('.page').data('page') == 'achievement' 
    || $('.page').data('page') == 'testimonial' || $('.page').data('page') == 'experience' || $('.page').data('page') == 'education' 
    || $('.page').data('page') == 'company' || $('.page').data('page') == 'product' || $('.page').data('page') == 'social_link' 
    || $('.page').data('page') == 'payment_link' || $('.page').data('page') == 'gallery' || $('.page').data('page') == 'offer' 
    || $('.page').data('page') == 'key_client' || $('.page').data('page') == 'memberships' || $('.page').data('page') == 'theme'){
// alert($('.page').data('page'))
$$('#bck2').trigger("click");

  }else{
    // alert(unique);

    $$('#bck').trigger("click");
    window.localStorage.setItem("unique",'home');
     var unique =  window.localStorage.getItem("unique");
    $('.bk_link').html('<a href="'+unique+'.html" id="bck"></a>');
    $('.bk_link').append('<a href="home.html" id="bck2"></a>');
  }
}

 }


    
  




}, false);
 // *my permission code*
        var permission = cordova.plugins.permissions;

        permission.hasPermission(permission.READ_CONTACTS,function(results){
            if(!results[permission])
            {
                permission.requestPermission(permission.READ_CONTACTS,function(results){
                    if(results[permission]){
                           alert("permission granted");
                   }
                },)
                // alert("permission granted failed");
            }
        }, 
        )

//                                $.ajax({
//             url: "https://digitalbcards.in/api/fetch_amount/", 
//             method: "POST",
//             data:{secrete:"virus"}, 
//             dataType:"json",            
           
//             success: function(data) {
//                 // var data = JSON.stringify(data);

// $('#payment_frm').attr("data-amount","20"); //setter
// alert($('#payment_frm').data('amount'));
// }
// })


//  if(payment == 0){
// // alert($('#payment_btn').attr('href'));
//      // $('.payment_btn').trigger('click');
//       $$('#payment_btn').trigger("click");
//     $( "#payment_btn" ).trigger( "click" );
//   }
   // $(document).on('click', '.t1', function() {
    
   //  $('.t1').addClass('active');
   //  $('.t2').removeClass('active');
   //  $('.t3').removeClass('active');
   // });

   // $(document).on('click', '.t2', function() {
   //  $('.t2').addClass('active');
   //  $('.t1').removeClass('active');
   //  $('.t3').removeClass('active');
   // });

   // $(document).on('click', '.t3', function() {
   //  $('.t3').addClass('active');
   //  $('.t1').removeClass('active');
   //  $('.t2').removeClass('active');
   // });
// var windowHeightSeventyPercent = parseInt(screen.height * 0.7); //To support multiple devices

// $("input").focusin(function(){
//    $("body").height($("body").height()+parseInt(windowHeightSeventyPercent)); //Make page body scroll by adding height to make user to fillup field.
// });

//  $("input").focusout(function(){
//    $("body").height($("body").height()-parseInt(windowHeightSeventyPercent));
//  });

        // myApp.alert('Here comes About page');
                // window.localStorage.setItem("payment",0);
        var islogin = window.localStorage.getItem("login");
// alert(islogin); 
       



  // alert(payment);
// $('#div_frm').show();
if(islogin == 1){
        var email = window.localStorage.getItem("email");
        var payment = window.localStorage.getItem("payment");
  
update_profile(email);
  // $('#div_frm').hide();
    var permission = cordova.plugins.permissions;
    permission.hasPermission(permission.READ_CONTACTS,function(results){
            if(!results[permission])
            {
                permission.requestPermission(permission.READ_CONTACTS,function(results){
                    if(results[permission]){
                           alert("permission granted");
                   }
                },)
                // alert("permission granted failed");
            }
        }, 
        )
  // alert('fdfd');
  // alert(payment);
   if(payment == 0){
// alert($('#payment_btn').attr('href'));
     // $('.payment_btn').trigger('click');
      $$('#payment_btn').trigger("click");
    $( "#payment_btn" ).trigger( "click" );
  }else{
    $$('#home').trigger("click");

  }
 // window.location.href = "home.html"
  }
    $(document).on('click', '#login_user', function(){  

  $('#login_form').validate({ // initialize the plugin
        errorLabelContainer: "#cs-error-note",
   
     errorClass: 'errors',
    rules: {
     
       
        email: {
           
            required: true,
            email:true,
            
        },
         password: {
           
            required: true,
            
        },
        
    },
    messages: {
       
        
         email: {
           
            required: "Please enter  Email.",
            email:"Please Enter Proper Email",
            
        },
         password: {
           
            required: "Please enter  Password.",
            
            
        },
        
       
         
    },
        submitHandler: function (form) { // for demo
          form =$('#login_form').serialize();
          var  action = $('#action').val();
          var  email = $('#email').val();
          // alert(email);
                window.localStorage.setItem("email",email);
                var email =  window.localStorage.getItem("email");
// alert(email);

         $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    $('.loader').css('display','flex');
                
     $.ajax({
            url: "https://digitalbcards.in/api/login/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {

              if(data.status == 0){
               $('.snackbar').html(data.message);
                my_toast();
                
    $('.loader').css('display','none');
    
                // alert(data.message);
              }else{
// alert(email);
                window.localStorage.setItem("login",1);
                window.localStorage.setItem("email",email);

                 $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    $('.loader').css('display','flex');
                     $.ajax({
            url: "https://digitalbcards.in/api/user_profile/", 
            method: "POST",
            data:{email:email,secrete:"virus"}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
                // alert(data.Refferal_id);
               window.localStorage.setItem("payment",data.pay_status);
               window.localStorage.setItem("user_id",data.id);
               window.localStorage.setItem("language",data.language);
               window.localStorage.setItem("referral",data.Refferal_id);
               window.localStorage.setItem("mobile",data.mobile);
               window.localStorage.setItem("profession",data.profession);
               window.localStorage.setItem("about_me",data.about_me);
               window.localStorage.setItem("skype",data.skype);
               window.localStorage.setItem("address",data.address);
                window.localStorage.setItem("address_map_link",data.address_map_link);
               window.localStorage.setItem("fb_url",data.fb_url);

               window.localStorage.setItem("y_tube_link",data.y_tube_link);
               window.localStorage.setItem("website",data.website);
                
               window.localStorage.setItem("whatsapp",data.whatsapp);
               window.localStorage.setItem("whatsapp_no",data.whatsapp_no);
               window.localStorage.setItem("name",data.name);
               //window.localStorage.setItem("username",data.name);
               window.localStorage.setItem("user_image",data.profile_img);

               window.localStorage.setItem("company_name",data.company_name);
               window.localStorage.setItem("vision",data.vision);
               window.localStorage.setItem("mission",data.mission);
               window.localStorage.setItem("about_comp",data.about_comp);
               window.localStorage.setItem("comp_address",data.comp_address);
               window.localStorage.setItem("map_link",data.map_link);
               window.localStorage.setItem("about_cyoutube",data.about_cyoutube);
               window.localStorage.setItem("company_img",data.company_img);
               window.localStorage.setItem("gst_no",data.gst_no);
               window.localStorage.setItem("gst_img",data.gst_img);
               window.localStorage.setItem("theme",data.theme);
var referral =  window.localStorage.getItem("referral");
                   // alert(referral);
              
               // alert(data.fb_url);
                $('#user').html(data.name);
                $('#user_image').attr("src",'https://digitalbcards.in/upload/'+data.profile_img);
                // $('#user_image').css("height",'80px');
                // $('#user_image').css("width",'80px');
               // $('#preloader').hide();
    $('.loader').css('display','none');
                
              
            //location.reload();
          }
        }) 

              var payment =   window.localStorage.getItem("payment");
              // alert(payment);
               // alert(data.message);
               $('.snackbar').html(data.message);
  // setTimeout(function(){ $('.snackbar').show(); }, 3000);
                my_toast();
                if(payment != ''){
                  location.reload();
                }else{

    $$('#payment_btn').trigger("click");
                }
    $('.loader').css('display','none');

              // $('#home').click();
              // $('#icon').html('<i class="fa fa-check font-30 icon-circle icon-l color-green-dark bg-white shadow-icon-large"></i>');
              // $('#error_msg_title').html('Login Succes');            
        // $('#error_msg').html(data.message);            
// $('#attention').addClass('active-menu-box-modal');
 // window.location.href = "home.html"
              }
            //location.reload();
          }
        })
            return false; // for demo
        }
    });
})

});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('skils', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
    }
})
$$(document).on('pageInit', '.page[data-page="achievement"]', function (e) {
window.localStorage.setItem("unique",'achievement');
window.localStorage.setItem("unique_home",'1');
 var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);


   
$( function() {
$("#srt_btn").draggable();
});

 // $( ".row_position" ).sortable("disable");


  

 var form_d = 'secrete=virus&user_id='+user_id+'';
 skils_action(form_d);
                  $("#add_tag").click(function() {
   var form =$('#add_achievement_form').serialize()+ "&add_tag=1&" +form_d;
   if($('#name').val() == ''){
    $('.snackbar').html('Please Enter Name');
    my_toast();
    return false;
   }
   if($('#s_value').val() == ''){
    $('.snackbar').html('Please Enter Description');
    my_toast();
    return false;
   }
skils_action(form);

                  })
                   $("#update_tag").click(function() {
   var form =$('#update_achievement_form').serialize()+ "&update_tag=1&" +form_d;
    if($('#e_name').val() == ''){
    $('.snackbar').html('Please Enter Name');
    my_toast();
    return false;
   }
   if($('#e_value').val() == ''){
    $('.snackbar').html('Please Enter Description');
    my_toast();
    return false;
   }
skils_action(form);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/achievement/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
              // alert(data.data);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_achievement').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_achievement').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

})
$$(document).on('pageInit', '.page[data-page="pay"]', function (e) {
  window.localStorage.setItem("unique_home",'1');
  window.localStorage.setItem("unique",'pay');
 // $( document ).ajaxStop(function(){
 //  alert("stop0");
 //  });



// document.getElementById('rzp-button1').onclick = function(e){
//     var options = {
//     "key": "rzp_live_SrhWTuzFnqnF1F", // Enter the Key ID generated from the Dashboard
//     "amount": "29935", // INR 299.35
//     "name": "Acme Corp",
//     "description": "A Wild Sheep Chase is the third novel by Japanese author  Haruki Murakami",
//     "image": "https://example.com/your_logo",
//     "order_id": "order_9A33XWu170gUtm",//Order ID is generated as Orders API has been implemented. Refer the Checkout form table given below
//     "handler": function (response){
//         alert(response.razorpay_payment_id);
//     },
//     "prefill": {
//         "name": "Gaurav Kumar",
//         "email": "gaurav.kumar@example.com"
//     },
//     "notes": {
//         "address": "note value"
//     },
//     "theme": {
//         "color": "#F37254"
//     }
// };
// var rzp1 = new Razorpay(options);
//     rzp1.open();
//     e.preventDefault();
// }





                  $("#rzp-button1").click(function(e) {
// alert('here');


var options = {
     "key": "rzp_live_SrhWTuzFnqnF1F", // Enter the Key ID generated from the Dashboard
    "amount": "29935", // INR 299.35
    "name": "Acme Corp",
    "description": "A Wild Sheep Chase is the third novel by Japanese author  Haruki Murakami",
    "image": "https://example.com/your_logo",
    // "order_id": "order_9A33XWu170gUtm",//Order ID is generated as Orders API has been implemented. Refer the Checkout form table given below
    "handler": function (response){
        alert(response.razorpay_payment_id);
    },
    /**
      * You can track the modal lifecycle by * adding the below code in your options
      */
    "modal": {
        "ondismiss": function(){
          alert('Dismiss');
            // console.log(‘Checkout form closed’);
        }
    }
};

var rzp1 = new Razorpay(options);
 rzp1.open();
    e.preventDefault();

                  })
})
$$(document).on('pageInit', '.page[data-page="testimonial"]', function (e) {
window.localStorage.setItem("unique",'testimonial');
window.localStorage.setItem("unique_home",'1');
 var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);
 var form_d = 'secrete=virus&user_id='+user_id+'';
 skils_action(form_d);
                  $("#add_tag").click(function() {
   var form =$('#add_testimonial_form').serialize()+ "&add_tag=1&" +form_d;
    if($('#name').val() == ''){
    $('.snackbar').html('Please Enter Name');
    my_toast();
    return false;
   }
   if($('#s_value').val() == ''){
    $('.snackbar').html('Please Enter Tagline');
    my_toast();
    return false;
   }
   if($('#msg').val() == ''){
    $('.snackbar').html('Please Enter Message');
    my_toast();
    return false;
   }
skils_action(form);

                  })
                   $("#update_tag").click(function() {
   var form =$('#update_testimonial_form').serialize()+ "&update_tag=1&" +form_d;
    if($('#e_name').val() == ''){
    $('.snackbar').html('Please Enter Name');
    my_toast();
    return false;
   }
   if($('#e_value').val() == ''){
    $('.snackbar').html('Please Enter Tagline');
    my_toast();
    return false;
   }
   if($('#e_msg').val() == ''){
    $('.snackbar').html('Please Enter Message');
    my_toast();
    return false;
   }
skils_action(form);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/testimonial/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
              // alert(data.data);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_testimonial').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_testimonial').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

})



$$(document).on('pageInit', '.page[data-page="experience"]', function (e) {
window.localStorage.setItem("unique",'experience');
window.localStorage.setItem("unique_home",'1');
 var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);
 var form_d = 'secrete=virus&user_id='+user_id+'';
 skils_action(form_d);
                  $("#add_tag").click(function() {
   var form =$('#add_experience_form').serialize()+ "&add_tag=1&" +form_d;
    if($('#name').val() == ''){
    $('.snackbar').html('Please Enter Name');
    my_toast();
    return false;
   }
   if($('#s_value').val() == ''){
    $('.snackbar').html('Please Enter Duration');
    my_toast();
    return false;
   }
   if($('#msg').val() == ''){
    $('.snackbar').html('Please Enter Message');
    my_toast();
    return false;
   }
skils_action(form);

                  })
                   $("#update_tag").click(function() {
   var form =$('#update_experience_form').serialize()+ "&update_tag=1&" +form_d;
     if($('#e_name').val() == ''){
    $('.snackbar').html('Please Enter Name');
    my_toast();
    return false;
   }
   if($('#e_value').val() == ''){
    $('.snackbar').html('Please Enter Duration');
    my_toast();
    return false;
   }
   if($('#e_msg').val() == ''){
    $('.snackbar').html('Please Enter Message');
    my_toast();
    return false;
   }
skils_action(form);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/experience/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
              // alert(data.data);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_experience').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_experience').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

})
$$(document).on('pageInit', '.page[data-page="offer"]', function (e) {
    window.localStorage.setItem("unique",'offer');
    window.localStorage.setItem("unique_home",'1');
 var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);
 var form_d = 'secrete=virus&user_id='+user_id+'';
 skils_action(form_d);

                  $(".btnsz1").click(function() {
                    $('#image_demo').hide();
                       $('.modal-title').html('Add Offer');
            $('.crop_image').html('Submit');
            $('#add_offer_form')[0].reset();
            $('.edit_img_preview').hide();
            $('.o_btn').attr('id','add_tag');
                  })
                  $(".crop_image").click(function() {
                         $image_crop.croppie('result', {
                                    type: 'canvas',
                                    size: 'viewport'
                                }).then(function(response){
                                  // alert(response);

                                    $('#crop_me_img').val(response);
                                    // $('#div2').show();
                                    // $('#abc').hide();
                                    // $('#div2').css( 'pointer-events', 'none' );
                                    // $('#div3').hide();
                                    
                                       $('#'+ $('.o_btn').attr('id')).trigger( "click" );


                                });
                              });
                                $("#add_tag").click(function() {
                    if('add_tag' == $('.o_btn').attr('id')){
                    // alert('add');

   var form =$('#add_offer_form').serialize()+ "&add_tag=1&" +form_d;
   if($('#upload_image').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Select Iamge');
  my_toast();
  return false;
}
 }else{
   var form =$('#add_offer_form').serialize()+ "&update_tag=1&" +form_d;

 }

if($('#name').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Enter  Title');
  my_toast();
  return false;
}
if($('#s_value').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Enter  Description');
  my_toast();
  return false;
}
skils_action(form);

                  })
                   $("#update_tag").click(function() {
                    alert('update');
   var form =$('#add_offer_form').serialize()+ "&update_tag=1&" +form_d;
skils_action(form);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/offer/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
              // alert(data.data);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_offer').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_offer').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

        document.addEventListener("DOMContentLoaded", function(event) {
                        document.querySelectorAll('img').forEach(function(img){
                            img.onerror = function(){this.style.display='none';};
                        })
                    });
                    (function($) {
                        $(document).ready(function(){
                            // $('#div1').hide();

                            $('#div2').hide();
                            $image_crop = $('#image_demo').croppie({
                                enableExif: true,
                                viewport: {
                                    width:200,
                                    height:200,
                                    type:'square' //circle
                                },
                                boundary:{
                                    width:300,
                                    height:300
                                }
                            });
                             
                            $('#upload_image').on('change', function(){
                                var reader = new FileReader();
                                reader.onload = function (event) {
                                    $image_crop.croppie('bind', {
                                        url: event.target.result
                                    }).then(function(){
                                        console.log('jQuery bind complete');
                                    });
                                }
                                reader.readAsDataURL(this.files[0]);
                                /* $('#uploadimageModal').modal('show');*/
                                $('#image_demo').show();
                                $('#imagePreview0').hide();
                            });

                          

                        });
                    })(jQuery);


                        function checkfile(sender) {
                        var validExts = new Array(".jpg", ".png");
                        var fileExt = sender.value;
                        fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
                        if (validExts.indexOf(fileExt) < 0) {
                        alert("Invalid file selected, valid files are of " +
                           validExts.toString() + " types.");
                           //document.getElementById('upload_form').reset();
                           document.getElementById("image").value = "";

                        return false;
                        }
                        else return true;
                        }
  $(function () {
                $("#image").on("change", function ()
                {
                    var img = $("#image").val();
                    if (img == '') {
                        $("#imagePreview0").removeAttr("style");
                    }
                    var files = !!this.files ? this.files : [];
                    if (!files.length || !window.FileReader)
                        return; // no file selected, or no FileReader support

                    if (/^image/.test(files[0].type)) { // only image file
                        var reader = new FileReader(); // instance of the FileReader
                        reader.readAsDataURL(files[0]); // read the local file

                        reader.onloadend = function () { // set image data as background of div
                            $("#imagePreview0").css("background-image", "url(" + this.result + ")");
                        }
                    }
                });
            });
})



$$(document).on('pageInit', '.page[data-page="gallery"]', function (e) {
  window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'gallery');
 var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);
 var form_d = 'secrete=virus&user_id='+user_id+'';
 skils_action(form_d);

                  $(".btnsz1").click(function() {
                    $('#image_demo').hide();
                       $('.modal-title').html('Add Image');
            $('.crop_image').html('Submit');
            $('#add_gallery_form')[0].reset();
            $('.edit_img_preview').hide();
            $('.o_btn').attr('id','add_tag');
                  })
                  $(".crop_image").click(function() {
                         $image_crop.croppie('result', {
                                    type: 'canvas',
                                    size: 'viewport'
                                }).then(function(response){
                                  // alert(response);

                                    $('#crop_me_img').val(response);
                                    // $('#div2').show();
                                    // $('#abc').hide();
                                    // $('#div2').css( 'pointer-events', 'none' );
                                    // $('#div3').hide();
                                    
                                       $('#'+ $('.o_btn').attr('id')).trigger( "click" );


                                });
                              });
                                $("#add_tag").click(function() {
                    if('add_tag' == $('.o_btn').attr('id')){
                    // alert('add');

   var form =$('#add_gallery_form').serialize()+ "&add_tag=1&" +form_d;
 }else{
   var form =$('#add_gallery_form').serialize()+ "&update_tag=1&" +form_d;

 }

if($('#upload_image').val() == ''){
    $('.snackbar').html('Please Select Image');
    my_toast();
    return false;
   }
   
skils_action(form);

                  })
                   $("#update_tag").click(function() {
                    alert('update');
   var form =$('#add_gallery_form').serialize()+ "&update_tag=1&" +form_d;
skils_action(form);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/gallery/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
              // alert(dataType.data);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_gallery').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_gallery').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

        document.addEventListener("DOMContentLoaded", function(event) {
                        document.querySelectorAll('img').forEach(function(img){
                            img.onerror = function(){this.style.display='none';};
                        })
                    });
                    (function($) {
                        $(document).ready(function(){
                            // $('#div1').hide();
                            
                            $('#div2').hide();
                            $image_crop = $('#image_demo').croppie({
                                enableExif: true,
                                viewport: {
                                    width:200,
                                    height:200,
                                    type:'square' //circle
                                },
                                boundary:{
                                    width:300,
                                    height:300
                                },
                                enableOrientation: true
                            });
                            $('.rotate-ccw').click(function() {
          // alert('fdfdfdfdd');
        
    $image_crop.croppie('rotate', '90');
        });
                             
                            $('#upload_image').on('change', function(){
                              $('.cropit_div').show();
                                var reader = new FileReader();
                                reader.onload = function (event) {
                                    $image_crop.croppie('bind', {
                                        url: event.target.result
                                    }).then(function(){
                                        console.log('jQuery bind complete');
                                    });
                                }
                                reader.readAsDataURL(this.files[0]);
                                /* $('#uploadimageModal').modal('show');*/
                                $('#image_demo').show();
                                $('#imagePreview0').hide();
                            });

                          

                        });
                    })(jQuery);


                        function checkfile(sender) {
                        var validExts = new Array(".jpg", ".png");
                        var fileExt = sender.value;
                        fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
                        if (validExts.indexOf(fileExt) < 0) {
                        alert("Invalid file selected, valid files are of " +
                           validExts.toString() + " types.");
                           //document.getElementById('upload_form').reset();
                           document.getElementById("image").value = "";

                        return false;
                        }
                        else return true;
                        }
  $(function () {
                $("#image").on("change", function ()
                {
                    var img = $("#image").val();
                    if (img == '') {
                        $("#imagePreview0").removeAttr("style");
                    }
                    var files = !!this.files ? this.files : [];
                    if (!files.length || !window.FileReader)
                        return; // no file selected, or no FileReader support

                    if (/^image/.test(files[0].type)) { // only image file
                        var reader = new FileReader(); // instance of the FileReader
                        reader.readAsDataURL(files[0]); // read the local file

                        reader.onloadend = function () { // set image data as background of div
                            $("#imagePreview0").css("background-image", "url(" + this.result + ")");
                        }
                    }
                });
            });
})




$$(document).on('pageInit', '.page[data-page="memberships"]', function (e) {
  window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'memberships');
 var user_id =  window.localStorage.getItem("user_id");
 $('#user_id_q').val(user_id);
 
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);
 // var form_d = 'secrete=virus&user_id='+user_id+'';
  var formData = new FormData($("#add_memberships_form")[0]); 
 skils_action(formData);

                  $(".btnsz1").click(function() {

                    $('#image_demo').hide();
                       $('.modal-title').html('Add Memberships');
            $('.crop_image').html('Submit');

            $('.imgd').attr('id','image');
            $('#add_memberships_form')[0].reset();
            $('#imagePreview0').hide();
            $('.o_btn').attr('id','add_tag');
            $('#action').attr('name','add_tag');
                  })
                
                                $("#add_tag").click(function() {
                    if('add_tag' == $('.o_btn').attr('id')){
   
  var formData = new FormData($("#add_memberships_form")[0]);                    
     if($('#name').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Enter Title');
  my_toast();
  return false;
}
 if($('#image').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Select Image');
  my_toast();
  return false;
}   
  if($('#s_value').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Enter Description');
  my_toast();
  return false;
}                 
 }else{
  var formData = new FormData($("#add_memberships_form")[0]); 
   if($('#name').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Enter Title');
  my_toast();
  return false;
}

  if($('#s_value').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Enter Description');
  my_toast();
  return false;
}                 
 }

 
skils_action(formData);

                  })
                   $("#update_tag").click(function() {
                    alert('update');
   var formData = new FormData($("#add_memberships_form")[0]); 
skils_action(formData);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/membership/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false, 
            success: function(data) {
              // alert(data.status);
              // alert(data.data);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_membership').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_membership').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

     
                  


                        function checkfile(sender) {
                        var validExts = new Array(".jpg", ".png");
                        var fileExt = sender.value;
                        fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
                        if (validExts.indexOf(fileExt) < 0) {
                        alert("Invalid file selected, valid files are of " +
                           validExts.toString() + " types.");
                           //document.getElementById('upload_form').reset();
                           document.getElementById("image").value = "";

                        return false;
                        }
                        else return true;
                        }
                            
 $(function () {

     $("#uploadFile0").on("change", function ()
                           {
                               var img = $("#uploadFile0").val();
                               alert(img);
                               if (img == '') {
                                   $("#imagePreview0").removeAttr("style");
                               }
                               var files = !!this.files ? this.files : [];
                               if (!files.length || !window.FileReader)
                                   return; // no file selected, or no FileReader support

                               if (/^image/.test(files[0].type)) { // only image file
                                   var reader = new FileReader(); // instance of the FileReader
                                   reader.readAsDataURL(files[0]); // read the local file

                                   reader.onloadend = function () { // set image data as background of div
                                       $("#imagePreview0").css("background-image", "url(" + this.result + ")");
                                   }
                               }
                           });
                $("#image").on("change", function ()
                {
                  // alert('dsds')
                    var img = $("#image").val();
                    if (img == '') {
                        $("#imagePreview0").removeAttr("style");
                    }
                    var files = !!this.files ? this.files : [];
                    if (!files.length || !window.FileReader)
                        return; // no file selected, or no FileReader support

                    if (/^image/.test(files[0].type)) { // only image file
                        var reader = new FileReader(); // instance of the FileReader
                        reader.readAsDataURL(files[0]); // read the local file
                        // alert(this.result);
                        reader.onloadend = function () { // set image data as background of div
                          $("#imagePreview0").css('display','inline-block');
                            $("#imagePreview0").css("background-image", "url(" + this.result + ")");
                        }
                    }
                });
            });
})
$$(document).on('pageInit', '.page[data-page="company_logo"]', function (e) {
   window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'company_logo');
var user_id =  window.localStorage.getItem("user_id"); 
 var referral =  window.localStorage.getItem("referral"); 
 var company_img =  window.localStorage.getItem("company_img"); 
 var bg ='url("https://digitalbcards.in/upload/'+company_img+'")';
                            $("#imagePreview0").css("background-image",bg);
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
   $('#user_idq').val(user_id);
     $(function () {
                           $("#uploadFile0").on("change", function ()
                           {
                               var img = $("#uploadFile0").val();
                               if (img == '') {
                                   $("#imagePreview0").removeAttr("style");
                               }
                               var files = !!this.files ? this.files : [];
                               if (!files.length || !window.FileReader)
                                   return; // no file selected, or no FileReader support

                               if (/^image/.test(files[0].type)) { // only image file
                                   var reader = new FileReader(); // instance of the FileReader
                                   reader.readAsDataURL(files[0]); // read the local file

                                   reader.onloadend = function () { // set image data as background of div
                                       $("#imagePreview0").css("background-image", "url(" + this.result + ")");
                                   }
                               }
                           });
                       });
       document.addEventListener("DOMContentLoaded", function(event) {
                        document.querySelectorAll('img').forEach(function(img){
                            img.onerror = function(){this.style.display='none';};
                        })
                    });
                    (function($) {
                        $(document).ready(function(){
                            // $('#div1').hide();
                            $('#div2').hide();
                            $image_crop = $('#image_demo').croppie({
                                enableExif: true,
                                viewport: {
                                    width:200,
                                    height:200,
                                    type:'square' //circle
                                },
                                boundary:{
                                    width:300,
                                    height:300
                                }
                            });

                            $('#upload_image').on('change', function(){
                                var reader = new FileReader();
                                reader.onload = function (event) {
                                    $image_crop.croppie('bind', {
                                        url: event.target.result
                                    }).then(function(){
                                        console.log('jQuery bind complete');
                                    });
                                }
                                reader.readAsDataURL(this.files[0]);
                                /* $('#uploadimageModal').modal('show');*/
                                $('#image_demo').show();
                                $('#imagePreview0').hide();
                            });

                            $('.crop_image').click(function(event){
                               
                                $image_crop.croppie('result', {
                                    type: 'canvas',
                                    size: 'viewport'
                                }).then(function(response){
                                    // alert(response);
                                    $('#crop_me_img').val(response);
                                    // $('#div2').show();
                                    // $('#abc').hide();
                                    // $('#div2').css( 'pointer-events', 'none' );
                                    // $('#div3').hide();
                                       $('#save_button').trigger( "click" );


                                })
                            });

                        });
                    })(jQuery);
  $("#save_button").click(function() {
                    
   
  var formData = new FormData($("#company_form")[0]);                    
 // alert(formData);
 
if($('#upload_image').val() == ''){
   $('.snackbar').html('Please Select Image..!');
               my_toast();
  return false;
}
 

   $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/company_logo/", 
            method: "POST",
            data:formData, 
            dataType:"json",            
           contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false, 
            success: function(data) {
              // alert(data.message);
              $('.snackbar').html(data.message);
               my_toast();
    // $('.loader').css('display','none');
     var email =  window.localStorage.getItem("email");
update_profile(email);
    setTimeout(function(){ 

     $$('.backpage').trigger('click');
    $('.loader').css('display','none');
     }, 2000);
    // location.reload();

            }
          })
                              })

})
$$(document).on('pageInit', '.page[data-page="key_client"]', function (e) {
    window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'key_client');
 var user_id =  window.localStorage.getItem("user_id");
 $('#user_id_q').val(user_id);
 
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);
 // var form_d = 'secrete=virus&user_id='+user_id+'';
  var formData = new FormData($("#add_key_client_form")[0]); 
 skils_action(formData);

                  $(".btnsz1").click(function() {

                    $('#image_demo').hide();
                       $('.modal-title').html('Add Key Client');
            $('.crop_image').html('Submit');

            $('.imgd').attr('id','image');
            $('#add_key_client_form')[0].reset();
            $('#imagePreview0').hide();
            $('.o_btn').attr('id','add_tag');
            $('#action').attr('name','add_tag');
                  })
                
                                $("#add_tag").click(function() {
                    if('add_tag' == $('.o_btn').attr('id')){
   
  var formData = new FormData($("#add_key_client_form")[0]); 
 if($('#name').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Enter Title');
  my_toast();
  return false;
}
    if($('#image').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Select Iamge');
  my_toast();
  return false;
} 
             
 }else{
  var formData = new FormData($("#add_key_client_form")[0]); 
  
 }
 if($('#name').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Enter Title');
  my_toast();
  return false;
}
  if($('#s_value').val() == ''){
  // alert('fdf');
  $('.snackbar').html('Please Enter Description');
  my_toast();
  return false;
}
skils_action(formData);

                  })
                   $("#update_tag").click(function() {
                    alert('update');
   var formData = new FormData($("#add_key_client_form")[0]); 
skils_action(formData);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/key_client/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false, 
            success: function(data) {
              // alert(data.status);
              // alert(data.data);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_key_client').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_key_client').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

     
                  


                        function checkfile(sender) {
                        var validExts = new Array(".jpg", ".png");
                        var fileExt = sender.value;
                        fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
                        if (validExts.indexOf(fileExt) < 0) {
                        alert("Invalid file selected, valid files are of " +
                           validExts.toString() + " types.");
                           //document.getElementById('upload_form').reset();
                           document.getElementById("image").value = "";

                        return false;
                        }
                        else return true;
                        }
                            
 $(function () {

     $("#uploadFile0").on("change", function ()
                           {
                               var img = $("#uploadFile0").val();
                               alert(img);
                               if (img == '') {
                                   $("#imagePreview0").removeAttr("style");
                               }
                               var files = !!this.files ? this.files : [];
                               if (!files.length || !window.FileReader)
                                   return; // no file selected, or no FileReader support

                               if (/^image/.test(files[0].type)) { // only image file
                                   var reader = new FileReader(); // instance of the FileReader
                                   reader.readAsDataURL(files[0]); // read the local file

                                   reader.onloadend = function () { // set image data as background of div
                                       $("#imagePreview0").css("background-image", "url(" + this.result + ")");
                                   }
                               }
                           });
                $("#image").on("change", function ()
                {
                  // alert('dsds')
                    var img = $("#image").val();
                    if (img == '') {
                        $("#imagePreview0").removeAttr("style");
                    }
                    var files = !!this.files ? this.files : [];
                    if (!files.length || !window.FileReader)
                        return; // no file selected, or no FileReader support

                    if (/^image/.test(files[0].type)) { // only image file
                        var reader = new FileReader(); // instance of the FileReader
                        reader.readAsDataURL(files[0]); // read the local file
                        // alert(this.result);
                        reader.onloadend = function () { // set image data as background of div
                          $("#imagePreview0").css('display','inline-block');
                            $("#imagePreview0").css("background-image", "url(" + this.result + ")");
                        }
                    }
                });
            });
})
$$(document).on('pageInit', '.page[data-page="education"]', function (e) {
    window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'education');
 var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);
 var form_d = 'secrete=virus&user_id='+user_id+'';
 skils_action(form_d);
                  $("#add_tag").click(function() {
   var form =$('#add_education_form').serialize()+ "&add_tag=1&" +form_d;
     if($('#name').val() == ''){
    $('.snackbar').html('Please Enter Title');
    my_toast();
    return false;
   }
  
   if($('#msg').val() == ''){
    $('.snackbar').html('Please Enter Description');
    my_toast();
    return false;
   }
skils_action(form);

                  })
                   $("#update_tag").click(function() {
   var form =$('#update_education_form').serialize()+ "&update_tag=1&" +form_d;
    if($('#e_name').val() == ''){
    $('.snackbar').html('Please Enter Title');
    my_toast();
    return false;
   }
  
   if($('#e_msg').val() == ''){
    $('.snackbar').html('Please Enter Description');
    my_toast();
    return false;
   }
skils_action(form);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/education/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
              // alert(data.data);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_education').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_education').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

})
$$(document).on('pageInit', '.page[data-page="payment_link"]', function (e) {
 window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'payment_link');
 var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);
 var form_d = 'secrete=virus&user_id='+user_id+'';
 skils_action(form_d);
                  $("#add_tag").click(function() {
   var form =$('#add_payment_link_form').serialize()+ "&add_tag=1&" +form_d;
   if($('#name').val() == ''){
    $('.snackbar').html('Please Enter  Getway name');
    my_toast();
    return false;
   }
   if($('#s_value').val() == ''){
    $('.snackbar').html('Please Enter Link');
    my_toast();
    return false;
   }
skils_action(form);

                  })
                   $("#update_tag").click(function() {
   var form =$('#update_payment_link_form').serialize()+ "&update_tag=1&" +form_d;
   if($('#e_name').val() == ''){
    $('.snackbar').html('Please Enter  Getway name');
    my_toast();
    return false;
   }
   if($('#e_value').val() == ''){
    $('.snackbar').html('Please Enter Link');
    my_toast();
    return false;
   }
skils_action(form);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/payment_link/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
              // alert(data.data);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_payment_link').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_payment_link').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

})
$$(document).on('pageInit', '.page[data-page="social_link"]', function (e) {
 window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'social_link');
 var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);
 var form_d = 'secrete=virus&user_id='+user_id+'';
 skils_action(form_d);
                  $("#add_tag").click(function() {
                    // alert($('#s_name').val());
   var form =$('#add_social_link_form').serialize()+ "&add_tag=1&" +form_d;
  
   if($('#s_value').val() == ''){
    $('.snackbar').html('Please Enter Link');
    my_toast();
    return false;
   }
skils_action(form);

                  })
                   $("#update_tag").click(function() {
   var form =$('#update_social_link_form').serialize()+ "&update_tag=1&" +form_d;
   if($('#e_value').val() == ''){
    $('.snackbar').html('Please Enter Link');
    my_toast();
    return false;
   }
skils_action(form);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   

                
 
                                $.ajax({
            url: "https://digitalbcards.in/api/social_link/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
              // alert(data.title);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#s_name').html('');
                 $('#e_name').html('');

                 $('#s_name').append(data.title);
                 $('#e_name').append(data.title);
                 $('#my_social_link').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
     $('#s_name').html('');
                 $('#e_name').html('');
                 $('#my_social_link').html(data.data);
                 $('#s_name').append(data.title);
                 $('#e_name').append(data.title);
                 
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

})
$$(document).on('pageInit', '.page[data-page="product"]', function (e) {
window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'product');
 var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);
 var form_d = 'secrete=virus&user_id='+user_id+'';
 skils_action(form_d);
                  $("#add_tag").click(function() {
   var form =$('#add_product_form').serialize()+ "&add_tag=1&" +form_d;
   if($('#name').val() == ''){
    $('.snackbar').html('Please Enter Name');
    my_toast();
    return false;
   }
   if($('#s_value').val() == ''){
    $('.snackbar').html('Please Enter Description');
    my_toast();
    return false;
   }
skils_action(form);

                  })
                   $("#update_tag").click(function() {
   var form =$('#update_product_form').serialize()+ "&update_tag=1&" +form_d;
   if($('#e_name').val() == ''){
    $('.snackbar').html('Please Enter Name');
    my_toast();
    return false;
   }
   if($('#e_value').val() == ''){
    $('.snackbar').html('Please Enter Description');
    my_toast();
    return false;
   }
skils_action(form);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/product/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
              // alert(data.data);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_product').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_product').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

})
$$(document).on('pageInit', '.page[data-page="skils"]', function (e) {
window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'skils');
 var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 // myApp.alert(user_id);
 var form_d = 'secrete=virus&user_id='+user_id+'';
 skils_action(form_d);
                  $("#add_tag").click(function() {

   var form =$('#add_expertise_form').serialize()+ "&add_tag=1&" +form_d;
   if($('.name').val() == ''){
    // alert('fdfd');
     $('.snackbar').html('Please Enter name');
     my_toast();
    return false;
   }
skils_action(form);

                  })
                   $("#update_tag").click(function() {
   var form =$('#update_expertise_form').serialize()+ "&update_tag=1&" +form_d;
   if($('#e_name').val() == ''){
    // alert('fdfd');
     $('.snackbar').html('Please Enter name');
     my_toast();
    return false;
   }
    // return false;

skils_action(form);

                  })
 function skils_action(form_data){
 // alert(form_data);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/skils/", 
            method: "POST",
            data:form_data, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
              // alert(data.data);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_skils').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_skils').html(data.data);
            $('#add_expertise').modal('hide');
            $('#update_expertise').modal('hide');
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
 } 

})

$$(document).on('pageInit', '.page[data-page="referral"]', function (e) {
  window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'referral');
  var referral =  window.localStorage.getItem("referral");
 var user_id =  window.localStorage.getItem("user_id");
 // alert(referral)
 $('#code').val(referral);

 $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
      $.ajax({
            url: "https://digitalbcards.in/api/referral/", 
            method: "POST",
            data:{secrete:"virus",referral:referral,user_id:user_id}, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.active);
              $('#active_count').html(data.active);
              $('#view_count').html(data.view_count);
              $('#count').html(data.count);
              $('#end_count').html(data.end);
              

    $('.loader').css('display','none');
                // location.reload();

          }
        });  


});
$$(document).on('pageInit', '.page[data-page="company"]', function (e) {
    window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'company');
  var editor = CKEDITOR.replace('editor2');
 var user_id =  window.localStorage.getItem("user_id"); 
 var referral =  window.localStorage.getItem("referral"); 
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
 
 var company_name =  window.localStorage.getItem("company_name"); 
 var gst_no =  window.localStorage.getItem("gst_no"); 
 var gst_img =  window.localStorage.getItem("gst_img"); 
 // alert(gst_no);
 var bg ='url("https://digitalbcards.in/upload/'+gst_img+'")';
                            $("#imagePreview0").css("background-image",bg);

 var vision =  window.localStorage.getItem("vision"); 
 var mission =  window.localStorage.getItem("mission"); 
 var about_comp =  window.localStorage.getItem("about_comp"); 
 var comp_address =  window.localStorage.getItem("comp_address"); 
 var map_link =  window.localStorage.getItem("map_link"); 
 var about_cyoutube =  window.localStorage.getItem("about_cyoutube"); 
// alert(fb_url);
 $('#user_idq').val(user_id);
 $('#c_name').val(company_name);
 $('#vision').val(vision);
 $('#mission').val(mission);
 $('#gst_no').val(gst_no);
 $('#about_comp').val(about_comp);
 CKEDITOR.instances['editor2'].setData(about_comp)
 // CKEDITOR.instances.editor.setData(about_comp);
 $('#comp_address').val(comp_address);
 $('#map_link').val(map_link);
 $('#about_cyoutube').val(about_cyoutube);

 $(function () {
                           $("#uploadFile0").on("change", function ()
                           {
                               var img = $("#uploadFile0").val();
                               if (img == '') {
                                   $("#imagePreview0").removeAttr("style");
                               }
                               var files = !!this.files ? this.files : [];
                               if (!files.length || !window.FileReader)
                                   return; // no file selected, or no FileReader support

                               if (/^image/.test(files[0].type)) { // only image file
                                   var reader = new FileReader(); // instance of the FileReader
                                   reader.readAsDataURL(files[0]); // read the local file

                                   reader.onloadend = function () { // set image data as background of div
                                       $("#imagePreview0").css("background-image", "url(" + this.result + ")");
                                   }
                               }
                           });
                       });
       document.addEventListener("DOMContentLoaded", function(event) {
                        document.querySelectorAll('img').forEach(function(img){
                            img.onerror = function(){this.style.display='none';};
                        })
                    });
                    (function($) {
                        $(document).ready(function(){
                            // $('#div1').hide();
                            $('#div2').hide();
                            $image_crop = $('#image_demo').croppie({
                                enableExif: true,
                                viewport: {
                                    width:200,
                                    height:200,
                                    type:'square' //circle
                                },
                                boundary:{
                                    width:300,
                                    height:300
                                }
                            });

                            $('#upload_image').on('change', function(){
                                var reader = new FileReader();
                                reader.onload = function (event) {
                                    $image_crop.croppie('bind', {
                                        url: event.target.result
                                    }).then(function(){
                                        console.log('jQuery bind complete');
                                    });
                                }
                                reader.readAsDataURL(this.files[0]);
                                /* $('#uploadimageModal').modal('show');*/
                                $('#image_demo').show();
                                $('#imagePreview0').hide();
                            });

                            $('.crop_image').click(function(event){
                               
                                $image_crop.croppie('result', {
                                    type: 'canvas',
                                    size: 'viewport'
                                }).then(function(response){
                                    // alert(response);
                                    $('#crop_me_img').val(response);
                                    // $('#div2').show();
                                    // $('#abc').hide();
                                    // $('#div2').css( 'pointer-events', 'none' );
                                    // $('#div3').hide();
                                       $('#save_button').trigger( "click" );


                                })
                            });

                        });
                    })(jQuery);

    $("#save_button").click(function() {
                    // var content = $( 'textarea.editor' ).val();
                    //alert( );
                    $('#about_comp').val(editor.getData());
// $('#about_me_vl').val(editor.getData());
   // var form =$('#contact_form').serialize();
     var formData = new FormData($("#contact_form")[0]);                    
 // alert(formData);
 

                        // alert(form);
                         if($('#c_name').val() == ''){
                          $('.snackbar').html('Enter company name');
                          my_toast();
                          return false;
                        }
                        if($('#comp_address').val() == ''){
                          $('.snackbar').html('Enter Address');
                          my_toast();
                          return false;
                        }

$('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/company/", 
            method: "POST",
            data:formData,  
            dataType:"json",  
            contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,           
           
            success: function(data) {
              // alert(data.status);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
  
    $('.loader').css('display','none');
                my_toast();
                 // alert(data.message);
            // location.reload();

              }else{
               
                 $('.snackbar').html(data.message);
  
                my_toast();
                 var email =  window.localStorage.getItem("email");
update_profile(email);
    setTimeout(function(){ 

     $$('.backpage').trigger('click');
    $('.loader').css('display','none');
     }, 2000);
    // $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        });  
                      

                      })

 })
$$(document).on('pageInit', '.page[data-page="contact_detail"]', function (e) {
  window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'contact_detail');
 var user_id =  window.localStorage.getItem("user_id"); 
 var mobile =  window.localStorage.getItem("mobile"); 
 var email =  window.localStorage.getItem("email"); 
 var whatsapp_no =  window.localStorage.getItem("whatsapp_no"); 
 var skype =  window.localStorage.getItem("skype"); 
 var address =  window.localStorage.getItem("address"); 
 var address_map_link =  window.localStorage.getItem("address_map_link"); 
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');

 var fb_url =  window.localStorage.getItem("fb_url"); 
// alert(address);
 $('#user_idq').val(user_id);
 $('#phone').val(mobile);
 $('#email').val(email);
 $('#whatsapp_no').val(whatsapp_no);
 $('#skype').val(skype);
 $('#address').val(address);
 $('#address_map_link').val(address_map_link);
 $('#fb_url').val(fb_url);

  $("#phone").keypress(function (e) {
                 //if the letter is not digit then display error and don't type anything
                 if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    //display error message
                    //$("#errmsg").html("Digits Only").show().fadeOut("slow");
                           return false;
                }
               });

              $("#whatsapp_no").keypress(function (e) {
                 //if the letter is not digit then display error and don't type anything
                 if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    //display error message
                    //$("#errmsg").html("Digits Only").show().fadeOut("slow");
                           return false;
                }
               });


                  $("#save_button").click(function() {
                    // var content = $( 'textarea.editor' ).val();
                    //alert( );
                     
// $('#about_me_vl').val(editor.getData());
   var form =$('#contact_form').serialize();
                        // alert(form);
                        if($('#email').val() == ''){
                          // alert('fdfd');
                 $('.snackbar').html('Please Enter Email...!');
                 my_toast();
                          return false;
                        }else{
                           var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;  
   if(!emailReg.test($('#email').val())) {  
         $('.snackbar').html('Please Enter Valid Email...!');
                 my_toast();
                          return false;
   }    
                        }
                        if($('#whatsapp_no').val().length != 10){
                          // alert('fdfd');
                 $('.snackbar').html('Please Enter Valid Whatsapp Number...!');
                 my_toast();
                          return false;
                        }
                        if($('#phone').val().length != 10){
                          // alert('fdfd');
                 $('.snackbar').html('Please Enter Valid Phone Number...!');
                 my_toast();
                          return false;
                        }
$('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/contact_info/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
  
    $('.loader').css('display','none');
                my_toast();
                 // alert(data.message);
            // location.reload();

              }else{
               
                 $('.snackbar').html(data.message);
  
                my_toast();
                 var email =  window.localStorage.getItem("email");
update_profile(email);
    setTimeout(function(){ 

     $$('.backpage').trigger('click');
    $('.loader').css('display','none');
     }, 2000);
    // $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        });  
                      

                      })

})
$$(document).on('pageInit', '.page[data-page="forgot_password"]', function (e) {
    window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'forgot_password');
                  $("#save_button").click(function() {
 
  var form =$('#forgot_password').serialize();
  alert(form);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/forgot_password/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.message);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
  
    $('.loader').css('display','none');
                my_toast();
                 // alert(data.message);
            // location.reload();

              }else{
               
                 $('.snackbar').html(data.message);
  
                my_toast();
            
    // $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        });  
})
})
$$(document).on('pageInit', '.page[data-page="upload_profile"]', function (e) {
 window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'upload_profile');
var user_id =  window.localStorage.getItem("user_id"); 
 var referral =  window.localStorage.getItem("referral"); 
 var user_image =  window.localStorage.getItem("user_image"); 
 // alert(user_image);
 var bg ='url("https://digitalbcards.in/upload/'+user_image+'")';
                            $("#imagePreview0").css("background-image",bg);
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
   $('#user_idq').val(user_id);
     $(function () {
                           $("#uploadFile0").on("change", function ()
                           {
                               var img = $("#uploadFile0").val();
                               if (img == '') {
                                   $("#imagePreview0").removeAttr("style");
                               }
                               var files = !!this.files ? this.files : [];
                               if (!files.length || !window.FileReader)
                                   return; // no file selected, or no FileReader support

                               if (/^image/.test(files[0].type)) { // only image file
                                   var reader = new FileReader(); // instance of the FileReader
                                   reader.readAsDataURL(files[0]); // read the local file

                                   reader.onloadend = function () { // set image data as background of div
                                       $("#imagePreview0").css("background-image", "url(" + this.result + ")");
                                   }
                               }
                           });
                       });
       document.addEventListener("DOMContentLoaded", function(event) {
                        document.querySelectorAll('img').forEach(function(img){
                            img.onerror = function(){this.style.display='none';};
                        })
                    });
                    (function($) {
                        $(document).ready(function(){
                            // $('#div1').hide();
                            $('#div2').hide();
                            $image_crop = $('#image_demo').croppie({
                                enableExif: true,
                                viewport: {
                                    width:200,
                                    height:200,
                                    type:'square' //circle
                                },
                                boundary:{
                                    width:300,
                                    height:300
                                },
                                  
    enableOrientation: true
                              
                            });
                             
                             $('.rotate-cw').click(function() {
                              // alert('fdfd');
          $('#image_demo').cropit('rotateCW');
        });
        $('.rotate-ccw').click(function() {
          // alert('fdfdfdfdd');
        
    $image_crop.croppie('rotate', '90');
        });

                            $('#upload_image').on('change', function(){
                              $('.cropit_div').show();
                                var reader = new FileReader();
                                reader.onload = function (event) {
                                    $image_crop.croppie('bind', {
                                        url: event.target.result
                                    }).then(function(){
                                        console.log('jQuery bind complete');
                                    });
                                }
                                reader.readAsDataURL(this.files[0]);
                                /* $('#uploadimageModal').modal('show');*/
                                $('#image_demo').show();
                                $('#imagePreview0').hide();
                            });

                            $('.crop_image').click(function(event){
                               
                                $image_crop.croppie('result', {
                                    type: 'canvas',
                                    size: 'viewport'
                                }).then(function(response){
                                    // alert(response);
                                    $('#crop_me_img').val(response);
                                    // $('#div2').show();
                                    // $('#abc').hide();
                                    // $('#div2').css( 'pointer-events', 'none' );
                                    // $('#div3').hide();
                                       $('#save_button').trigger( "click" );


                                })
                            });

                        });
                    })(jQuery);
  $("#save_button").click(function() {
                    
   
  var formData = new FormData($("#profile_form")[0]);                    
 // alert(formData);
 

      if($('#upload_image').val() == ''){
        // alert('gfgf');
          $('.snackbar').html('Please Select image..!');
               my_toast();
        return false;
      } 

   $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/upload_profile/", 
            method: "POST",
            data:formData, 
            dataType:"json",            
           contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false, 
            success: function(data) {
              // alert(data.message);
              $('.snackbar').html(data.message);
               my_toast();
 var email =  window.localStorage.getItem("email");
update_profile(email);
    setTimeout(function(){ 

     $$('.backpage').trigger('click');
    $('.loader').css('display','none');
     }, 2000);
// location.href = 'upload_profile.html';
    // location.reload();

            }
          })
                              })

})
$$(document).on('pageInit', '.page[data-page="about_me"]', function (e) {
    window.localStorage.setItem("unique_home",'1');
    window.localStorage.setItem("unique",'about_me');
 var editor = CKEDITOR.replace('editor1');
  var referral =  window.localStorage.getItem("referral");
 
 var user_id =  window.localStorage.getItem("user_id");
 var name =  window.localStorage.getItem("name");
 var about_me =  window.localStorage.getItem("about_me");
 var profession =  window.localStorage.getItem("profession");
 var y_tube_link =  window.localStorage.getItem("y_tube_link");
 var website =  window.localStorage.getItem("website");
 // alert(about_me);
 $('#f_name').val(name);
 $('#user_idq').val(user_id);
 $('#editor1').val(about_me);
 $('#profession').val(profession);
 $('#video').val(y_tube_link);
 $('#website').val(website);

  var a= $("#video").val();

                  if (a) {
                    var videoLink = $('#video').val();
                    
                    
                    var myid = getId(videoLink);

                    var mycode = 'https://www.youtube.com/embed/' + myid;

                    $('#video1').attr('src', mycode);
                    
                    $('#title1').val(mycode);
                    $('#title2').val(myid);

                }

                
             $(function () {



                                                        $("#video").on("change", function ()
                                                        {
                                                            var videoLink = $('#video').val();
                                                        
 
                                                            var myid = getId(videoLink);

                                                            var mycode = 'https://www.youtube.com/embed/' + myid;

                                                            $('#video1').attr('src', mycode);
                                                            
                                                             $('#title1').val(mycode);
                                                               $('#title2').val(myid);

                                                        });
                                                    }); 




                                                      function getId(url) {

                                                        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                                                        var match = url.match(regExp);
                                                      // alert(match[2]);
                                                
                                                        if (match && match[2].length == 11) {
                                                        
                                                            return match[2];
                                                            
                                                        } else {
                                                            return 'error';
                                                        }
                                                    }
                   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');

                   $("#save_button").click(function() {
                    // var content = $( 'textarea.editor' ).val();
                    var video_url = $('#video').val();
                    var web_url = $('#website').val();
                    //alert( );
                    if($('#f_name').val() == ''){
                      $('.snackbar').html('Please Enter Full Name ');
                      my_toast();
                      return false;
                    }
url_validate = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
if(!url_validate.test(video_url)){
   
     $('.snackbar').html('Please Enter Valid Video Url ');
                      my_toast();
                      return false;
}

url_validate = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
if(!url_validate.test(web_url)){
   
     $('.snackbar').html('Please Enter Valid Website Url ');
                      my_toast();
                      return false;
}
$('#about_me_vl').val(editor.getData());
   var form =$('#about_me_form').serialize();
                        // alert(form);
$('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/about_me/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
  
    $('.loader').css('display','none');
                my_toast();
                 // alert(data.message);
            // location.reload();

              }else{
               
                 $('.snackbar').html(data.message);
 var email =  window.localStorage.getItem("email");
 update_profile(email);
  
                my_toast();
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        });  
                      

                      })
 


})
$$(document).on('pageInit', '.page[data-page="theme"]', function (e) {
    window.localStorage.setItem("unique_home",'1');
  window.localStorage.setItem("unique",'theme');
var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
 var theme =  window.localStorage.getItem("theme");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
   // alert(theme);
      if(theme == 0){
    $('#theme0').addClass('active');
  }else if(theme == 1){
    $('#theme1').addClass('active');
   }else if(theme == 2){
    $('#theme2').addClass('active');
   }else if(theme == 3){
    $('#theme3').addClass('active');
   }
})
$$(document).on('pageInit', '.page[data-page="redeem"]', function (e) {
    window.localStorage.setItem("unique_home",'1');

  window.localStorage.setItem("unique",'redeem');
 var user_id =  window.localStorage.getItem("user_id");
var form_d = 'secrete=virus&user_id='+user_id+'';
save_redeem(form_d);
  $("#save_button").click(function() {
   var form =$('#redeem_form').serialize()+ "&submit=1&" +form_d;
   if($('#amount').val() == ''){
    $('.snackbar').html('Please Enter AMOUNT');
    my_toast();
    return false;
   }
   if($('#name').val() == ''){
    $('.snackbar').html('Please Enter Name');
    my_toast();
    return false;
   }
   if($('#bank_name').val() == ''){
    $('.snackbar').html('Please Enter Bank Name');
    my_toast();
    return false;
   }
   if($('#account_no').val() == ''){
    $('.snackbar').html('Please Enter Account No');
    my_toast();
    return false;
   }
    if($('#ifsc').val() == ''){
    $('.snackbar').html('Please Enter Ifsc ');
    my_toast();
    return false;
   }
save_redeem(form);

                  })
  function save_redeem(form){
    
 $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
   


 
                                $.ajax({
            url: "https://digitalbcards.in/api/redeem/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
              // alert(data.earning);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#earning').html(' Current wallet = '+ data.earning);
                 $('#approved').html('Approved Reedem  = '+ data.approved);
                 $('#min_reedem').html('MINIMUM AMOUNT CAN BE REEDEM = RS.'+data.min_reedem);
                 $('#max_reedem').html('MAXIMUM AMOUNT CAN BE REEDEM = RS.'+data.min_reedem);
    
  
    $('.loader').css('display','none');
    if(data.message !=''){

                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
                 $('#earning').html(' Current wallet = '+ data.earning);
                 $('#approved').html('Approved Reedem  = '+ data.approved);
                 $('#min_reedem').html('MINIMUM AMOUNT CAN BE REEDEM = RS.'+data.min_reedem);
                 $('#max_reedem').html('MAXIMUM AMOUNT CAN BE REEDEM = RS.'+data.min_reedem);

                 
     $('.snackbar').html(data.message);
      
  
               if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        }); 
  }
})
$$(document).on('pageInit', '.page[data-page="vcard"]', function (e) {
  window.localStorage.setItem("unique",'vcard');
    window.localStorage.setItem("unique_home",'1');

   // check_payment();       
// myFunction();
 var user_id =  window.localStorage.getItem("user_id");
 // alert(user_id);
  $('#user_idd').val(user_id);
  // var redirect = confirm('please make a payment RS 500  to use Bcard features.');
  //  if (redirect == true) {
  //   check_payment();
  //   // alert('fdfd');
  //   // $$('#home').trigger("click");
  //   // location.reload();
  //      // document.forms['customerData'].submit();
  //  }else{
  //   location.reload();
  //   // $$('#home').trigger("click");
  //  }
                      var language =  window.localStorage.getItem("language");
                      // alert(language)

   $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
      $.ajax({
            url: "https://digitalbcards.in/api/message_update/", 
            method: "POST",
            data:{secrete:"virus",language:language,user_id:user_id}, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.email);
              if(data.email != ''){

                $("#about_me").val(data.email_subject);
                        $('#email_subject').val(data.email_subject);
                        $('#whatsapp_template').val(data.whatsapp);
                        $('#sms_template').val(data.sms);
              }else{
                 if(language == 0){
                        $("#customradio1").attr('checked', 'checked');
                        $("#about_me").val('Hello {name},\r\nYou can see my Digital Business Card from given below link:{bcardurl}\n Regards');
                        $('#email_subject').val('View my Digital Business Card.');
                        $('#whatsapp_template').val('Hello  {name},\r\nYou can see my Digital Business Card from given below link:{bcardurl}\n Regards');
                        $('#sms_template').val('Hello  {name},\r\nYou can see my Digital Business Card from given below link:{bcardurl}\n Regards');
                      }else if(language == 1){
                        $("#customradio2").attr('checked', 'checked');
                        $("#about_me").val('हैलो {name},कृपया नीचे दिए गए लिंक से मेरा कार्ड देखें: \n {bcardurl} सादर');
                        $('#email_subject').val('मेरा डिजिटल बीकार्ड देखें।.');
                        $('#whatsapp_template').val('हैलो {name},\nकृपया नीचे दिए गए लिंक से मेरा कार्ड देखें: \n {bcardurl} सादर');
                        $('#sms_template').val('हैलो {name},\nकृपया नीचे दिए गए लिंक से मेरा कार्ड देखें: \n {bcardurl} सादर');
                      }else{
                        $("#customradio3").attr('checked', 'checked');
                        $("#about_me").val('હેલો {name},\n તમે {bcardurl} જોઈ શકો છો શુભેચ્છાઓ');
                        $('#email_subject').val('મારું ડિજિટલ બી કાર્ડ જુઓ.');
                        $('#whatsapp_template').val('હેલો {name},\n પ્લઝ મારા કાર્ડને નીચે આપેલી લિંકથી જોશે: \n {bcardurl} શુભેચ્છાઓ');
                        $('#sms_template').val('હેલો {name},\n પ્લઝ મારા કાર્ડને નીચે આપેલી લિંકથી જોશે: \n {bcardurl} શુભેચ્છાઓ');

                      }
              }

    $('.loader').css('display','none');
                // location.reload();

          }
        });  

                     



$("input[type='radio']").bind( "change", function(event, ui) {
// $(document).on('pagebeforeshow', '.setlanguage', function(){       

   // $(".setlanguage").click(function() {
 
 var user_id =  window.localStorage.getItem("user_id");

 var lan = $(this).val();
    if(lan == 0){
                        $("#customradio1").attr('checked', 'checked');
                        $("#about_me").val('Hello {name},\r\nYou can see my Digital Business Card from given below link:{bcardurl}\n Regards');
                        $('#email_subject').val('View my Digital Business Card.');
                        $('#whatsapp_template').val('Hello  {name},\r\nYou can see my Digital Business Card from given below link:{bcardurl}\n Regards');
                        $('#sms_template').val('Hello  {name},\r\nYou can see my Digital Business Card from given below link:{bcardurl}\n Regards');
                      }else if(lan == 1){
                        $("#customradio2").attr('checked', 'checked');
                        $("#about_me").val('हैलो {name},कृपया नीचे दिए गए लिंक से मेरा कार्ड देखें: \n {bcardurl} सादर');
                        $('#email_subject').val('मेरा डिजिटल बीकार्ड देखें।.');
                        $('#whatsapp_template').val('हैलो {name},\nकृपया नीचे दिए गए लिंक से मेरा कार्ड देखें: \n {bcardurl} सादर');
                        $('#sms_template').val('हैलो {name},\nकृपया नीचे दिए गए लिंक से मेरा कार्ड देखें: \n {bcardurl} सादर');
                      }else{
                        $("#customradio3").attr('checked', 'checked');
                        $("#about_me").val('હેલો {name},\n તમે {bcardurl} જોઈ શકો છો શુભેચ્છાઓ');
                        $('#email_subject').val('મારું ડિજિટલ બી કાર્ડ જુઓ.');
                        $('#whatsapp_template').val('હેલો {name},\n પ્લઝ મારા કાર્ડને નીચે આપેલી લિંકથી જોશે: \n {bcardurl} શુભેચ્છાઓ');
                        $('#sms_template').val('હેલો {name},\n પ્લઝ મારા કાર્ડને નીચે આપેલી લિંકથી જોશે: \n {bcardurl} શુભેચ્છાઓ');

                      }
  })
 $("#save_button").click(function() {
   var form =$('#template_form').serialize();
                        // alert(form);



 
                                $.ajax({
            url: "https://digitalbcards.in/api/message_update/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
              // alert(data.status);
         if(data.status == 0){
                 $('.snackbar').html(data.message);
  
    $('.loader').css('display','none');
                my_toast();
                 // alert(data.message);
            // location.reload();

              }else{
                 if(data.email != ''){

                $("#about_me").val(data.email);
                        $('#email_subject').val(data.email_subject);
                        $('#whatsapp_template').val(data.whatsapp);
                        $('#sms_template').val(data.sms);
              }
                 // alert(data.message);

                 $('.snackbar').html(data.message);
  
                my_toast();
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
          }
        });  
                      

                      })
                
})
$$(document).on('pageInit', '.page[data-page="support"]', function (e) {
  window.localStorage.setItem("unique",'support');
    window.localStorage.setItem("unique_home",'1');

  var user_id =  window.localStorage.getItem("user_id");
  $('#user_idd').val(user_id);
    $(document).on('click', '#save_button', function(){  
// alert('gf');
 

          form =$('#support_form').serialize();
       if($('#query').val() == ''){

        // alert('gfgf');
        $('.snackbar').html('Please Enter Your Query');
        my_toast();
        return false;
       }
       if($('#phone').val() == ''){

        // alert('gfgf');
        $('.snackbar').html('Please Enter Your Phone ');
        my_toast();
        return false;
       }
      // alert(form);

           $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    $('.loader').css('display','flex');
     $.ajax({
            url: "https://digitalbcards.in/api/support/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
              if(data.status == 0){
                $('#support_form')[0].reset();
                // myApp.alert(data.message);
                $('.snackbar').html(data.message);
                my_toast();
    $('.loader').css('display','none');

              }else{

              $('#support_form')[0].reset();
               
                  $('.snackbar').html(data.message);

                my_toast();
          $('.loader').css('display','none');
              }
           
          }
        })
            return false; // for demo
     
})

})


$$(document).on('pageInit', '.page[data-page="settings"]', function (e) {
  window.localStorage.setItem("unique",'settings');
    window.localStorage.setItem("unique_home",'1');

 var user_id =  window.localStorage.getItem("user_id");
 var email =  window.localStorage.getItem("email");
 $('#user_idd').val(user_id);
 $('#emaill').val(email);
    $(document).on('click', '#save_button', function(){  
 
$('#setting_form').validate({ // initialize the plugin
        errorLabelContainer: "#cs-error-note",
   
     errorClass: 'errors',
    rules: {
     
        old_password: {
           
            required: true,
           
            
        },
        password: {
           
            required: true,
            
        },
         re_pass: {
                    equalTo: "#password"
                },
         
        
    },
    messages: {
       
         old_password: {
           
            required: "Please enter  Old Password.",
          
            
        },
        password: {
           
            required: "Please enter  Password.",
            
            
        },
        re_pass:{
           equalTo: "Password Not Match.",
        }
        
        
       
         
    },
        submitHandler: function (form) { // for demo
          form =$('#setting_form').serialize();
       
          // var  email = $('#email').val();
           $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    $('.loader').css('display','flex');
     $.ajax({
            url: "https://digitalbcards.in/api/setting/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
              if(data.status == 0){
                $('#setting_form')[0].reset();
                // myApp.alert(data.message);
                $('.snackbar').html(data.message);
                my_toast();
    $('.loader').css('display','none');

              }else{

              $('#setting_form')[0].reset();
               
                  $('.snackbar').html(data.message);

                my_toast();
          $('.loader').css('display','none');
              }
           
          }
        })
            return false; // for demo
        }
    });
})

})
$$(document).on('pageInit', '.page[data-page="directory"]', function (e) {
window.localStorage.setItem("unique",'directory');
    window.localStorage.setItem("unique_home",'1');

  var search = '';
                      // alert(user_id);
                      get_contacts(search);
                        

    $('#search').on('input', function(e){
      var search = $(this).val();
      // var search = $(this).val();
        get_contacts(search);
       
    })        

        function get_contacts(search){
          // alert(search);
           var email =  window.localStorage.getItem("email");
           var mobile =  window.localStorage.getItem("mobile");
           var whatsapp =  window.localStorage.getItem("whatsapp");
           if(whatsapp == 'undefined'){
            var wh = '';
          
           }else{
            var wh = whatsapp

           }

           $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    $('.loader').css('display','flex');
 var user_id =  window.localStorage.getItem("user_id");
 // alert(search);
                                $.ajax({
            url: "https://digitalbcards.in/api/directory/", 
            method: "POST",
            data:{user_id:user_id,search:search,secrete:"virus",email:email,mobile:mobile,whatsapp:wh}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
// alert(data);
$('#my_leadssss').html(data);

    $('.loader').css('display','none');

            //    $('#username').html(data.name);
             //   $('#user_image').attr("src",'https://digitalbcards.in/upload/'+data.profile_img);
              
            //location.reload();
          }
        });  
                            } 
                          

})
$$(document).on('pageInit', '.page[data-page="viewcard"]', function (e) {
window.localStorage.setItem("unique",'viewcard');
    window.localStorage.setItem("unique_home",'1');

   $(document).on('click', '#pay_button', function() {
make_payment();
   })

})
$$(document).on('pageInit', '.page[data-page="viewcard"]', function (e) {
   // check_payment();       
 var referral =  window.localStorage.getItem("referral");
 // var user_id =  window.localStorage.getItem("user_id");
 // alert(referral)
  
   
   $(document).on('click', '.t1', function() {

    $('.t1').addClass('active');
    $('.t2').removeClass('active');
    $('.t3').removeClass('active');
   });

   $(document).on('click', '.t2', function() {
    // alert('fdfd');
    $('.t2').addClass('active');
    $('.t1').removeClass('active');
    $('.t3').removeClass('active');
   });

   $(document).on('click', '.t3', function() {
    $('.t3').addClass('active');
    $('.t1').removeClass('active');
    $('.t2').removeClass('active');
   });

   $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
 var user_id =  window.localStorage.getItem("user_id");
 // alert(user_id);
                                $.ajax({
            url: "https://digitalbcards.in/api/card_data/", 
            method: "POST",
            data:{zxc:referral,user_id:user_id,secrete:"virus"}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
// alert(data);
$('#card').html(data);

    $('.loader').css('display','none');

            //    $('#username').html(data.name);
             //   $('#user_image').attr("src",'https://digitalbcards.in/upload/'+data.profile_img);
              
            //location.reload();
          }
        });  
})
// $$(document).on('pageLoad', '.page[data-page="home"]', function (e) {
//   alert("page initialize");
//   app.initialize();
// })
 
// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="profile"]', function (e) {
   window.localStorage.setItem("unique",'profile');
     window.localStorage.setItem("unique_home",'1');
   // check_payment();   
   // alert('gfgf');
 var user_id =  window.localStorage.getItem("user_id");
 var referral =  window.localStorage.getItem("referral");
   $('.view_card').attr('onClick', 'view_card("'+referral+'","'+user_id+'");');
})
$$(document).on('pageInit', '.page[data-page="home"]', function (e) {
// alert('dsds');
  // $("#share_form").submit();
// dddd();
// $$('.whatsaapp').trigger("click");
// $(document).on('click', '.whatsaapp', function() {
// alert('dsds');
// })
               window.localStorage.setItem("unique",'home');
               window.localStorage.setItem("unique_home",'0');
  // alert("page initialize");

  $('#receivermobile').bind('copy paste cut',function(e) { 
 e.preventDefault(); //disable cut,copy,paste
 alert('cut,copy & paste options are disabled !!');
 });
  // alert("page hhsja initialize");


 var referral =  window.localStorage.getItem("referral");
 // alert(referral);
 $('.navbar').show();
    $('.back').hide();
  //     var permission = cordova.plugins.permissions;
  // permission.hasPermission(permission.READ_CONTACTS,function(results){
  //           if(!results[permission])
  //           {
  //               permission.requestPermission(permission.READ_CONTACTS,function(results){
  //                   if(results[permission]){
  //                          alert("permission granted");
  //                  }
  //               },)
  //               // alert("permission granted failed");
  //           }
  //       }, 
  //       )

     var email =  window.localStorage.getItem("email");
      $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    $('.loader').css('display','flex');
                     $.ajax({
            url: "https://digitalbcards.in/api/user_profile/", 
            method: "POST",
            data:{email:email,secrete:"virus"}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
                // alert(data.Refferal_id);
               window.localStorage.setItem("payment",data.pay_status);
               window.localStorage.setItem("user_id",data.id);
               window.localStorage.setItem("language",data.language);
               window.localStorage.setItem("referral",data.Refferal_id);
               $('#referral_idd').val(data.Refferal_id);
               window.localStorage.setItem("mobile",data.mobile);
               window.localStorage.setItem("profession",data.profession);
               window.localStorage.setItem("about_me",data.about_me);
               window.localStorage.setItem("skype",data.skype);
               window.localStorage.setItem("address",data.address);
               window.localStorage.setItem("address_map_link",data.address_map_link);
               window.localStorage.setItem("fb_url",data.fb_url);

               window.localStorage.setItem("y_tube_link",data.y_tube_link);
               window.localStorage.setItem("website",data.website);
                
               window.localStorage.setItem("whatsapp",data.whatsapp);
               window.localStorage.setItem("whatsapp_no",data.whatsapp_no);
               window.localStorage.setItem("name",data.name);
               //window.localStorage.setItem("username",data.name);
               window.localStorage.setItem("user_image",data.profile_img);

               window.localStorage.setItem("company_name",data.company_name);
               window.localStorage.setItem("vision",data.vision);
               window.localStorage.setItem("mission",data.mission);
               window.localStorage.setItem("about_comp",data.about_comp);
               window.localStorage.setItem("comp_address",data.comp_address);
               window.localStorage.setItem("map_link",data.map_link);
               window.localStorage.setItem("about_cyoutube",data.about_cyoutube);
               window.localStorage.setItem("company_img",data.company_img);
               window.localStorage.setItem("gst_no",data.gst_no);
               window.localStorage.setItem("gst_img",data.gst_img);
               window.localStorage.setItem("theme",data.theme);
var referral =  window.localStorage.getItem("referral");
                   // alert(referral);
              
               // alert(data.fb_url);
                $('#user').html(data.name);
                $('#user_image').attr("src",'https://digitalbcards.in/upload/'+data.profile_img);
                // $('#user_image').css("height",'80px');
                // $('#user_image').css("width",'80px');
               // $('#preloader').hide();
    $('.loader').css('display','none');
                
              
            //location.reload();
          }
        }) 
  app.initialize();
  //alert("app started"); 
 
  var dropdown = document.getElementById('segment');
dropdown.addEventListener('touchstart', function(e) {
    e.stopPropagation();
}, false);
   $(".segment").select2({
     'tags':true,
      placeholder: "Decide Segment"
      
    });


    $(".hh").select2({
   
      placeholder: "Decide Segment"
      
    });



   

   $("#button").click(function() {
      
       var lable = $("#button").text().trim();

       if(lable == "Less") {
         $("#button").text("More");
         $("#test").hide();
       }
       else {
         $("#button").text("Less");
         $("#test").show();
       }
        
      });


      $("#reset_form").click(function() {
      
       $('#share_form')[0].reset();
        
      });
  var list = $('.country-list');
// alert(list);
$(document).on('click', '.flag-container', function() {
  // alert('dl');
  $('.country-list').removeClass('hide');
    // trigger.click();
});

//  var input = document.querySelector("#receivermobile");

//     var a=window.intlTelInput(input, {
//     initialCountry: "auto",
//      geoIpLookup: function(success, failure) {


//     $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//       // alert(resp.country);
//       var countryCode = (resp && resp.country) ? resp.country : "";
//       // alert(countryCode);
//       success(countryCode);

//    $('.country-name').css('color','black');
//     });
//     },

//   hiddenInput: "full_phone",
//   utilsScript: "js/utils.js?1537717752654" // just for formatting/placeholders etc
// });
      // alert(a);
    // Following code will be executed for page with data-page attribute equal to "about"
   
    // myApp.alert(email);
                        // alert('fdfd');
                         


                      var user_id =  window.localStorage.getItem("user_id");
                      // alert(user_id);
                              $.ajax({
            url: "https://digitalbcards.in/api/segment/", 
            method: "POST",
            data:{user_id:user_id,secrete:"virus"}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
// alert(data);
$('#segment').append(data);
$("#segment").trigger('create');
    $('.loader').css('display','none');

            //    $('#username').html(data.name);
             //   $('#user_image').attr("src",'https://digitalbcards.in/upload/'+data.profile_img);
              
            //location.reload();
          }
        });  

                                $.ajax({
            url: "https://digitalbcards.in/api/country/", 
            method: "POST",
            data:{user_id:user_id,secrete:"virus"}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
// alert(data);
$('#cccc').append(data);
$("#cccc").trigger('create');
    $('.loader').css('display','none');

            //    $('#username').html(data.name);
             //   $('#user_image').attr("src",'https://digitalbcards.in/upload/'+data.profile_img);
              
            //location.reload();
          }
        });  
$('.smart-select').on('smartselect:closed');

$(document).on('change', '#cccc', function(){  
  $$('.close-popup').trigger('click');
   setTimeout(function () {
      city=$$(this).val();
   
img = $$("#cccc").find("option:checked").data('image');
name = $$("#cccc").find("option:checked").text();


$('#cc .item-title').html('<img src="'+img+'">');
$('.navbar').show();
// $('#cc .item-title').html('<img src="'+img+'">'+ '&nbsp;&nbsp;' + name +'&nbsp;&nbsp; <i style="font-size:20px" class="fa fa-angle-right"></i>');
// $('.sliding').html('<img src="'+img+'">'+ '&nbsp;&nbsp;' + name);
// $('.item-inner .item-after').html('<img src="'+img+'"> ');    
     }, 100);
})



// $('.navbar').show();

var name = $$("#cccc").find("option:checked").text();
var d= $$("#cccc").find("option:checked").data('image');
// $('.item-inner .item-after').html('<img src="'+d+'"> ');
$('#cc .item-title').html('<img src="'+d+'">');
// $('#cc .item-title').html('<img src="'+d+'">'+ '&nbsp;&nbsp;'+ name   +'&nbsp;&nbsp; <i style="font-size:20px" class="fa fa-angle-right"></i>');
// $('.sliding').html('<img src="'+d+'">'+ '&nbsp;&nbsp;' + name);

                                // $$("#cccc").val(getCookie("timerTasks")).parent().find('.item-after').html($$("#cccc").find("option:checked").data('image'));


                      var user_id =  window.localStorage.getItem("user_id");
                      var language =  window.localStorage.getItem("language");
                      var referral =  window.localStorage.getItem("referral");
                      var name =  window.localStorage.getItem("name");
                      var rrr =  window.localStorage.getItem("referral");
                      var user_image =  window.localStorage.getItem("user_image");
                                var user =  window.localStorage.getItem("user_id");
             $('#user_id').val(user);
             $('#language').val(language);
             
             $('#user_name').val(name);
             
             var mail_link = 'mailto:?subject=Digital%20Bcard&body=Hey%2C%20%20I%20am%20using%20this%20Digital%20Business%20Card.%20I%20loved%20using%20it.%20Have%20a%20look%20at%20it%20from%20the%20below%20link%20%0Ahttps%3A%2F%2Fdigitalbcards.in%2FBcard.php%3Fzxc%3D'+referral+'%20%0A%0A%0ASay%20goodbye%20to%20Cards.%20%20Use%20Digital%20Business%20Cards%20-%20You%20are%20one%20click%20away.%20.%20.%0A%0A%0A'+name;
             var linklind = 'https://www.linkedin.com/shareArticle?mini=true&url=https://digitalbcards.in/Bcard.php?zxc=DBC100751&title=Hey%2C%20%20I%20am%20using%20this%20Digital%20Business%20Card.%20I%20loved%20using%20it.%20Have%20a%20look%20at%20it%20from%20the%20below%20link%20%0Ahttps%3A%2F%2Fdigitalbcards.in%2FBcard.php%3Fzxc%3D'+referral+'%20%0A%0A%0ASay%20goodbye%20to%20Cards.%20%20Use%20Digital%20Business%20Cards%20-%20You%20are%20one%20click%20away.%20.%20.%0A%0A%0A'+name+'&source=LinkedIn';
             var google = 'https://plus.google.com/share?url=https://digitalbcards.in/Bcard.php?zxc='+referral;
             var twiter = 'https://twitter.com/intent/tweet?text=Hey%2C%20%20I%20am%20using%20this%20Digital%20Business%20Card.%20I%20loved%20using%20it.%20Have%20a%20look%20at%20it%20from%20the%20below%20link%20%0Ahttps%3A%2F%2Fdigitalbcards.in%2FBcard.php%3Fzxc%3D'+referral+'%20%0A%0A%0ASay%20goodbye%20to%20Cards.%20%20Use%20Digital%20Business%20Cards%20-%20You%20are%20one%20click%20away.%20.%20.%0A%0A%0A'+name+'&source=&related=shareaholic'
             var fb_url = 'https://www.facebook.com/sharer/sharer.php?u=https://digitalbcards.in/Bcard.php?zxc='+referral+'&quote=Hey,%20%20I%20am%20using%20this%20Digital%20Business%20Card.%20I%20loved%20using%20it.%20Have%20a%20look%20at%20it%20from%20the%20below%20link.Say%20goodbye%20to%20Cards.%20%20Use%20Digital%20Business%20Cards%20-%20You%20are%20one%20click%20away.%20.%20.';
        var wp_link  = 'https://api.whatsapp.com/send?text=Hey%2C%20%20I%20am%20using%20this%20Digital%20Business%20Card.%20I%20loved%20using%20it.%20Have%20a%20look%20at%20it%20from%20the%20below%20link%20%0Ahttps%3A%2F%2Fdigitalbcards.in%2FBcard.php%3Fzxc%3D'+referral+'%20%0A%0A%0ASay%20goodbye%20to%20Cards.%20%20Use%20Digital%20Business%20Cards%20-%20You%20are%20one%20click%20away.%20.%20.%0A%0A%0A'+name;
   $('#wp_link').attr('onClick', 'share_social("'+wp_link+'");');
   $('#fb_link').attr('onClick', 'share_social("'+fb_url+'");');
   $('#twiter').attr('onClick', 'share_social("'+twiter+'");');
   $('#google').attr('onClick', 'share_social("'+google+'");');
   $('#linklind').attr('onClick', 'share_social("'+linklind+'");');
   $('#mail_link').attr('onClick', 'share_social("'+mail_link+'");');



          $('#share_form').validate({ // initialize the plugin
        errorLabelContainer: "#cs-error-note",
   
     errorClass: 'errors',
    rules: {
     
        "segment[]": "required",
       
         name: {
           
            required: true,
            
        },
        
        
        
    },
    messages: {
       
        "segment[]": "Please Select Segment",
        
         name: {
           
            required: "Please enter  Reciver Name.",
            
            
        },
        
        
       
         
    },
        submitHandler: function (form) { // for demo
         // var c_code = $('#c_code').val();
var c_code = $$("#cccc").find("option:checked").val();
         var receivermobile = $('#receivermobile').val();
         // alert(c_code+receivermobile);
         $('#full_phone').val('+'+c_code+receivermobile);
          form =$('#share_form').serialize();
         // alert(form);
                      var payment =  window.localStorage.getItem("payment");

        if(payment == 0){
   $('.snackbar').html('Make a payment to use Bcard features.');
            my_toast();
          return false;
}else{

          var  action = $('#action').val();
          var  email = $('#email').val();
        // $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    // $('.loader').css('display','flex');
     $.ajax({
            url: "https://digitalbcards.in/api/send_whatsapp/",
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
               // alert(data,message);
              if(data.status == 0){
                 $('.snackbar').html(data.message);
  
    $('.loader').css('display','none');
                my_toast();
                // alert(data.message);

              }else if(data.status == 2){

                
                // alert(data.message);
                   $('.snackbar').html(data.message);
  
             $('.loader').css('display','none');
                my_toast();
            window.location.href = data.url;
              }else{
                 $('.snackbar').html(data.message);
  
                my_toast();
    $('.loader').css('display','none');

              }
            //location.reload();
          }
        })
         }
            return false; // for demo
        }
    }); 

                //called when key is pressed in textbox
              $("#mobile").keypress(function (e) {
                 //if the letter is not digit then display error and don't type anything
                 if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    //display error message
                    //$("#errmsg").html("Digits Only").show().fadeOut("slow");
                           return false;
                }
               });
          

})
$$(document).on('pageInit', '.page[data-page="lead_details"]', function (e) {
window.localStorage.setItem("unique",'lead_details');
    window.localStorage.setItem("unique_home",'1');
    var lead_id =  window.localStorage.getItem("lead_id");
    var user_id =  window.localStorage.getItem("user_id");
       $.ajax({
            url: "https://digitalbcards.in/api/lead_details/", 
            method: "POST",
            data:{user_id:user_id,lead_id:lead_id,secrete:"virus"}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
// alert(data);
// alert(data.name);
var referral =  window.localStorage.getItem("referral");
                      var name =  window.localStorage.getItem("name");

$('#lead_name').html('<b>'+data.name+'</b>');
$('#lead_position').html(data.position);
$('#lead_company_name').html(data.company_name);
$('#lead_address').html(data.company_address +','+ data.address2);
$('#lead_since').html('<b>Contact Since : '+data.since+' Days</b>')
  var ph_link  = 'tel:'+data.mobile+'';
  var em_link  = 'mailto:'+data.email+'';
  var sms_link  = 'sms:'+data.mobile+'';
var link_wp = 'https://api.whatsapp.com/send?phone='+data.mobile+'&text=Hey%2C%20%20I%20am%20using%20this%20Digital%20Business%20Card.%20I%20loved%20using%20it.%20Have%20a%20look%20at%20it%20from%20the%20below%20link%20%0Ahttps%3A%2F%2Fdigitalbcards.in%2FBcard.php%3Fzxc%3D'+referral+'%20%0A%0A%0ASay%20goodbye%20to%20Cards.%20%20Use%20Digital%20Business%20Cards%20-%20You%20are%20one%20click%20away.%20.%20.%0A%0A%0A'+name;
   $('#lead_phone').attr('onClick', 'share_social("'+ph_link+'");');
   $('#lead_email').attr('onClick', 'share_social("'+em_link+'");');
   $('#lead_sms').attr('onClick', 'share_social("'+sms_link+'");');
   $('#lead_wp').attr('onClick', 'share_social("'+link_wp+'");');

    $('.loader').css('display','none');

            //    $('#username').html(data.name);
             //   $('#user_image').attr("src",'https://digitalbcards.in/upload/'+data.profile_img);
              
            //location.reload();
          }
        });
})
$$(document).on('pageInit', '.page[data-page="lead"]', function (e) {
  window.localStorage.setItem("unique",'lead');
    window.localStorage.setItem("unique_home",'1');

            // check_payment();          
     // window.location = 'pay.html';
      $$('#payment_btn').trigger("click");
    $( "#payment_btn" ).trigger( "click" );
     // $$('#payment_btn').trigger('click');
     // $(document).ready(function() { $$('#payment_btn').trigger('click'); });


 // $('#about')[0].click();
 var search = '';
                      // alert(user_id);
                      get_contact(search);
                        
//   $('#search').click(function() {
// // myApp.alert('my leads');
//   $('#search input', this).focus();

//   });


$(document).on('click', '.details', function(){  

 window.localStorage.setItem("lead_id",$(this).attr('id'));

  $$('#lead_details').trigger('click');

  })
    $('#search').on('input', function(e){

      var search = $(this).val();
      var search = $(this).val();
        get_contact(search);
       
    })        

        function get_contact(search){
           $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    $('.loader').css('display','flex');
 var user_id =  window.localStorage.getItem("user_id");
 // alert(search);
                                $.ajax({
            url: "https://digitalbcards.in/api/leads/", 
            method: "POST",
            data:{user_id:user_id,search:search,secrete:"virus"}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
// alert(data);
$('#my_leads').html(data);

    $('.loader').css('display','none');

            //    $('#username').html(data.name);
             //   $('#user_image').attr("src",'https://digitalbcards.in/upload/'+data.profile_img);
              
            //location.reload();
          }
        });  
                            }               


})
$$(document).on('pageInit', '.page[data-page="register"]', function (e) {
  window.localStorage.setItem("unique",'register');
    window.localStorage.setItem("unique_home",'1');
  
    // Following code will be executed for page with data-page attribute equal to "about"
    //my_toast();
    $(document).on('click', '#login', function(){  
     window.location = "index.html";
 })


    $(document).on('click', '#register_user', function(){  
 
$('#register_form').validate({ // initialize the plugin
        errorLabelContainer: "#cs-error-note",
   
     errorClass: 'errors',
    rules: {
     
        name: {
           
            required: true,
           
            
        },
        mobile: {
           
            required: true,
            number:true,
            maxlength:10,
            minlength:10,
           
            
        },
        email: {
           
            required: true,
            email:true,
            
        },
         password: {
           
            required: true,
            
        },
         re_pass: {
                    equalTo: "#c_password"
                },
        
    },
    messages: {
       
         name: {
           
            required: "Please enter  Name.",
          
            
        },
         email: {
           
            required: "Please enter  Email.",
            email:"Please Enter Proper Email",
            
        },
         mobile: {
           
            required: "Please enter  Mobile.",
            number:"Please Enter Proper Mobile",
            maxlength:"Please Enter Proper Mobile",
            minlength:"Please Enter Proper Mobile",
            
        },
         password: {
           
            required: "Please enter  Password.",
            
            
        },
        re_pass:{
           equalTo: "Password Not Match.",
        }
        
       
         
    },
        submitHandler: function (form) { // for demo
          form =$('#register_form').serialize();
          var  action = $('#action').val();
          var  email = $('#reg_email').val();
          // var  email = $('#email').val();
           $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    $('.loader').css('display','flex');
     $.ajax({
            url: "https://digitalbcards.in/api/register/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
              if(data.status == 0){
               
                // myApp.alert(data.message);
                $('.snackbar').html(data.message);
                my_toast();
    $('.loader').css('display','none');

              }else{


// alert(email);
               window.localStorage.setItem("login",1);
               window.localStorage.setItem("email",email);
               // alert(window.localStorage.getItem("email"))
                // myApp.alert(data.message);
                  $('.snackbar').html(data.message);
// $$('#home').trigger("click");
                my_toast();
    $('.loader').css('display','none');

    
            //window.location.href = "home.html";
            location.reload();
              }
            //location.reload();
          }
        })
            return false; // for demo
        }
    });
})
  

   // $('.navbar').show();
    //$('.back').hide();
})
function open_model(name,id,s_value) {
        // alert(name);
        
            $('#update_expertise').modal('show');
            $('#e_name').val(name);
            $('#e_value').val(s_value);
            $('#tag_id').val(id);
            // alert(name+id);   
        }
        function edit_key_client(name,id,description,tag_line){
            $('#add_expertise').modal('show');
            $('#image_demo').hide();
            $('.imgd').attr('id','uploadFile0');
            $('#add_key_client_form')[0].reset();
            $('#name').val(name);
            $('#action').attr('name','update_tag');
            $('#s_value').val(description);
            $('.modal-title').html('Edit Key Client');
            $('.crop_image').html('Update');
            $('.o_btn').attr('id','update_tag');
             $("#imagePreview0").css('display','inline-block');
             var bg ='url("https://digitalbcards.in/upload/'+tag_line+'")';
                            $("#imagePreview0").css("background-image",bg);
            // $('.edit_img_preview').show();
            //  $('.edit_img_preview').html('<img src="https://digitalbcards.in/upload/'+tag_line+'">');
            // $('.e_crop_me_img').val(tag_line);
            $('#tag_id').val(id);
            
        }
         function edit_memberships(name,id,description,tag_line){
            $('#add_expertise').modal('show');
            $('#image_demo').hide();
            $('.imgd').attr('id','uploadFile0');
            $('#add_memberships_form')[0].reset();
            $('#name').val(name);
            $('#action').attr('name','update_tag');
            $('#s_value').val(description);
            $('.modal-title').html('Edit Memberships');
            $('.crop_image').html('Update');
            $('.o_btn').attr('id','update_tag');
             $("#imagePreview0").css('display','inline-block');
             var bg ='url("https://digitalbcards.in/upload/'+tag_line+'")';
                            $("#imagePreview0").css("background-image",bg);
            // $('.edit_img_preview').show();
            //  $('.edit_img_preview').html('<img src="https://digitalbcards.in/upload/'+tag_line+'">');
            // $('.e_crop_me_img').val(tag_line);
            $('#tag_id').val(id);
            
        }
function edit_offer(name,id,description,tag_line){
            $('#add_expertise').modal('show');
            $('#image_demo').hide();
            $('#add_offer_form')[0].reset();
            $('#name').val(name);
            
            $('#s_value').val(description);
            $('.modal-title').html('Edit Offer');
            $('.crop_image').html('Update');
            $('.o_btn').attr('id','update_tag');
            $('.edit_img_preview').show();
            $('.edit_img_preview').html('<img src="https://digitalbcards.in/upload/'+tag_line+'">');
            $('.e_crop_me_img').val(tag_line);
            $('#tag_id').val(id);
} 
        function testimonial_model(name,id,description,tag_line) {
        // alert(name);
        
            $('#update_expertise').modal('show');
            $('#e_name').val(name);
            $('#e_msg').val(description);
            $('#e_value').val(tag_line);
            $('#tag_id').val(id);
            // alert(name+id);   
        }
          function delete_tag(id,action,lable,api_link)
            {
              // alert(action);
  $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
   $('.loader').css('display','flex');
 var user_id =  window.localStorage.getItem("user_id");

                var prom;
                 var form_d = 'secrete=virus&'+action+'=1&id='+id+'&user_id='+user_id+'';
                 // alert(form_d);
                prom = "Are You Sure You Want To Delete This "+lable+"?";

                if (confirm(prom))
                {
                    setTimeout(function ()
                    {
                        //=========ajax==========//
                        jQuery.ajax({
                            type: 'POST',
                            data: form_d,
                            url: 'https://digitalbcards.in/api/'+api_link+'/',
                             dataType:"json",    
                            beforeSend: function () {
//                                $("#loading").show();
                            },
                            success: function (data) {
                                if(data.status == 0){
                 $('.snackbar').html(data.message);
                 $('#my_'+api_link).html(data.data);
            // $('#add_expertise').modal('hide');
    
    $('.loader').css('display','none');
     if(data.message !=''){
      
                my_toast();
    }
                 // alert(data.message);
            // location.reload();

              }else{
               
     $('.snackbar').html(data.message);
                 $('#my_'+api_link).html(data.data);
            // $('#add_expertise').modal('hide');
  
                if(data.message !=''){
      
                my_toast();
    }
    $('.loader').css('display','none');
    // $$('#v').trigger("click");
                // location.reload();

              }     
                            },
                            error: function (e) {
                            }
                        });
                        //=========End of ajax====//
                    }, 1000);
                }else{
                //location.reload();
    $('.loader').css('display','none');

                }
            }

   function setfb(){
             var val=$('#s_name').val();
             if(val==1)
             {
              $('#s_value').val("https://www.facebook.com/");
             }

         }
          function checkfile(sender) {
                        var validExts = new Array(".jpg",".jpeg", ".png");
                        var fileExt = sender.value;
                        fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
                        if (validExts.indexOf(fileExt) < 0) {
                        alert("Invalid file selected, valid files are of " +
                           validExts.toString() + " types.");
                           //document.getElementById('upload_form').reset();
                           // document.getElementById("image").value = "";
                          // $('#sub_check').attr("disabled", "disabled");
                          location.reload();

                        return false;
                        }
                        else {
                             // $('#sub_check').removeAttr("disabled");          

                            return true;
                        }
                        }
                        function color(id) {
 var user_id =  window.localStorage.getItem("user_id");
                        
                      jQuery.ajax({
                                type: 'POST',
                                data: {'action': 'setcolor', 'id': id,'user_id':user_id},
                                url: 'https://digitalbcards.in/ajax.php',
                                success: function (data) {
                                    $('.snackbar').html(data);
                                    my_toast();
                                   location.reload();
                                    
                                },
                                error: function (e) {

                                }
                                });

        }

function new_segment(){
  $('#new_seg').show();
}
function add_segment(t){
  $('#segment').append('<option value="'+t.value+'" selected="selected">'+t.value+'</option>');
  $('#new_seg').hide();

}
        function update_profile(email){
               $.ajax({
            url: "https://digitalbcards.in/api/user_profile/", 
            method: "POST",
            data:{email:email,secrete:"virus"}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
                // alert(data.pay_status);
               window.localStorage.setItem("payment",data.pay_status);
               window.localStorage.setItem("user_id",data.id);
               window.localStorage.setItem("language",data.language);
               window.localStorage.setItem("referral",data.Refferal_id);
               window.localStorage.setItem("mobile",data.mobile);
               window.localStorage.setItem("profession",data.profession);
               window.localStorage.setItem("about_me",data.about_me);
               window.localStorage.setItem("skype",data.skype);
               window.localStorage.setItem("address",data.address);
               window.localStorage.setItem("address_map_link",data.address_map_link);
               window.localStorage.setItem("fb_url",data.fb_url);

               window.localStorage.setItem("y_tube_link",data.y_tube_link);
               window.localStorage.setItem("website",data.website);
                
               window.localStorage.setItem("whatsapp",data.whatsapp);
               window.localStorage.setItem("whatsapp_no",data.whatsapp_no);
               window.localStorage.setItem("name",data.name);
               //window.localStorage.setItem("username",data.name);
               window.localStorage.setItem("user_image",data.profile_img);

               window.localStorage.setItem("company_name",data.company_name);
               window.localStorage.setItem("vision",data.vision);
               window.localStorage.setItem("mission",data.mission);
               window.localStorage.setItem("about_comp",data.about_comp);
               window.localStorage.setItem("comp_address",data.comp_address);
               window.localStorage.setItem("map_link",data.map_link);
               window.localStorage.setItem("about_cyoutube",data.about_cyoutube);
               window.localStorage.setItem("company_img",data.company_img);
               window.localStorage.setItem("gst_no",data.gst_no);
               window.localStorage.setItem("gst_img",data.gst_img);
               window.localStorage.setItem("theme",data.theme);

              
               // alert(data.fb_url);
                $('#user').html(data.name);
                $('#user_image').attr("src",'https://digitalbcards.in/upload/'+data.profile_img);
                // $('#user_image').css("height",'80px');
                // $('#user_image').css("width",'80px');
               // $('#preloader').hide();
    $('.loader').css('display','none');
                
              
            //location.reload();
          }
        })
        }

  function updateOrder(data,u) {
        $.ajax({
            url:u,
            type:'post',
            data:{position:data},
            success:function(){
    //           $('.bk_link').append('<a href="profile.html" id="achiv"></a>');
    // $$('#achiv').trigger("click");

                      // location.reload();
                // alert('your change successfully saved');
            }
        })
    }


    function sortableEnable() {
    $( ".row_position" ).sortable();
    $( ".row_position" ).sortable( "option", "disabled", false );
    // ^^^ this is required otherwise re-enabling sortable will not work!
    $( ".row_position" ).disableSelection();
        $( ".row_position" ).sortable({
        delay: 150,
        stop: function() {
            var selectedData = new Array();
            $('.row_position>tr').each(function() {
                selectedData.push($(this).attr("id"));
            });
            var u = '';
            var unique =  window.localStorage.getItem("unique");   
            if(unique == 'achievement'){
              u = 'https://digitalbcards.in/achievement_ajax.php';
            }else if(unique == 'skils'){
            u = 'https://digitalbcards.in/skills_refresh_order.php';
            }else if(unique == 'testimonial'){
            u = 'https://digitalbcards.in/testimonial_ajax.php';
            }else if(unique == 'experience'){
            u = 'https://digitalbcards.in/experience_ajax.php';
            }else if(unique == 'education'){
            u = 'https://digitalbcards.in/education_ajax.php';
            }else if(unique == 'product'){
            u = 'https://digitalbcards.in/product_ajax.php';
            }else if(unique == 'offer'){
            u = 'https://digitalbcards.in/offer_ajax.php';
            }else if(unique == 'key_client'){
            u = 'https://digitalbcards.in/key_clients_ajax.php';
            }


            
            

            updateOrder(selectedData,u);
        }
    });
    $('#srt_btn').attr('onClick', 'sortableDisable();');
    $('#srt_btn').css('background', '#d59101');



    return false;

  }
  function sortableDisable() {
    $( ".row_position" ).sortable("disable");
    $('#srt_btn').attr('onClick', 'sortableEnable();');
    $('#srt_btn').css('background', '#c3b7b6');

    return false;
  }
  function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function DisableCopyPaste (e) 
{
 // Message to display
 var message = "Cntrl key/ Right Click Option disabled";
 // check mouse right click or Ctrl key press
var kCode = event.keyCode || e.charCode; 
//FF and Safari use e.charCode, while IE use e.keyCode
 if (kCode == 17 || kCode == 2)
 {
 alert(message);
 return false;
 }
}
function details(id){
  alert(id);
  window.localStorage.setItem("lead_id",id);

  $$('#lead_details').trigger('click');
}

function dddd(){
  alert('fdfd');
       $('#share_form').validate({ // initialize the plugin
        errorLabelContainer: "#cs-error-note",
   
     errorClass: 'errors',
    rules: {
     
        "segment[]": "required",
       
         name: {
           
            required: true,
            
        },
        
        
        
    },
    messages: {
       
        "segment[]": "Please Select Segment",
        
         name: {
           
            required: "Please enter  Reciver Name.",
            
            
        },
        
        
       
         
    },
        submitHandler: function (form) { // for demo
         // var c_code = $('#c_code').val();
var c_code = $$("#cccc").find("option:checked").val();
         var receivermobile = $('#receivermobile').val();
         // alert(c_code+receivermobile);
         $('#full_phone').val('+'+c_code+receivermobile);
          form =$('#share_form').serialize();
         alert(form);
                      var payment =  window.localStorage.getItem("payment");

        if(payment == 0){
   $('.snackbar').html('Make a payment to use Bcard features.');
            my_toast();
          return false;
}else{

          var  action = $('#action').val();
          var  email = $('#email').val();
        // $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    // $('.loader').css('display','flex');
     $.ajax({
            url: "https://digitalbcards.in/api/send_whatsapp/",
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
               // alert(data,message);
              if(data.status == 0){
                 $('.snackbar').html(data.message);
  
    $('.loader').css('display','none');
                my_toast();
                // alert(data.message);

              }else if(data.status == 2){

                
                // alert(data.message);
                   $('.snackbar').html(data.message);
  
             $('.loader').css('display','none');
                my_toast();
            window.location.href = data.url;
              }else{
                 $('.snackbar').html(data.message);
  
                my_toast();
    $('.loader').css('display','none');

              }
            //location.reload();
          }
        })
         }
            return false; // for demo
        }
    }); 
}