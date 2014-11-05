
$('#form-dc').validate({
            rules: {
                txt_usrx: {
                    required: true                    

                },
                txt_passx: {                    
                    required: true
                },            
            },
            messages: {
                txt_usrx: {
                    required: 'Digíte su nombre de usuario es obligatorio'
                },
                txt_passx: {
                    required:'Digíte su contraseña es obligatorio'
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            errorElement: 'span',
            errorClass: 'help-block',
            errorPlacement: function(error, element) {
                if(element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            submitHandler: function (resp) { 
                var a=$('#txt_usrx').val();
                var b=$('#txt_passx').val();
                // Using YQL and JSONP
                $.ajax({
                    type:'post',
                    url: "admin/base.php",   
                    // tell YQL what we want and that we want JSON
                    data: {txt1:a,txt2:b
                    },                 
                    // work with the response
                    success: function( response ) {
                         var resp=response;
                        if(resp==1){
                            $.gritter.add({
                                // (string | mandatory) the heading of the notification
                                title: 'Mensaje',
                                image: 'img/servicios/f.fw.png',
                                // (string | mandatory) the text inside the notification
                                text: 'Ok.. tu acceso a sido VALIDO dame unos segundos y te doy acceso ala aplicacion <br/> : )',
                                position: 'bottom-right', // defaults to 'top-right' but can be 'bottom-left', 'bottom-right', 'top-left', 'top-right' (added in 1.7.1)
                                fade_in_speed: 'medium', // how fast notifications fade in (string or int)
                                fade_out_speed: 2000, // how fast the notices fade out
                                time: 6000 // hang on the screen for...
                            });
                            setTimeout("redireccionar()", 2000);
                        };
                        if (resp==0) {
                            $.gritter.add({
                                // (string | mandatory) the heading of the notification
                                title: 'Mensaje',
                                image: 'img/servicios/t.fw.png',
                                // (string | mandatory) the text inside the notification
                                text: 'Ooo.. tu usuario o contraseña es INVALIDO vuelve a intentar <br/> : (',
                                position: 'bottom-right', // defaults to 'top-right' but can be 'bottom-left', 'bottom-right', 'top-left', 'top-right' (added in 1.7.1)
                                fade_in_speed: 'medium', // how fast notifications fade in (string or int)
                                fade_out_speed: 2000, // how fast the notices fade out
                                time: 6000 // hang on the screen for...
                            });
                        };  
                        if (resp!=0&&resp!=1) {
                            $.gritter.add({
                                // (string | mandatory) the heading of the notification
                                title: 'Mensaje',
                                image: 'img/servicios/t.fw.png',
                                // (string | mandatory) the text inside the notification
                                text: 'Ooo.. Estamos en proceso de mantenimiento vuelve a intentar mas tarde <br/> : 0',
                                position: 'bottom-right', // defaults to 'top-right' but can be 'bottom-left', 'bottom-right', 'top-left', 'top-right' (added in 1.7.1)
                                fade_in_speed: 'medium', // how fast notifications fade in (string or int)
                                fade_out_speed: 2000, // how fast the notices fade out
                                time: 6000 // hang on the screen for...
                            });
                        };
                    }
                });
                
                limpiarform();
            }

        });
        function limpiarform(){
            $('#form-dc').each (function(){
              this.reset();
            });
        }

        var pagina="google.com"
        function redireccionar() 
        {
        location.href=pagina
        } 

$(document).ready(function() {
   var $sidebar = $(".boxes"),$window = $(window), offset = $sidebar.offset(),    topPadding = 160;
    $window.scroll(function() {
    if ($window.scrollTop() > offset.top) {
    $sidebar.stop().animate({
    marginTop: $window.scrollTop() - offset.top + topPadding
    });
    } else {
    $sidebar.stop().animate({
    marginTop: 30
    });
    }
    });
});
