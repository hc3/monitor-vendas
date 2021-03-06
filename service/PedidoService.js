'use strict';

import Controller from '../controller/PedidoController';
import Model from '../model/pedido';
import callback from './callbackService';

export default app => {

    const pedidoController = new Controller(Model);

    app.route('/findAllItensPedido')
        .get((req, res) => {
            pedidoController.findAll()
                .then(response => callback.find(null, res, response))
                .catch(err => callback.find(err, res, null));
        });

    app.route('/getValorFaturamento')
        .get((req, res) => {
            pedidoController.getValorFaturamento()
                .then(response => callback.find(null, res, response))
                .catch(err => callback.find(err, res, null));
        });

    app.route('/getPedidos')
        .get((req, res) => {
            pedidoController.getPedidos()
                .then(response => callback.find(null, res, response))
                .catch(err => callback.find(err, res, null));
        });
}