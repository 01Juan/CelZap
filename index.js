// var $input_quantidade = document.querySelector("#qtd");
// var $output_total = document.querySelector("#total");


// $input_quantidade.oninput = function() {
//     var preco = document.querySelector("#preco").textContent;
//     preco = preco.replace("R$ ", "");
//     preco = preco.replace(",", ".");
//     preco = parseFloat(preco);

//     var quantidade = $input_quantidade.value;
//     var total = quantidade * preco;
//     total = "R$ " + total.toFixed(2);
//     total = total.replace(".", ",");

//     $output_total.value = total;
// }




function refreshPage() {
    // document.getElementById("numero").innerHTML="";
    // document.getElementById("lblRelatorioMaterialidade").reset();

    var pais = document.querySelector(".pais");
    var cidade = document.querySelector(".cidade");
    var sequencia = document.querySelector(".sequencia");
    var quantidade = document.querySelector(".quantidade");
    var texto = document.querySelector(".texto");
    var vPais = pais.value;
    var vCidade = cidade.value;
    var vTexto = texto.value;
    var vQuantidade = parseFloat(quantidade.value);
    var vSequencia = parseFloat(sequencia.value);
    var vSequencia2 = parseFloat(sequencia.value) + vQuantidade;

    for (var i = vSequencia; i < vSequencia2; i++) {
        var numero = document.createElement("div");
        numero.setAttribute("class", "numero");
        numero.setAttribute("id", "limpar");
        var href = document.createElement("a");
        href.setAttribute("href", "https://api.whatsapp.com/send?phone=" + vPais + vCidade + i + "&text=" + vTexto);
        href.setAttribute("id", i);
        href.innerHTML = i;
        document.getElementsByTagName("body")[0].appendChild(numero);
        // var img = document.createElement("img");
        // img.setAttribute("src", i + ".png");
        // href.appendChild(img);
        

        //Boxs
        //var box = document.createElement("input");
        //box.setAttribute("type", "checkbox");
        //document.getElementsByTagName("body")[0].appendChild(numero);
    //
        //var box2 = document.createElement("input");
        //box2.setAttribute("type", "checkbox");
        //document.getElementsByTagName("body")[0].appendChild(numero);
    //
        //var box3 = document.createElement("input");
        //box3.setAttribute("type", "checkbox");
        //document.getElementsByTagName("body")[0].appendChild(numero);
    //
        //numero.appendChild(box);
        //numero.appendChild(box2);
        //numero.appendChild(box3);
        numero.appendChild(href);
    }
    limpar()
}

function limpar() {
//    document.getElementById("limpar").innerHTML="";
    // document.getElementById("limpar").reset();
    HTMLFormElement.reset()
}