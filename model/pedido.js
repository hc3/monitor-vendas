'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var pedido = {
    
    numero_pedido : {
        type:String
    },
    cod_cliente : {
        type:String
    },
    vendedor : {
        type:String
    },
    cancelado : {
        type:String
    },
    placa : {
        type:String
    },
    cod_motorista : {
        type:String
    },
    cancelado : {
        type:String
    },
    pasta : {
        type:String
    },
    data_pedido : {
        type:String
    },
    sequencia_pedido: {
        type:String
    },
    familia : {
        type:String
    },
    cod_produto : {
        type:String
    },
    tabela_preco : {
        type:String
    },
    valor_total: {
        type:String
    },
    valor_unit : {
        type:String
    },
    qnt_cx: {
        type:String
    },
    qnt_und: {
        type:String
    },
    nota_fiscal: {
        type:String
    },
    ocorrencia: {
        type:String
    },
    ret_qnt_cx: {
        type:String
    },
    ret_qnt_und: {
        type:String
    },
    qnt_cx_final: {
        type:Number
    },
    qnt_und_final: {
        type:Number
    },
    mot_dev: {
        type:String
    },
    valor_final: {
        type:Number
    },
    fator_convert: {
        type:String
    },
    valor_retorno: {
        type:String
    }

};

const pedidoSchema = new Schema(pedido)

export default mongoose.model('Pedido',pedidoSchema);