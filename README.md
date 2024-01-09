# Sistema de Cadastro de Clientes e Vendas

## Tecnologias utilizadas
+ VueJS
+ Vuex
+ Axios
+ Sass
+ Integração com Rest API


## Imagens do Projeto
![Tela_de_Login](https://github.com/MarcoantonioCaldeira/Sistema-de-Cadastro-de-Clientes-e-Vendas/assets/88919003/8cafd1ef-80bf-4d05-ad32-b3abb30dda64)

![TelaInicial](https://github.com/MarcoantonioCaldeira/Sistema-de-Cadastro-de-Clientes-e-Vendas/assets/88919003/9ce15b3e-49bd-4647-80d5-b5eba0338dff)

![SelecaoPesso](https://github.com/MarcoantonioCaldeira/Sistema-de-Cadastro-de-Clientes-e-Vendas/assets/88919003/b30c6352-48bc-4a0e-89f0-6ca09df991d8)

![TelaCadastro](https://github.com/MarcoantonioCaldeira/Sistema-de-Cadastro-de-Clientes-e-Vendas/assets/88919003/a2c4f2fa-28e2-4813-99fa-ef0fcee4b66a)

![CadastroVenda](https://github.com/MarcoantonioCaldeira/Sistema-de-Cadastro-de-Clientes-e-Vendas/assets/88919003/d71700c9-8983-40b3-9db2-626572422879)




## Funcionalidades

+ Login
  > A pagina inicial é a **Tela de Login** onde o **Admin** ira fazer a autenticação para as rotas protegidas
+ Cadastro de Clientes
  > Os Clientes são separados em Três tipos de Pessoa: **Pessoa Fisica** , **Pessoa Juridica** e **Pessoa Estrangeira**

  ### Modelo de Requisição
     
  
  ```
     {
        "cliente": {
          "celular": "18998673322",
          "classificacao": 1,
          "classificacao_entrega": 1,
          "cnpj_cpf": "xxxxxxxxxx",
          "cnpj_cpf_entrega": "xxxxxxxxx",
          "cod_vendedor": 1,
          "e_mail": "teste@teste.com.br",
          "e_mail_nfe": "teste@teste.com.br",
          "inscricao_municipal": "99999",
          "inscricao_rg": "426357322",
          "nascimento": "2020-03-10",
          "nome": "Fulano de Tal",
          "nome_fantasia": "",
          "observacao": "cliente observação",
          "suframa": "985454",
          "suframa_tipo": 0,
          "cliente_enderecos": [
            {
              "bairro": "bairro",
              "cep": "16260000",
              "cidade": "cidade",
              "cod_cidade": 3512506,
              "cod_pais": 1058,
              "complemento": "complemento",
              "endereco": "endereco",
              "end_numero": "10",
              "estado": "SP",
              "fax": "xxxxxxxx",
              "telefone": "1836421800",
              "tipo_endereco": 0
            }
          ],
          "cliente_emails": [
            {
              "email": "teste@tigestor.com.br",
              "email_recebe": [
                { "recebe": 0 },
                { "recebe": 1 },
                { "recebe": 2 }
              ]
            }
          ]
        }
      }
  ```

       
+ Cadastro de Vendas
  > No Cadastro de Vendas o usuario ira criar a **Venda** e adicionar os **Itens da Venda**

  ### Modelo de Requisição
  > Quando a venda é finalizada o Cliente que a venda é pertencida também é eviado junto e o cadastro é finalizado

    ```
    {
      "vendas": [{
      "cod_empresa": 1,
      "cod_preposto": null,
      "cod_redespacho": 1,
      "cod_tab_preco": 1,
      "cod_prazo": 1,
      "cod_prazo_x": 1,
      "cod_transportadora": 1,
      "cod_vendedor": 1,
      "data_base_fatura": "2020-03-10",
      "data_emissao": "2020-03-10",
      "data_entrega_solicitada": "2020-03-10",
      "data_prev_entrega": "2020-03-10",
      "desconto_n1": 5.50,
      "desconto_n2": 6.50,
      "desconto_n3": 7.50,
      "desconto_n4": 9.99,
      "desconto_pagto": 50.55,
      "desconto_s1": 1.50,
      "desconto_s2": 2.50,
      "desconto_s3": 3.50,
      "desconto_s4": 19.99,
      "flag_frete_vr_ou_perc": 0,
      "forma_pagto": 2,
      "forma_pagto_x": 2,
      "id_venda_api": 999,
      "id_venda_terceiro": 44,
      "nome_comprador": "nome do comprador",
      "num_pedido_cliente": "1212",
      "obs_faturamento": "observação do faturamento",
      "obs_nota_fiscal": "observação do faturamento",
      "obs_pedido": "observação do pedido",
      "obs_producao": "observação de produção ",
      "perc_frete": 10.5,
      "redespacho_sit_frete": 1,
      "situacao_frete": "1",
      "cod_tipo_venda": 1,
      "cod_sit_cobranca": 1,
      "vr_frete": 10.1,
      
      "cliente": {
        "celular": "18998673322",
        "classificacao": 1,
        "classificacao_entrega": 1,
        "cnpj_cpf": "36810607897",
        "cnpj_cpf_entrega": "36810607897",
        "cod_vendedor": 1,
        "e_mail": "teste@tigestor.com.br",
        "e_mail_nfe": "teste@nfe.com.br",
        "inscricao_municipal": "99999",
        "inscricao_rg": "426357322",
        "nascimento": "2020-03-10",
        "nome": "Fulano de Tal",
        "nome_fantasia": "",
        "observacao": "cliente observação",
        "suframa": "985454",
        "suframa_tipo": 0,
          "cliente_enderecos": [{
          "bairro": "bairro",
          "cep": "16260000",
          "cidade": "coroados",
          "cod_cidade": 3512506,
          "cod_pais": 1058,
          "complemento": "complemento",
          "endereco": "endereco",
          "end_numero": "10",
          "estado": "SP",
          "fax": "1836421800",
          "telefone": "1836421800",
          "tipo_endereco": 0
          }],
            "cliente_emails": [{
              "email": "teste@tigestor.com.br",
              "email_recebe": [{
                "recebe": 0
              },
              {
                "recebe": 1
              },
              {
                "recebe": 2
              }
              ]
            }]
      	
      },
      	
        "vendas_itens": [{
          "cod_referencia": "003.001.004",
          "obs_item": "observação do item",
          "qtd_caixa": 2,
          "tipo_do_item": 2,
          "vendas_itens_tamanhos": [{
              "qtd_tamanho": 3,
              "tamanho": "20",
              "valor_unitario": 61.00
            },
            {
              "qtd_tamanho": 3,
              "tamanho": "21",
              "valor_unitario": 64.00
            },
            {
              "qtd_tamanho": 3,
              "tamanho": "22",
              "valor_unitario": 64.00
            },
            {
              "qtd_tamanho": 3,
              "tamanho": "24",
              "valor_unitario": 64.00
            }
          ]
        },
          {
            "cod_referencia": "001.002.006",
            "obs_item": "observação do item",
            "qtd_caixa": 2,
            "tipo_do_item": 2,
            "vendas_itens_tamanhos": [{
              "qtd_tamanho": 10,
              "tamanho": "P",
              "valor_unitario": 64.00
            },
            {
              "qtd_tamanho": 64,
              "tamanho": "M",
              "valor_unitario": 64.00
            },
            {
              "qtd_tamanho": 10,
              "tamanho": "G",
              "valor_unitario": 64.00
            },
            {
              "qtd_tamanho": 10,
              "tamanho": "GG",
              "valor_unitario": 64.00
            }
            ]
          }
        ]
      }]
    }
    ```





