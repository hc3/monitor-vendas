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

    getValorFaturamentoPorVendedor(vendedor) {
        return this.Model.aggregate([{
                    $match: {
                        "cancelado": "008",
                        "ocorrencia": "001 ",
                        "vendedor":vendedor
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