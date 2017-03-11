<?php

?>
<script type="text/javascript">
/* <![CDATA[ */

   data_de_hj = new Date();
    function nome1(oi) {
        if (oi == "datetimepicker" || oi == "datetimepicker2") {
            return 1;
        } else {
            return 0;
        }
    };



        var muda = function (ct, $i) {
            
            var nomeSai = '.datetimepicker2:eq(' + nome1($i.context.id) + ')';
            var nomeEntr = '.datetimepicker:eq(' + nome1($i.context.id) + ')';
            this.setOptions({
                maxDate: jQuery(nomeSai).val() ? jQuery(nomeSai).val() : false

            }),
              jQuery(nomeSai).datetimepicker({
   
                        minDate: jQuery(nomeEntr).val() ? jQuery(nomeEntr).val() : 0,
                    
                                                
                    })
                  

            if (ct.getDate() == data_de_hj.getDate() && ct.getMonth() == data_de_hj.getMonth()) {
                    this.setOptions({
                        minTime: 0
                    })
                } else {
                    this.setOptions({
                        minTime: "0"
                    })
                } 
           escreve("en2");
        }


        var muda2 = function (ct, $i) {
            
            var nomeSai = '.datetimepicker2:eq(' + nome1($i.context.id) + ')';
            var nomeEntr = '.datetimepicker:eq(' + nome1($i.context.id) + ')';
            this.setOptions({
                minDate: jQuery(nomeEntr).val() ? jQuery(nomeEntr).val() : false

            }),
              jQuery(nomeEntr).datetimepicker({
                        maxDate: jQuery(nomeSai).val() ? jQuery(nomeSai).val() : 0
                    })
           

            if (ct.getDate() == data_de_hj.getDate() && ct.getMonth() == data_de_hj.getMonth()) {
                    this.setOptions({
                        minTime: 0
                    })
                } else {
                    this.setOptions({
                        minTime: "0"
                    })
                }

                escreve("sa");
        }
       



    for (i = 0; i < 2; i++) {
        var lin = Boolean(false);
        if (i == 0) {
            var lin = Boolean(true);
        }

        


        nomeEntr = '.datetimepicker:eq(' + i + ')';
        nomeSai = '.datetimepicker2:eq(' + i + ')';
        
        jQuery(nomeEntr).datetimepicker({
            format: 'd/m/Y H:i',
            formatDate: 'd.m.Y',

            inline: lin,
            minDate: 0,
            minTime: 0,
         
            onChangeDateTime: muda
       

                    ,
            onShow: function (ct, $i) {
                var nomeSai = '.datetimepicker2:eq(' + nome1($i.context.id) + ')';
                this.setOptions({
                    maxDate: jQuery(nomeSai).val() ? jQuery(nomeSai).val() : false

                })

            }

        });
        jQuery(nomeSai).datetimepicker({
            format: 'd/m/Y H:i',
            formatDate: 'd.m.Y',
            inline: lin, //temos que mudar aqui
            minDate: 0,
            minTime: 0,
           
            onChangeDateTime: muda2,
         
            onShow: function (ct, $i) {
                var nomeEntr = '.datetimepicker:eq(' + nome1($i.context.id) + ')';
                this.setOptions({
                    minDate: jQuery(nomeEntr).val() ? jQuery(nomeEntr).val() : 0
                })

            }
        });

        $.datetimepicker.setLocale('pt-BR');
        nomeEntr = "";
        nomeSai = "";
    }

/* ]]> */
</script>
