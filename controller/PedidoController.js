'use strict';

import callback from './callbackController';

class PedidoController {
    
    constructor(Model) {
        this.Model = Model;
    };

    findAll() {
        return this.Model.find((err, objeto) => {
            callback.find(err,objeto);
        });
    };
}

export default PedidoController;