'use strict';

import fs from 'fs';
import pedido from './model/pedido';
import mongoose from 'mongoose';


/**
 * estudar pesquisas com o mongodb
 */

var file = require('fs');
var arquivoCSV = './PEDIDOS.CSV';

file.readFile(arquivoCSV,{encoding:'UTF-8'},(err, data)=>{
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
  obj.numero_pedido = data[0];
  obj.cod_cliente = data[3];
  obj.vendedor = data[6];
  obj.placa = data[20];
  obj.cod_motorista = data[21];
  obj.cancelado = data[24];
  obj.mot_dev = data[27];
  obj.data_pedido = data[29];
  obj.pasta = data[30];
  obj.sequencia_pedido = data[31].split("|").join("");
  obj.familia = data[32];
  obj.cod_produto = data[34];
  obj.tabela_preco = data[35];
  obj.valor_total = data[37];
  obj.valor_retorno = data[38]
  obj.valor_unit = data[40];
  obj.qnt_cx = data[45];
  obj.qnt_und = data[46];
  obj.ret_qnt_cx = data[47];
  obj.ret_qnt_und = data[48];
  obj.nota_fiscal = data[51];
  obj.ocorrencia = data[53];
  obj.fator_convert = data[62];
  obj.qnt_cx_final = data[45] - data[47];
  obj.qnt_und_final = data[46] - data[48];
  obj.valor_final = parseFloat(data[37].replace(',','.')) - parseFloat(data[38].replace(',','.'));
   return obj;
}


mongoose.connect('mongodb://localhost/loja', function(err, res) {
	if (err) {
		console.log('error connecting to MongoDB Database. ' + err);
	} else {
		console.log('Connected to Database');
    if(mongoose.connection.collections['pedidos']) {
      mongoose.connection.collections['pedidos'].drop( function(err) {
        console.log('collection dropped');
      });
    };
    //mongoose.connection.db.dropDatabase();
	}
});
