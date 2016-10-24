'use strict';

import fs from 'fs';


var file = require('fs');
file.readFile('./init.csv',{encoding:'UTF-8'},(err, data)=>{
  console.log(line(data,mapear));
});

function line(data,callback){
  var lines = data.split("\n");
  var array = new Array();
    if(callback){
      for(var i=0;i<lines.length;i++){
        array.push(callback(lines[i]));
      }
    }
  return array;
}

function mapear(line){
  var data = line.split(';');
  var obj = {};
  obj.pedido = data[0];
  obj.lote = data[1];
  obj.romaneio = data[2];
  obj.cliente = data[3];
  obj.canal = data[4];
  obj.sub_canal = data[5];
  obj.vendedor = data[6];
  obj.vendedor = data[7];
  obj.desc = data[8];
  obj.desc_fin = data[9];
  obj.tx_fin = data[10];
  obj.tipo_cobranca = data[11];
  obj.tipo_pagamento = data[12];
  obj.dias = data[13];
  obj.vc1 = data[14]
  obj.vc2 = data[15]
  obj.vc3 = data[16]
  obj.vc4 = data[17]
  obj.vc5 = data[18]
  obj.dt_1_ven = data[19]
  obj.banco = data[20]
  obj.trans = data[21]
  obj.placa = data[22]
  obj.motorista = data[23]
  obj.ajud1 = data[24]
  obj.ajud2 = data[25]
  obj.can = data[26]
  obj.data_acerto = data[27]
  obj.flag_rom = data[28]
  obj.motivo_dev = data[29]
  obj.motivo_bloq = data[30]
  obj.dt_pedido = data[31]
  obj.placa = data[32]
  obj.item = data[33]
  obj.familia = data[34]
  obj.prd = data[35]
  obj.cod_reduzido = data[36]
  obj.tabela = data[37]
  obj.desconto = data[38]
  obj.valor_total = data[39]
  obj.valor_retorno = data[40]
  obj.valor_unitario = data[41]
  obj.icmr = data[42]
  obj.desc_acessoria = data[43]
  obj.desc_verba = data[44]
  obj.tx_financeira = data[45]
  obj.qnt_caixa = data[46]
  obj.qnt_unit = data[47]
  obj.retorno_caixa = data[48]
  obj.retorno_unit = data[49]
  obj.desc_max = data[50]
  obj.serie = data[51]
  obj.nf = data[52]
  obj.nat_op = data[53]
  obj.ocorrencia = data[54]
  obj.oc_sigla = data[55]
  obj.fl = data[56]
  obj.fln = data[57]
  obj.flb = data[58]
  obj.fl_nfe = data[59]
  obj.no_cev = data[60]
  obj.preco_liq = data[61]
  obj.preco_tab = data[62]
  obj.mot_troca = data[63]
  obj.qnt_und = data[64]
  obj.caixa_liq = data[65]
  obj.un_liq = data[66]
  obj.un2_liq = data[67]
  obj.cat_prod = data[68]
  obj.desc_cat = data[69]
  obj.licensa = data[70]
  return obj;
}
