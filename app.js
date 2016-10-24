'use strict';

import fs from 'fs';
import pedido from './model/pedido';
import mongoose from 'mongoose';


/**
 * estudar pesquisas com o mongodb
 */

var file = require('fs');
file.readFile('./PEDIDOS_335101.CSV',{encoding:'UTF-8'},(err, data)=>{
  pedido.create(line(data,mapear), (err) => {
    if(err) return console.log('deu merda:',err);
    console.log('sucesso obj SALVO!');
  })
  console.log(line(data,mapear).length);
});

function line(data,callback){
  var lines = data.split("\n");
  lines.shift();
  lines.pop();
  var array = lines.map(callback);
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
  obj.desc = data[7];
  obj.desc_fin = data[8];
  obj.tx_fin = data[9];
  obj.tipo_cobranca = data[10];
  obj.tipo_pagamento = data[11];
  obj.dias = data[12];
  obj.vc1 = data[13]
  obj.vc2 = data[14]
  obj.vc3 = data[15]
  obj.vc4 = data[16]
  obj.vc5 = data[17]
  obj.dt_1_ven = data[18]
  obj.banco = data[19]
  obj.trans = data[20]
  obj.placa = data[21]
  obj.motorista = data[22]
  obj.ajud1 = data[23]
  obj.ajud2 = data[24]
  obj.can = data[25]
  obj.data_acerto = data[26]
  obj.flag_rom = data[27]
  obj.motivo_dev = data[28]
  obj.motivo_bloq = data[29]
  obj.dt_pedido = data[30]
  obj.pasta = data[31]
  obj.item = data[32]
  obj.familia = data[33]
  obj.prd = data[34]
  obj.cod_reduzido = data[35]
  obj.tabela = data[36]
  obj.desconto = data[37]
  obj.valor_total = data[32]
  obj.valor_retorno = data[39]
  obj.valor_unitario = data[40]
  obj.icmr = data[41]
  obj.desc_acessoria = data[42]
  obj.desc_verba = data[43]
  obj.tx_financeira = data[44]
  obj.qnt_caixa = data[45]
  obj.qnt_unit = data[46]
  obj.retorno_caixa = data[47]
  obj.retorno_unit = data[48]
  obj.desc_max = data[49]
  obj.serie = data[50]
  obj.nf = data[51]
  obj.nat_op = data[52]
  obj.ocorrencia = data[53]
  obj.oc_sigla = data[54]
  obj.fl = data[55]
  obj.fln = data[56]
  obj.flb = data[57]
  obj.fl_nfe = data[58]
  obj.no_cev = data[59]
  obj.preco_liq = data[60]
  obj.preco_tab = data[61]
  obj.mot_troca = data[62]
  obj.qnt_und = data[63]
  obj.caixa_liq = data[64]
  obj.un_liq = data[65]
  obj.un2_liq = data[66]
  obj.cat_prod = data[67]
  obj.desc_cat = data[68]
  obj.licensa = data[69]
  return obj;
}


mongoose.connect('mongodb://localhost/loja', function(err, res) {
	if (err) {
		console.log('error connecting to MongoDB Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});
