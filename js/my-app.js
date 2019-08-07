// Initialize app
var myApp = new Framework7();
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

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

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
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
 // **my permission code**
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
   $(document).on('click', '.t1', function() {
    
    $('.t1').addClass('active');
    $('.t2').removeClass('active');
    $('.t3').removeClass('active');
   });

   $(document).on('click', '.t2', function() {
    $('.t2').addClass('active');
    $('.t1').removeClass('active');
    $('.t3').removeClass('active');
   });

   $(document).on('click', '.t3', function() {
    $('.t3').addClass('active');
    $('.t1').removeClass('active');
    $('.t2').removeClass('active');
   });
var windowHeightSeventyPercent = parseInt(screen.height * 0.7); //To support multiple devices

$("input").focusin(function(){
   $("body").height($("body").height()+parseInt(windowHeightSeventyPercent)); //Make page body scroll by adding height to make user to fillup field.
});

 $("input").focusout(function(){
   $("body").height($("body").height()-parseInt(windowHeightSeventyPercent));
 });

        // myApp.alert('Here comes About page');
                // window.localStorage.setItem("payment",0);
        var islogin = window.localStorage.getItem("login");
        var email = window.localStorage.getItem("email");
// alert(email); 
// update_profile(email);
       



        var payment = window.localStorage.getItem("payment");
  // alert(payment);

if(islogin == 1){
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

   window.localStorage.setItem("login",1);
                window.localStorage.setItem("email",email);
                update_profile(email);
                 $$('#home').trigger("click");
              }
            }
		})

 		}
	})
});
 })

             
             

                
         
  
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
  //alert("page initialize");
               window.localStorage.setItem("unique",'home');
               window.localStorage.setItem("unique_home",'0');
  $('#receivermobile').bind('copy paste cut',function(e) { 
 e.preventDefault(); //disable cut,copy,paste
 alert('cut,copy & paste options are disabled !!');
 });

 var referral =  window.localStorage.getItem("referral");
 // alert(referral);
 $('.navbar').show();
    $('.back').hide();
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

                      var user_id =  window.localStorage.getItem("user_id");
                      var language =  window.localStorage.getItem("language");
                      var referral =  window.localStorage.getItem("referral");
                      var rrr =  window.localStorage.getItem("referral");
                      var name =  window.localStorage.getItem("name");
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
         var c_code = $('#c_code').val();

         var receivermobile = $('#receivermobile').val();
         // alert(c_code+receivermobile);
         $('#full_phone').val(c_code+receivermobile);
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