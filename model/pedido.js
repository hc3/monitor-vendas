'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var pedido = {
    pedido : {
        type:String
    },
    lote : {
        type:String
    },
    romaneio : {
        type:String
    },
    cliente : {
        type:String
    },
    canal : {
        type:String
    },
    sub_canal : {
        type:String
    },
    vendedor : {
        type:String
    },
    desc : {
        type:String
    },
    desc_fin : {
        type:String
    },
    tx_fin : {
        type:String
    },
    tipo_cobranca : {
        type:String
    },
    tipo_pagamento : {
        type:String
    },
    dias : {
        type:String
    },
    vc1 : {
        type:String
    },
    vc2 : {
        type:String
    },
    vc3 : {
        type:String
    },
    vc4 : {
        type:String
    },
    vc5 : {
        type:String
    },
    dt_1_ven : {
        type:String
    },
    banco : {
        type:String
    },
    trans : {
        type:String
    },
    placa : {
        type:String
    },
    motorista : {
        type:String
    },
    ajud1 : {
        type:String
    },
    ajud2 : {
        type:String
    },
    can : {
        type:String
    },
    data_acerto : {
        type:String
    },
    flag_rom : {
        type:String
    },
    motivo_dev : {
        type:String
    },
    motivo_bloq : {
        type:String
    },
    dt_pedido : {
        type:String
    },
    pasta : {
        type:String
    },
    item : {
        type:String
    },
    familia : {
        type:String
    },
    prd : {
        type:String
    },
    cod_reduzido : {
        type:String
    },
    tabela : {
        type:String
    },
    desconto : {
        type:String
    },
    valor_total : {
        type:String
    },
    valor_retorno : {
        type:String
    },
    valor_unitario : {
        type:String
    },
    icmr : {
        type:String
    },
    desc_acessoria : {
        type:String
    },
    desc_verba : {
        type:String
    },
    tx_financeira : {
        type:String
    },
    qnt_caixa : {
        type:String
    },
    qnt_unit : {
        type:String
    },
    retorno_caixa : {
        type:String
    },
    retorno_unit : {
        type:String
    },
    desc_max : {
        type:String
    },
    serie : {
        type:String
    },
    nf : {
        type:String
    },
    nat_op : {
        type:String
    },
    ocorrencia : {
        type:String
    },
    oc_sigla : {
        type:String
    },
    fl : {
        type:String
    },
    fln : {
        type:String
    },
    flb : {
        type:String
    },
    fl_nfe : {
        type:String
    },
    no_cev : {
        type:String
    },
    preco_liq : {
        type:String
    },
    preco_tab : {
        type:String
    },
    mot_troca : {
        type:String
    },
    qnt_und : {
        type:String
    },
    caixa_liq : {
        type:String
    },
    un_liq : {
        type:String
    },
    un2_liq : {
        type:String
    },
    cat_prod : {
        type:String
    },
    desc_cat : {
        type:String
    },
    licensa : {
        type:String
    }
};

const pedidoSchema = new Schema(pedido)

export default mongoose.model('Pedido',pedidoSchema);