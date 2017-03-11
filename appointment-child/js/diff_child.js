


function Dif(a){

var Dif = {};

			
			for ( this.dias= 0; a>=86400000; this.dias++, a -= 86400000);
			for ( this.horas = 0; a>=3600000; this.horas++, a -= 3600000);
			for ( this.minutos = 0; a>=60000; this.minutos ++, a -= 60000);
			this.preco = function (b) {
                               
                    tp(b);
			    if (this.dias == 0) {
			        
			        var d = ho(this.horas);
			    } else {
			        
			        var d = valore_d(this.dias, this.horas);
			    }
			    return d;
			};
			
}


function tp(a){
    if(a==20.9){
        tarifaS = 99, tarifaD = 20.9, tarifaH = 3, prim_h = 4, demais_h = 3;
    }else if(a==18){
         tarifaS = 97, tarifaD = 18, tarifaH = 3, prim_h = 3.5, demais_h = 2.5;
    }else{
        tarifaS = 0, tarifaD = 0, tarifaH = 0, prim_h = 0, demais_h = 0;
    }
    
}



function valore_d(a, c){
   //a = quantidade de dias; c = quantidade de horas a mais
    var iu = 0;
    var resto = 0;
        if(a >= 7){
            if(c>6){iu=1
            }else if(c>0&&c<7){
                resto= prim_h + ((c-1)*demais_h)
                }

        b = tarifaS / 7 * (a + iu) + resto;
        
        }  else{

        b = (tarifaD * a) + (ho2(c));
         
        }
        tp();
return b;
}

function ho(a){
    if(a <= 7){
     b = prim_h + (a - 1) * demais_h;
    } else {
    b = tarifaD;
    }
    tp();
    return b;
}

function ho2(a){
    if(a <= 6){
     b = a * tarifaH;
    } else {
    b = tarifaD;
    }
    
    return b;
}
//pra ser retirada

function novo_botaoatt(remote) {
    
       if (1 == remote) var c = $("#datetimepicker").datetimepicker("getValue"),
         d = $("#datetimepicker2").datetimepicker("getValue"), h = $("#TipoDeVaga").val();
         else var c = $("#datetimepicker3").datetimepicker("getValue"),
        d = $("#datetimepicker4").datetimepicker("getValue"), h = $("#TipoDeVaga2").val();
        var e = d - c;
        var a = new Dif(e);
        var f = a.dias + " dias, " + a.horas + " horas.";
        var g = a.preco(h);
        if (1 == remote)document.getElementById("calculo").hasChildNodes() ? ($("#calculo").empty(), $("#calculo").append(f)) : $("#calculo").append(f), document.getElementById("result").hasChildNodes() ? ($("#result").empty(), $("#result").append("R$ " + g.toFixed(2)), tranfere_reserva()) : ($("#result").append("R$ " + g.toFixed(2)), tranfere_reserva()), g = 0;
   else document.getElementById("calculo2").hasChildNodes() ? ($("#calculo2").empty(), $("#calculo2").append(f)) : $("#calculo2").append(f), document.getElementById("result2").hasChildNodes() ? ($("#result2").empty(), $("#result2").append("R$ " + g.toFixed(2))) : ($("#result2").append("R$ " + g.toFixed(2))), g = 0
}

function escreve(a){
    //escreve embaixo dos calendários
    if(a=="en"){
    var d = $("#datetimepicker3").val();
    $("#en2").empty().append(d);
    } else if(a=="sa"){
        var d = $("#datetimepicker4").val();
    $("#sa").empty().append(d);
    }
}

function estilo(){
    var a = document.getElementsByTagName("li").length;

    var b = document.getElementsByTagName("li");

    for(i=0;i<a;i++){

        b.item(i).style.listStyle  = "none";
    }

}

function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
   else if (navigator.appName == 'Netscape')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
function checkVersion()
{
  var msg = "You're not using Internet Explorer.";
  var ver = getInternetExplorerVersion();

  if ( ver > -1 )
  {
      estilo();
      substitui_css();
  }
  
}

checkVersion();

function substitui_css() {


    
    $ar = ["#v", "#p","#n", "#e"];
    $vei = $($ar[0] + " input"), $v = $($ar[0]), $pla = $($ar[1] + " input"), $p = $($ar[1]), $nom = $($ar[2] + " input"), $n = $($ar[2]), $ema = $($ar[3] + " input"), $e = $($ar[3]);

    



        if (/msie[\/\s]9\.0/i.test(navigator.userAgent)) {

            $vei.on("focus", function () {
                $v.addClass("contrair");
            }).on("blur", function () {
                if ($vei.val() == "") {
                    $v.removeClass("contrair");
                }
            });

             $pla.on("focus", function () {
                $p.addClass("contrair");
            }).on("blur", function () {
                if ($pla.val() == "") {
                    $p.removeClass("contrair");
                }
            });

            $nom.on("focus", function () {
                $n.addClass("contrair");
            }).on("blur", function () {
                if ($nom.val() == "") {
                    $n.removeClass("contrair");
                }
            });

             $ema.on("focus", function () {
                $e.addClass("contrair");
            }).on("blur", function () {
                if ($ema.val() == "") {
                    $e.removeClass("contrair");
                }
            });


        } 
    
}


function nao_ha_disp(){
    $(".button:eq(4)").off("click");
    
   $(".button:eq(4)").on("click", function(){
       
$(".cx4").hide();$(".cx3").hide();$(".cx2").hide();$(".cx").css('display', 'block');reset2();

   }) 

}

//esta função ficará entre o segundo e o terceito ato
function avalia_diponibilidade() {

    var en = document.getElementById("en").childNodes.length;
    var sa = document.getElementById("sa").childNodes.length;
    
        if(en===0||sa===0){    
       
        if(en===0){
            var a = document.getElementById("en");
            var b = document.createElement("p");
            var c = document.createTextNode("Escolha uma data de entrada.");
            b.appendChild(c);b.className = "invalido";a.appendChild(b);
        }
         if (sa===0){
            var a = document.getElementById("sa");
            var b = document.createElement("p");
            var c = document.createTextNode("Escolha uma data de saída.");
            b.appendChild(c);b.className = "invalido";a.appendChild(b);

        }
    }else{

    $("#disp").empty().html("Aguarde..."), $.ajax({
        url: "..\/web\/disponibilidade.php",
        type: "POST",
        data: $("#Form2").serialize(),
        success: function (a) {
            console.log(a),
            "Podemos prosseguir." == a ? (reserva_slide(3), $("#disp").empty().html("Reserve")) : ($('#telaquente').empty().html(a), $(".cx2").hide(), reserva_slide(4),nao_ha_disp())
        },
        error: function (a, b, c) {
            console.log(a, b, c), $('#telaquente').empty().html(c + "<br> Pressione 'F5'. Se o problema persistir, faça sua reserva pelo telefone (31) 3665-7777."), $(".cx2").hide(), reserva_slide(4), nao_ha_disp()
            
        }
    })
}

}


function gravadados() {
    $("#re").attr("value", "Aguarde..."), $.ajax({
        url: "..\/web\/reg.php",
        type: "POST",
        data: $("#Form2").serialize(),
        success: function(a) {
            console.log(a),$('#telaquente').empty().html("Reserva efetuada com sucesso!!<br>Verifique sua caixa de e-mail."),reserva_slide(4)
           // "Podemos prosseguir." == a?(reserva_slide(3),$("#disp").empty().html("Reserve")):($('#telaquente').empty().html(a),$(".cx2").hide(),reserva_slide(4))
        },
        error: function(a, b, c) {
            console.log(a, b, c),$('#telaquente').empty().html(c + "<br> Pressione 'F5'. Se o problema persistir, faça sua reserva pelo telefone (31) 3665-7777."),reserva_slide(4)
        }
    })
}

function reset2(){

    jQuery("#datetimepicker4").datetimepicker({
                        minDate: 0
                    });
     jQuery("#datetimepicker3").datetimepicker({
                        minDate: 0
                    });
                    $("#en").empty();
                    $("#sa").empty();
                    $("#disp").empty().html("Reserve");
                    $("#re").empty().html("Reserve");
      $("#calculo2").empty();
      $("#result2").empty();
      $("#v input").val("");
      $("#p input").val("");
      $("#n input").val("");
      $("#e input").val("");
     
      
      
      
      


}

function atribui_botoes(){

    var a = $(".button");
    var tamanho = a.length;

    for(i=0;i<tamanho;i++){
        
        if(i==0){
            
            $(a[i]).on('click',function(){tipodeVaga(0);reserva_slide(2)});

        }else if(i==1){

            $(a[i]).on('click',function(){tipodeVaga(1);reserva_slide(2)});
            
        }else if (i==3){
            
        $(a[i]).on('click', function(){checkdata3()});

        }else if (i==4){
            
        $(a[i]).on('click', function(){document.getElementById('id01').style.display = 'none'; $(".cx4").hide();$(".cx3").hide();$(".cx2").hide();$(".cx").css('display', 'block');reset2()});
           
        }else{
        $(a[i]).on('click', function(){reserva_slide(i+1)});
        }
    }
    $("#sp").on('click', function () { document.getElementById('id01').style.display = 'none' });
    $("#disp").on('click', function() {avalia_diponibilidade()});
    $("#datetimepicker3").on('change', function() {novo_botaoatt(2)});
   $("#datetimepicker4").on('change', function() {novo_botaoatt(2)});
   $("#TipoDeVaga2").on('change', function() {novo_botaoatt(2)});
}

function tipodeVaga(a) {

    if(a==0){
        
        $("#TipoDeVaga2").val("20.9");
    }else if(a==1){
        $("#TipoDeVaga2").val(18);
    }
}


    atribui_botoes();


function checkdata3() {
    var a = document.forms.Form2.veiculo.value,
        b = document.forms.Form2.placa.value,
        c = document.forms.Form2.name2.value,
        d = document.forms.Form2.email2.value,
        e = document.getElementById("datetimepicker3").value,
        f = document.getElementById("datetimepicker4").value,
        g = Boolean(!0);
    if (null == c || "" == c) {
        if (document.getElementById("n").childNodes.length < 3) {
            var para = document.createElement("p");
            var h = document.createTextNode("Coloque o nome por favor.");
            para.appendChild(h);para.className = "invalido";
            document.getElementById("n").appendChild(para)
        }
        var g = Boolean(!1)
    } else if (3 == document.getElementById("n").childNodes.length) {
        var i = document.getElementById("n"),
            j = document.getElementById("n").childNodes[2];
        i.removeChild(j)
    }
    if (null == d || "" == d) {
        if (document.getElementById("e").childNodes.length < 3) {
            var para2 = document.createElement("p");
            var h = document.createTextNode("Coloque o e-mail por favor.");
            para2.appendChild(h);para2.className = "invalido";
            document.getElementById("e").appendChild(para2)
        }
        var g = Boolean(!1)
    } else {
        var k = /^([\w-]+(\.[\w-]+)*)@(([\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$/i;
        if (k.test(d)) {
            if (3 == document.getElementById("e").childNodes.length) {
                var i = document.getElementById("e"),
                    j = document.getElementById("e").childNodes[2];
                i.removeChild(j)
            }
        } else {
            if (document.getElementById("e").childNodes.length < 4)
                if (3 == document.getElementById("e").childNodes.length) {
                    var i = document.getElementById("e"),
                        j = document.getElementById("e").childNodes[2];
                    i.removeChild(j);
                     var para2 = document.createElement("p");
                    var h = document.createTextNode("E-mail inválido.");
                    para2.appendChild(h);para2.className = "invalido";
                    document.getElementById("e").appendChild(para2)
                } else {
                    var para2 = document.createElement("p");
                    var h = document.createTextNode(" E-mail inválido.");
                     para2.appendChild(h);para2.className = "invalido";
                    document.getElementById("e").appendChild(para2)
                }
            var g = Boolean(!1)
        }
    }
    if (null == a || "" == a) {
        if (document.getElementById("v").childNodes.length < 3) {
             var para2 = document.createElement("p");
            var h = document.createTextNode("Preencha este campo por favor.");
            para2.appendChild(h);para2.className = "invalido";
            document.getElementById("v").appendChild(para2)
        }
        var g = Boolean(!1)
    } else if (3 == document.getElementById("v").childNodes.length) {
        var i = document.getElementById("v"),
            j = document.getElementById("v").childNodes[2];
        i.removeChild(j)
    }
    if (null == b || "" == b) {
        if (document.getElementById("p").childNodes.length < 3) {
            var para2 = document.createElement("p");
            var h = document.createTextNode("Preencha este campo por favor.");
             para2.appendChild(h);para2.className = "invalido";
            document.getElementById("p").appendChild(para2)
        }
        var g = Boolean(!1)
    } else if (3 == document.getElementById("p").childNodes.length) {
        var i = document.getElementById("p"),
            j = document.getElementById("p").childNodes[2];
        i.removeChild(j)
    }
    if (null == e || "" == e) {
        if (document.getElementById("datetimepicker4").childNodes.length < 3) {
            var h = document.createTextNode("Preencha a data de chegada por favor.");
            document.getElementById("datetimepicker4").appendChild(h)
        }
        var g = Boolean(!1)
    } else if (3 == document.getElementById("datetimepicker4").childNodes.length) {
        var i = document.getElementById("datetimepicker4"),
            j = document.getElementById("datetimepicker4").childNodes[2];
        i.removeChild(j)
    }
    if (null == f || "" == f) {
        if (document.getElementById("datetimepicker4").childNodes.length < 3) {
            var h = document.createTextNode("Preencha a data de saída por favor.");
            document.getElementById("datetimepicker4").appendChild(h)
        }
        var g = Boolean(!1)
    } else if (3 == document.getElementById("datetimepicker4").childNodes.length) {
        var i = document.getElementById("datetimepicker4"),
            j = document.getElementById("datetimepicker4").childNodes[2];
        i.removeChild(j)
    }
    return 1 == g && gravadados(), g,reserva_slide(3)
}

