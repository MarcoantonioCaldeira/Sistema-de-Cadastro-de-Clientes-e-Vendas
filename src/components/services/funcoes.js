export  function maskCpf(el) {

    el.addEventListener('input', function(e) {       
      let value = e.target.value;
      value = value.replace(/\D/g, ''); // Remove tudo que não é número
      value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o primeiro ponto
      value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o segundo ponto
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca o traço no final
      e.target.value = value;
    });

}

export function maskRG(el) {

    el.addEventListener('input', function(e) {
        let value = e.target.value;

        value = value.replace(/\D/g, ''); // Remove tudo que não é número
    
        // Aplica a máscara do RG de acordo com o formato esperado

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

            if(value.length <= 10){
                                        //(parte_1) parte_2 - parte_3
                value = value.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})$/, '($1) $2-$3');

            }else{

                value = value.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})$/, '($1) $2-$3');

            }

            e.target.value = value;
    });

}

export function maskCEP(el){

    el.addEventListener('input', function(e){
        let value = e.target.value;
        value = value.replace(/\D/g, '');
      
        if (value.length > 5) {

          value = value.replace(/^(\d{5})(\d{0,3})$/, '$1-$2'); // Coloca o hífen após os primeiros 5 dígitos
        }
  
        e.target.value = value;
    })

    e.target.value = value;
}
 