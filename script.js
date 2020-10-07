

var html = '<tr><td><input type="text" name="name" id="name"></td><td><input type="text" name="valor" class="valor" id="valor"></td><td><div name="total1" class="total" id="total1"></div></td><td><button class="remove">-</button></td></tr>';


  
  $('tbody').sortable();
  
  $('#addRow').click(function () {
    $('#tbody-individual').append(html);
  });

  $(document).on('click', '.remove', function () {
    $(this).parents('tr').remove();
  });

  const btnValor = document.getElementById('calcular');
  const inputValorComum = document.getElementById('valor-comum');
  const inputValor1 = document.getElementById('valor1');
  const inputTotal1 = document.getElementById('total1');
  const inputValor2 = document.getElementById('valor2');
  const inputTotal2 = document.getElementById('total2');
  const inputValor3 = document.getElementById('valor3');
  const inputTotal3 = document.getElementById('total3');
  const inputValor4 = document.getElementById('valor4');
  const inputTotal4 = document.getElementById('total4');
  const inputValor5 = document.getElementById('valor5');
  const inputTotal5 = document.getElementById('total5');
  const inputValor6 = document.getElementById('valor6');
  const inputTotal6 = document.getElementById('total6');
  const inputValor7 = document.getElementById('valor7');
  const inputTotal7 = document.getElementById('total7');
  const inputValor8 = document.getElementById('valor8');
  const inputTotal8 = document.getElementById('total8');
  const inputValor9 = document.getElementById('valor9');
  const inputTotal9 = document.getElementById('total9');
  const inputValor10 = document.getElementById('valor10');
  const inputTotal10 = document.getElementById('total10');
  btnValor.addEventListener('click', () => {    
    let reg1 = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let arrayStrings1 = inputValor1.value.match(reg1);
    let soma1 = 0;
    let arrayNumbers1 = [];
    for (let index = 0; index < arrayStrings1.length; index += 1) {
      arrayNumbers1[index] = parseFloat(arrayStrings1[index]);
      soma1 += arrayNumbers1[index];
      console.log(arrayNumbers1[index]);

    }

    inputTotal1.innerHTML = `R$ ${soma1}`;

    let reg2 = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let arrayStrings2 = inputValor2.value.match(reg2);
    let soma2 = 0;
    let arrayNumbers2 = [];
    for (let index = 0; index < arrayStrings2.length; index += 1) {
      arrayNumbers2[index] = parseFloat(arrayStrings2[index]);
      soma2 += arrayNumbers2[index];
      console.log(arrayNumbers2[index]);

    }

    inputTotal2.innerHTML = `R$ ${soma2}`;

    let reg3 = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let arrayStrings3 = inputValor3.value.match(reg3);
    let soma3 = 0;
    let arrayNumbers3 = [];
    for (let index = 0; index < arrayStrings3.length; index += 1) {
      arrayNumbers3[index] = parseFloat(arrayStrings3[index]);
      soma3 += arrayNumbers3[index];
      console.log(arrayNumbers3[index]);

    }

    inputTotal3.innerHTML = `R$ ${soma3}`;

    let reg4 = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let arrayStrings4 = inputValor4.value.match(reg4);
    let soma4 = 0;
    let arrayNumbers4 = [];
    for (let index = 0; index < arrayStrings4.length; index += 1) {
      arrayNumbers4[index] = parseFloat(arrayStrings4[index]);
      soma4 += arrayNumbers4[index];
      console.log(arrayNumbers4[index]);

    }

    inputTotal4.innerHTML = `R$ ${soma4}`;

    let reg5 = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let arrayStrings5 = inputValor5.value.match(reg5);
    let soma5 = 0;
    let arrayNumbers5 = [];
    for (let index = 0; index < arrayStrings5.length; index += 1) {
      arrayNumbers5[index] = parseFloat(arrayStrings5[index]);
      soma5 += arrayNumbers5[index];
      console.log(arrayNumbers5[index]);

    }

    inputTotal5.innerHTML = `R$ ${soma5}`;

    let reg6 = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let arrayStrings6 = inputValor6.value.match(reg6);
    let soma6 = 0;
    let arrayNumbers6 = [];
    for (let index = 0; index < arrayStrings6.length; index += 1) {
      arrayNumbers6[index] = parseFloat(arrayStrings6[index]);
      soma6 += arrayNumbers6[index];
      console.log(arrayNumbers6[index]);

    }

    inputTotal6.innerHTML = `R$ ${soma6}`;

    let reg7 = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let arrayStrings7 = inputValor7.value.match(reg7);
    let soma7 = 0;
    let arrayNumbers7 = [];
    for (let index = 0; index < arrayStrings7.length; index += 1) {
      arrayNumbers7[index] = parseFloat(arrayStrings7[index]);
      soma7 += arrayNumbers7[index];
      console.log(arrayNumbers7[index]);

    }

    inputTotal7.innerHTML = `R$ ${soma7}`;

    let reg8 = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let arrayStrings8 = inputValor8.value.match(reg8);
    let soma8 = 0;
    let arrayNumbers8 = [];
    for (let index = 0; index < arrayStrings8.length; index += 1) {
      arrayNumbers8[index] = parseFloat(arrayStrings8[index]);
      soma8 += arrayNumbers8[index];
      console.log(arrayNumbers8[index]);

    }

    inputTotal8.innerHTML = `R$ ${soma8}`;

    let reg9 = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let arrayStrings9 = inputValor9.value.match(reg9);
    let soma9 = 0;
    let arrayNumbers9 = [];
    for (let index = 0; index < arrayStrings9.length; index += 1) {
      arrayNumbers9[index] = parseFloat(arrayStrings9[index]);
      soma9 += arrayNumbers9[index];
      console.log(arrayNumbers9[index]);

    }

    inputTotal9.innerHTML = `R$ ${soma9}`;

    let reg10 = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let arrayStrings10 = inputValor10.value.match(reg10);
    let soma10 = 0;
    let arrayNumbers10 = [];
    for (let index = 0; index < arrayStrings10.length; index += 1) {
      arrayNumbers10[index] = parseFloat(arrayStrings10[index]);
      soma10 += arrayNumbers10[index];
      console.log(arrayNumbers10[index]);

    }
    inputTotal10.innerHTML = `R$ ${soma10}`;
    

  })



