//wp-content/themes/appointment-child/teste.php
function corrige() {
    document.getElementById("wdform_6_element3").name = "name";
    document.getElementById("wdform_2_element3").name = "email";
    document.getElementById("wdform_5_element3").name = "message";
    document.getElementById("form3").action = "http://estacionamentopatioconfins.com.br/estacionamento-aeroporto-confins-telefone/envio4.php";
    }
window.onload = function () { corrige(); };