<template>
    <div class="d-flex flex-column justify-center align-center">
      <h1 class="text-left w-100">Documentação da API</h1>
        <p>A API é responsável por fornecer funcionalidades relacionadas à criptografia de mensagens utilizando uma biblioteca em C. Ela oferece rotas para gerar chave pública, criptografar e descriptografar mensagens.</p>
      <div class="my-5 w-100">
        <h2>Funcionalidades</h2>
        <h2 class="text-h6 text-sm-h5 font-weight-bold"> - Rota "/" </h2>
        <ul class="ml-1 ml-sm-10 my-1">
            <li> Descrição: Retorna uma mensagem informando que a API está em funcionamento.</li>
            <li> Método: GET </li>
        </ul>
        <h2 class="text-h6 text-sm-h5 font-weight-bold"> - Rota "/chavepublica/{p}/{q}/{e}"</h2>
        <ul class="ml-1 ml-sm-10 my-1">
            <li> Descrição: Gera uma chave pública com base nos parâmetros fornecidos.</li>
            <li> Método: GET </li>
            <li> Parâmetros:
                <ul class="ml-5">
                    <li> p (string): Parâmetro p para a geração da chave. </li>
                    <li> q (string): Parâmetro q para a geração da chave. </li>
                    <li> e (string): Parâmetro e para a geração da chave. </li>
                </ul>
            </li>
            <li>Retorno:
                <ul class="ml-5">
                    <li>
                        public_key (string): Chave pública gerada.
                    </li>
                </ul>
            </li>
        </ul>
        <h2 class="text-h6 text-sm-h5 font-weight-bold"> - Rota "/criptografar/{mensagem}/{key}/{e}" </h2>
        <ul class="ml-1 ml-sm-10 my-1">
            <li> Descrição: Criptografa uma mensagem pura utilizando os parâmetros fornecidos.</li>
            <li> Método: GET </li>
            <li> Parâmetros:
                <ul class="ml-5">
                    <li> mensagem (string): Mensagem a ser criptografada. </li>
                    <li> key (string): Parâmetro Chave_Publica para criptografar a mensagem. </li>
                    <li> e (string): Parâmetro e para criptografar a mensagem. </li>
                </ul>
            </li>
            <li>Retorno:
                <ul class="ml-5">
                    <li>
                        encrypted_message (string): Mensagem criptografada.
                    </li>
                </ul>
            </li>
        </ul>
        <h2 class="text-h6 text-sm-h5 font-weight-bold d-none d-sm-flex"> - Rota "/descriptografar/{p}/{q}/{e}/{mensagem_criptografada}"</h2>
        <h2 class="text-h6 text-sm-h5 font-weight-bold d-sm-none d-flex flex-column"> - Rota "/descriptografar/<br>{p}/{q}/{e}/{mensagem_criptografada}"</h2>
        <ul class="ml-1 ml-sm-10 my-1">
            <li> Descrição: Descriptografa uma mensagem dado os parâmetros corretos.</li>
            <li> Método: GET </li>
            <li> Parâmetros:
                <ul class="ml-5">
                    <li> p (string): Parâmetro p para a descriptografia da mensagem </li>
                    <li> q (string): Parâmetro q para a descriptografia da mensagem . </li>
                    <li> e (string): Parâmetro e para a descriptografia da mensagem </li>
                    <li> mensagem_criptografada (string): Mensagem a ser descriptografada </li>
                </ul>
            </li>
            <li>Retorno:
                <ul class="ml-5">
                    <li>
                        decrypted_message (string): Mensagem descriptografada.
                    </li>
                </ul>
            </li>
        </ul>
        <h2>Bibliotecas e Ferramentas Utilizadas</h2>
        <a class="tools-titles" href="https://flask.palletsprojects.com/en/3.0.x/" target="_blank"><p>#1</p>Flask</a>
        <p class="mb-1"> A biblioteca Flask é utilizada para criar a API e definir as rotas.</p>
        <a class="tools-titles" href="https://flask-cors.readthedocs.io/en/latest/" target="_blank"><p> #2</p>Flask-CORS</a>
        <p class="mb-1">A biblioteca Flask-CORS é utilizada para permitir solicitações de outros domínios, garantindo que a API possa ser acessada por diferentes origens.</p>
        <a class="tools-titles" href="https://docs.python.org/3/library/ctypes.html" target="_blank"><p>#3</p>ctypes</a>
        <p class="mb-1">A biblioteca ctypes é utilizada para acessar funções de uma biblioteca em C através de chamadas externas.</p>
        <a class="tools-titles" href="https://www.pythonanywhere.com/" target="_blank"><p>#4</p>pythonanywhere</a>
        <p class="mb-1">PythonAnywhere é um ambiente de desenvolvimento integrado e serviço de hospedagem web baseado na linguagem de programação Python</p>
       <a class="tools-titles" href="https://github.com/criptografia-rsa/api" target="_blank"><p> #5</p>Executando a API</a>
        <p class="mb-1">Para executar a API, você pode rodar o script Python fornecido neste documento. Certifique-se de ter todas as bibliotecas necessárias instaladas e de possuir o arquivo "clibrary.so" na mesma pasta do script.</p>
      </div>
      <ButtonsRow
        nextName="FrontEnd"
        @next="nextPage"
        previousName="API"
        @previous="previousPage"
      />
    </div>
  </template>
  
  <script setup>
  import ButtonsRow from "./buttonsRow.vue";
  import { defineEmits } from "vue";
  const emit = defineEmits(["next", "previous"]);
  const nextPage = () => {
    emit("next", "frontEnd");
  };
  
  const previousPage = () => {
    emit("previous", "API");
  };
  </script>
  

<style scoped>
li{
    margin-top: 10px;
}

.tools-titles{
    color:white;
    font-size: 20px;;
}
.tools-titles p{
    margin-right: 5px;
    color: #966cea;
    display: inline;
    transition: all 0.5s ease;
}

.tools-titles:hover p{
    color: rgb(172, 140, 236);
}
</style>