'use strict';

const preencherFormulario = (endereco) => {
    document.getElementById('endereco_id').value = endereco.logradouro;
    document.getElementById('bairro_id').value = endereco.bairro;
    document.getElementById('cidade_id').value = endereco.localidade;
    document.getElementById('estado_id').value = endereco.uf;
}

const pesquisarCep = async() => {
    const cep = document.getElementById('cep_id').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`; //o uso de crase ao invés de aspas simples por ser dinamico, usa o template string

    const dados = await fetch(url); //aguarde a solução
    const endereco = await dados.json();
    preencherFormulario(endereco);
}

document.getElementById('cep_id').addEventListener('focusout', pesquisarCep);
//o addEventListener pega as ações
