function botaoatt() {
    $("#botao").click(function() {
        remote = 1;
        var a = calc();
        document.getElementById("calculo").hasChildNodes() ? ($("#calculo").empty(), $("#calculo").append(a)) : $("#calculo").append(a), document.getElementById("result").hasChildNodes() ? ($("#result").empty(), $("#result").append("R$ " + preco.toFixed(2)), tranfere_reserva()) : ($("#result").append("R$ " + preco.toFixed(2)), tranfere_reserva()), preco = ""
    })
}

function botaoatt2() {
    if (remote = 2, "" !== $("#datetimepicker3").val() && "" !== $("#datetimepicker4").val()) {
        var a = calc();
        document.getElementById("calculo2").hasChildNodes() ? ($("#calculo2").empty(), $("#calculo2").append(a)) : $("#calculo2").append(a), document.getElementById("result2").hasChildNodes() ? ($("#result2").empty(), $("#result2").append("R$ " + preco.toFixed(2))) : $("#result2").append("R$ " + preco.toFixed(2)), preco = ""
    }
}

function calc() {
    var a = 0,
        b = 0;
    if (1 == remote) var c = $("#datetimepicker").datetimepicker("getValue"),
        d = $("#datetimepicker2").datetimepicker("getValue");
    else var c = $("#datetimepicker3").datetimepicker("getValue"),
        d = $("#datetimepicker4").datetimepicker("getValue");
    var e = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        f = 365 * (d.getFullYear() - c.getFullYear() - 1);
    0 > f && (f = 0);
    var g = c.getFullYear(),
        h = d.getFullYear();
    console.log("quantidade de anos = " + f);
    var j = c.getMonth() + 1,
        k = d.getMonth() + 1,
        l = c.getDate(),
        m = d.getDate(),
        n = c.getHours(),
        o = c.getMinutes();
    o > 25 && (a = 1);
    var p = d.getHours(),
        q = d.getMinutes();
    if (q > 25 && (b = 1), g == h) var r = e.slice(j, k);
    else {
        var s = e.slice(j);
        e.splice(0, 1);
        var t = s.concat(e),
            u = 12 - j + k,
            r = t.slice(0, u)
    }
    var v = 0;
    for (i = 0; i < r.length; i++) v += r[i];
    var w = v - l + m + f;
    console.log("quantidade de dias = " + w);
    var x = 24 - n - a + p + b - 24,
        y = 24 + x.valueOf();
    console.log("quantidade de horas antes do arremate = " + x), console.log("quantidade de horas negativas antes do arremate = " + y), console.log("quantidade de horas  = " + x), console.log("quantidade de horas negativas = " + y);
    var z = x > 0 ? x : y,
        A = horas_a_mais(z, x, 1, $("#TipoDeVaga").val()),
        B = Number(A),
        C = horas_a_mais(z, x, 1, $("#TipoDeVaga2").val()),
        D = Number(C);
    return w >= 7 ? (preco = dias(w, remote), console.log("dias( qtd dias , remote)")) : 1 > w ? (preco = horas(z, remote), console.log("horas( numero , remote)")) : 1 == w && n >= p ? (preco = horas(z, remote), console.log("horas(numero, remote)")) : 1 == remote ? (preco = w * $("#TipoDeVaga").val() + B, console.log(w + "* " + $("#TipoDeVaga").val() + "+ ( " + horas_a_mais(z, x, 1, $("#TipoDeVaga").val()) + "/ hora a mais * " + $("#TipoDeVaga").val() + ") ")) : (preco = w * $("#TipoDeVaga2").val() + D, console.log(w + "* " + $("#TipoDeVaga2").val() + "+ ( " + x + "/ 24 * " + $("#TipoDeVaga2").val() + ") ")), console.log("memória de cálculo = " + z - 1 + "* 2,5 + 3,5"), 24 != x && 24 != y || (w += 1, x = 0, y = 0), x > 0 ? w + " dia(s), " + x + " hora(s)." : w - 1 + " dia(s), " + y + " hora(s)."
}



function checkdata() {
    var a = document.forms["Form#1"].name.value,
        b = document.forms["Form#1"].email.value,
        c = Boolean(!0);
    if (null == a || "" == a) {
        if (document.getElementById("name").childNodes.length < 2) {
            var d = document.createTextNode("Coloque o nome por favor.");
            document.getElementById("name").appendChild(d)
        }
        var c = Boolean(!1)
    }
    if (null == b || "" == b) {
        if (document.getElementById("email").childNodes.length < 2) {
            var d = document.createTextNode("Coloque o e-mail por favor.");
            document.getElementById("email").appendChild(d)
        }
        var c = Boolean(!1)
    } else {
        var e = /^([\w-]+(\.[\w-]+)*)@(([\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$/i;
        if (!e.test(b)) {
            document.getElementById("email").innerHTML = " E-mail inv&aacute;lido.";
            var c = Boolean(!1)
        }
    }
    return 1 == c && aguarde(), c
}

function checkdata2() {
    var a = document.forms.Form2.veiculo.value,
        b = document.forms.Form2.placa.value,
        c = document.forms.Form2.name2.value,
        d = document.forms.Form2.email2.value,
        e = document.getElementById("datetimepicker3").value,
        f = document.getElementById("datetimepicker4").value,
        g = Boolean(!0);
    if (null == c || "" == c) {
        if (document.getElementById("name2").childNodes.length < 2) {
            var h = document.createTextNode("Coloque o nome por favor.");
            document.getElementById("name2").appendChild(h)
        }
        var g = Boolean(!1)
    } else if (2 == document.getElementById("name2").childNodes.length) {
        var i = document.getElementById("name2"),
            j = document.getElementById("name2").childNodes[1];
        i.removeChild(j)
    }
    if (null == d || "" == d) {
        if (document.getElementById("email2").childNodes.length < 2) {
            var h = document.createTextNode("Coloque o e-mail por favor.");
            document.getElementById("email2").appendChild(h)
        }
        var g = Boolean(!1)
    } else {
        var k = /^([\w-]+(\.[\w-]+)*)@(([\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$/i;
        if (k.test(d)) {
            if (2 == document.getElementById("email2").childNodes.length) {
                var i = document.getElementById("email2"),
                    j = document.getElementById("email2").childNodes[1];
                i.removeChild(j)
            }
        } else {
            if (document.getElementById("email2").childNodes.length < 3)
                if (2 == document.getElementById("email2").childNodes.length) {
                    var i = document.getElementById("email2"),
                        j = document.getElementById("email2").childNodes[1];
                    i.removeChild(j);
                    var h = document.createTextNode("E-mail inválido.");
                    document.getElementById("email2").appendChild(h)
                } else {
                    var h = document.createTextNode(" E-mail inválido.");
                    document.getElementById("email2").appendChild(h)
                }
            var g = Boolean(!1)
        }
    }
    if (null == a || "" == a) {
        if (document.getElementById("veiculo").childNodes.length < 4) {
            var h = document.createTextNode("Preencha este campo por favor.");
            document.getElementById("veiculo").appendChild(h)
        }
        var g = Boolean(!1)
    } else if (4 == document.getElementById("veiculo").childNodes.length) {
        var i = document.getElementById("veiculo"),
            j = document.getElementById("veiculo").childNodes[3];
        i.removeChild(j)
    }
    if (null == b || "" == b) {
        if (document.getElementById("placa").childNodes.length < 2) {
            var h = document.createTextNode("Preencha este campo por favor.");
            document.getElementById("placa").appendChild(h)
        }
        var g = Boolean(!1)
    } else if (2 == document.getElementById("placa").childNodes.length) {
        var i = document.getElementById("placa"),
            j = document.getElementById("placa").childNodes[1];
        i.removeChild(j)
    }
    if (null == e || "" == e) {
        if (document.getElementById("dt3").childNodes.length < 3) {
            var h = document.createTextNode("Preencha a data de chegada por favor.");
            document.getElementById("dt3").appendChild(h)
        }
        var g = Boolean(!1)
    } else if (3 == document.getElementById("dt3").childNodes.length) {
        var i = document.getElementById("dt3"),
            j = document.getElementById("dt3").childNodes[2];
        i.removeChild(j)
    }
    if (null == f || "" == f) {
        if (document.getElementById("dt4").childNodes.length < 3) {
            var h = document.createTextNode("Preencha a data de saída por favor.");
            document.getElementById("dt4").appendChild(h)
        }
        var g = Boolean(!1)
    } else if (3 == document.getElementById("dt4").childNodes.length) {
        var i = document.getElementById("dt4"),
            j = document.getElementById("dt4").childNodes[2];
        i.removeChild(j)
    }
    return 1 == g && tt(), g
}

function tabela(a, b) {
    function c(a) {
        var b = document.body.innerHTML;
        document.body.innerHTML = a + b
    }
    if ("0" == a) {
        $("#tb1").empty();
        var d = document.createElement("tr"),
            e = document.createElement("td"),
            f = document.createTextNode(b),
            a = document.createElement("a");
        a.setAttribute("onclick", "tabela('1', 0);"), a.setAttribute("href", "javascript:void(0)"), a.appendChild(document.createTextNode("X")), d.appendChild(e), e.appendChild(f), e.appendChild(a);
        var g = document.getElementById("tb1");
        g.appendChild(d)
    } else if ("1" == a) {
        closeNav(), $("#sidenav").remove(), window.XMLHttpRequest ? xmlhttp = new XMLHttpRequest : xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        var h = "../reservas.php";
        xmlhttp.onreadystatechange = function() {
            if (4 == this.readyState && 200 == this.status) {
                var a = this.responseText;
                c(a), setClock()
            }
        }, xmlhttp.open("GET", h, !0), xmlhttp.send()
    }
}

function tt() {
    $("#e").attr("value", "Aguarde..."), $.ajax({
        url: "http://estacionamentopatioconfins.com.br/check.php",
        type: "POST",
        data: $("#Form2").serialize(),
        success: function(a) {
            console.log(a), tabela("0", a)
        },
        error: function(a, b, c) {
            console.log(a, b, c)
        }
    })
}

function tranfere_reserva() {
    $("#botao").off("click"), $("#botao").empty().append("Faça sua reserva").attr("onclick", "tranfere_reserva2();"), document.getElementById("datetimepicker").addEventListener("click", volta_calc), document.getElementById("datetimepicker2").addEventListener("click", volta_calc), document.getElementById("TipoDeVaga").addEventListener("click", volta_calc)
}

function tranfere_reserva2() {
    var a = $("#datetimepicker").val(),
        b = $("#datetimepicker2").val(),
        c = $("#TipoDeVaga").val();
    $("#datetimepicker3").val(a), $("#datetimepicker4").val(b), $("#TipoDeVaga2").val(c), $("#datetimepicker3").on("click", function() {
        $("#datetimepicker3").val(""), $("#datetimepicker4").val(""), $("#datetimepicker4").off("click"), $("#datetimepicker3").off("click")
    }), $("#datetimepicker4").on("click", function() {
        $("#datetimepicker4").val(""), $("#datetimepicker3").val(""), $("#datetimepicker4").off("click"), $("#datetimepicker3").off("click")
    }), openNav()
}

function volta_calc() {
    $("#botao").empty().append("Calcule").attr("onclick", "novo_botaoatt(1);"), $("#datetimepicker").off("click"), $("#datetimepicker2").off("click"), $("#TipoDeVaga").off("click")
}



function myTrim(a) {
    return a.replace(/^\s+|\s+$/gm, "")
}

function poe_endereco(a) {
    $("#directions-searchbox-0 input").value = a
}

function myFunction(a) {
    a.classList.toggle("change");
    var b = document.getElementsByClassName("menu_mob").item(0);
    "0px" === b.style.height || "" === b.style.height ? b.style.height = "174px" : b.style.height = "0px";
    var c = document.getElementsByClassName("linha");
    if ("none" === c.item(0).style.display || "" === c.item(0).style.display)
        for (i = 0; i < c.length; i++) c.item(i).style.display = "block";
    else
        for (i = 0; i < c.length; i++) c.item(i).style.display = "none"
}
$(document).ready(function() {
    $('#botao').on('click', function() {
        novo_botaoatt(1)
    })
}) 