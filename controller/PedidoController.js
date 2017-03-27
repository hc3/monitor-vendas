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
        ])
            .exec((err, objeto) => callback.find(err, objeto));

    };


    getCoberturaDevassa() {
        return this.Model.aggregate([
            {
                $match: {
                    "cancelado": "008",
                    "ocorrencia": "001 ",
                    "cod_produto": "0000903061",
                    "cod_cliente": "0005-0277"
                }
            },
            //{ $unwind: "$cod_cliente" },
            {
                $group: {
                    _id: "$cod_cliente",
                    cobertura: {
                        $sum: "$qnt_cx_final"
                    }
                }
            }
        ])
            .exec((err, objeto) => callback.find(err, objeto));
    };

    getVolumePorProduto() {
        return this.Model.aggregate([
            {
                $match: {
                    "cancelado": "008",
                    "ocorrencia": "001 ",
                    "cod_produto": "0000903061",
                    //"cod_cliente": "0005-0277"
                }
            },
            {
                $group: {
                    _id: "$vendedor",
                    volume: {
                        $sum: "$qnt_cx_final"
                    },
                    faturamento: {
                        $sum: "$valor_final"
                    },
                    cobertura: {
                        $sum: 1
                    }
                }
            },
            {
                $project: {
                    vendedor:"$_id",
                    volume:"$volume",
                    faturamento:"$faturamento",
                    cobertura:"$cobertura",
                    produto:"$cod_produto",
                    _id:0
                }
            }

        ])
            .exec((err, objeto) => callback.find(err, objeto));
    };


    getValorFaturamentoPorVendedor(vendedor) {
        return this.Model.aggregate([{
            $match: {
                "cancelado": "008",
                "ocorrencia": "001 ",
                "vendedor": vendedor
            }
        },
        {
            $group: {
                _id: {},
                valor: {
                    $sum: "$valor_final"
                }
            }
        }
        ])
            .exec((err, objeto) => callback.find(err, objeto));
    }
}

export default PedidoController;