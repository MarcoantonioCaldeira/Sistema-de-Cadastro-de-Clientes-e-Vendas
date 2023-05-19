export  function maskCpf(el) {

    el.addEventListener('input', function(e) {       

      let value = e.target.value;
      value = value.replace(/\D/g, ''); // Remove tudo que não é número

      // Remove os pontos e traços fazendo com que eles não sejam enviados para a API
      value = value.replace(/[.-]/g, '');

      e.target.dataset.cpf = value; // Armazena o CPF sem pontos e traços nos atributos de dados

      value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o primeiro ponto
      value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o segundo ponto
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca o traço no final
      
      e.target.value = value;
    });

}

export  function maskCnpj(el) {

  el.addEventListener('input', function(e) {       

    let value = e.target.value;
    //value = value.replace(/\D/g, ''); // Remove tudo que não é número

    // Remove os pontos e traços fazendo com que eles não sejam enviados para a API
    value = value.replace(/[.-/]/g, '');

    e.target.dataset.cpf = value; // Armazena o CPF sem pontos e traços nos atributos de dados

    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o primeiro ponto
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o segundo ponto
    value = value.replace(/(\d{3})(\d)$/, '$1/$2'); // Coloca o traço no final
    value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2'); // Coloca o traço no final
    
    e.target.value = value;
  });

}

export function maskRG(el) {

    el.addEventListener('input', function(e) {
        let value = e.target.value;

        value = value.replace(/\D/g, ''); // Remove tudo que não é número
    
        // Aplica a máscara do RG de acordo com o formato esperado

        // Remove os pontos e traços fazendo com que eles não sejam enviados para a API
        value = value.replace(/[.-]/g, '');

        if (value.length <= 2) {

          value = value.replace(/^(\d{0,2})/, '$1');

        } else if (value.length <= 5) {

          value = value.replace(/^(\d{0,2})(\d{0,3})/, '$1.$2');

        } else if (value.length <= 8) {

          value = value.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})/, '$1.$2.$3');

        } else if (value.length <= 9) {

          value = value.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,1})/, '$1.$2.$3-$4');

        } else {

          value = value.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,1}).*/, '$1.$2.$3-$4');

        }
    
        e.target.value = value;
    });
}

export function maskTelefone(el){

    el.addEventListener('input', function(e){
      let value = e.target.value;
      value = value.replace(/\D/g, '');

      // Remove os pontos e traços fazendo com que eles não sejam enviados para a API
      value = value.replace( / [\(\)-]/g, '');

      //Telefone           
      //(parte_1) parte_2 - parte_3
      value = value.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})$/, '($1) $2-$3');

      e.target.value = value;
    });

}

export function maskCelular(el){

  el.addEventListener('input', function(e){
    let value = e.target.value;
    value = value.replace(/\D/g, '');

    // Remove os pontos e traços fazendo com que eles não sejam enviados para a API
    value = value.replace(/[\(\)-]/g, '');
   
    //Celular
    value = value.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})$/, '($1) $2-$3');

    e.target.value = value;
  });

}

// maskCepDirective.js
// export const maskCep = {

//   bind: function maskCepBind(el) {

//     el.addEventListener('input', function(e) {
//       let value = e.target.value;
//       value = value.replace(/\D/g, ''); // Remove tudo que não é número

//       if (value.length > 5) {
//         value = value.replace(/^(\d{5})(\d{0,3})$/, '$1-$2'); // Coloca o hífen após os primeiros 5 dígitos
//       }

//       // Remove o traço antes de atribuir o valor ao modelo
//       const modelProperty = el.getAttribute('v-model');

//       if (modelProperty) {
//         const modelValue = modelProperty.split('.').reduce((obj, prop) => obj[prop], e.target);
//         modelValue[modelProperty.split('.').pop()] = value.replace('-', '');
//       }

//       e.target.value = value;
//     });
//   },
//   unbind: function maskCepUnbind(el) {
//     el.removeEventListener('input', null);
//   }
// };

 