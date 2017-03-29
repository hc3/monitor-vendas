'use strict';

import callback from './callbackController';

class PedidoController {

    constructor(Model) {
        this.Model = Model;
    };

    findAll() {
        return this.Model.find((err, objeto) => {
            callback.find(err, objeto);
        });
    };

    getPedidos() {
        return this.Model.aggregate([
            {
                $match: {
                    "cancelado": "008"
                }
            },
            {
                $group: {
                    _id: {
                        data_pedido: "$data_pedido",
                        num_ped: "$numero_pedido",
                        cliente: "$cod_cliente",
                        vendedor: "$vendedor",
                        produto: "$cod_produto"
                    },
                    totalItens: { $sum: 1 },
                    valorTotal: { $sum: "$valor_final" },
                    qntItens: { $sum: "$qnt_cx_final" }
                }
            },
            {
                $group: {
                    _id: {
                        num_ped: "$_id.num_ped",
                        data_pedido: "$_id.data_pedido",
                        cliente: "$_id.cliente",
                        vendedor: "$_id.vendedor"
                    },
                    itens: {
                        $push: {
                            produto: "$_id.produto",
                            quantidade: "$qntItens",
                            valor: "$valorTotal"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    data_pedido: "$_id.data_pedido",
                    cliente: "$_id.cliente",
                    vendedor: "$_id.vendedor",
                    numPedido: "$_id.num_ped",
                    qntItens:{ $size: "$itens" },
                    itens: "$itens"
                }
            },
            {
                $sort: { "data_pedido": 1, "numPedido": 1 }
            }

        ]).exec((err, objeto) => callback.find(err, objeto));
    };

    getValorFaturamento() {

        return this.Model.aggregate([{
            $match: {
                "cancelado": "008",
                "ocorrencia": "001 "
            }
        },
        { $unwind: "$vendedor" },
        {
            $group: {
                _id: "$vendedor",
                faturamento: {
                    $sum: "$valor_final"
                }
            }
        }
        ]).exec((err, objeto) => callback.find(err, objeto));

    };


    getInfoDevassa() {
        return this.Model.aggregate([
            {
                $match: {
                    "cancelado": "008",
                    "ocorrencia": { $in: ["001 ", "002 ", "004 "] },
                    "cod_produto": "0000903061"
                }
            },
            {
                $group: {
                    _id: {
                        "vendedor": "$vendedor",
                        "cliente": "$cod_cliente"
                    },
                    volume: {
                        $sum: "$qnt_cx_final"
                    },
                    cobertura: {
                        $sum: 1
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    vendedor: "$_id.vendedor",
                    cliente: "$_id.cliente",
                    volume: "$volume",
                    cobertura: "$cobertura"
                }
            }
        ]).exec((err, objeto) => callback.find(err, objeto));
    };

}

export default PedidoController;