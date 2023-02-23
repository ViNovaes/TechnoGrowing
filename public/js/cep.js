(function(){ 

    const CEP = document.querySelector("input[name=CEP]");

    CEP.addEventListener('blur', e=> {
        const value = CEP.value.replace(/[^0-9]+/, '');
        const url = `https://viacep.com.br/ws/${value}/json/`;

    fetch(url)
    .then( response => response.json())
    .then( json => {

            if( json.logradouro ) {
                document.querySelector('input[name=Endereco]').value = json.logradouro;
                    document.querySelector('input[name=Bairro]').value = json.bairro;
                    document.querySelector('input[name=Cidade]').value = json.localidade;
                    document.querySelector('input[name=Estado]').value = json.uf;
            }
        });
    });
})();