import httpStatus from 'http-status';


const obj = {

    find: (err, res, response) => {
        if (!err) {
            return res.send(response);
        } else {
            res.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
            return res.send(err);
        }
    },

    findById: (err , res, response) => {
        if (!element) {
            res.statusCode = httpStatus.NOT_FOUND;
            return res.send({ error: "REGISTRO NÃO ENCONTRADO" });
        }
        if (!err) {
            res.statusCode = httpStatus.OK;
            return res.send(element);
        }
        else {
            res.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
            return res.send(err);
        }
    },

    remove: (err, res) => {
        if (!err) {
            res.statusCode = httpStatus.OK;
            return res.send({ status: "OK" });
        }
        else {
            res.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
            return res.send(err);
        }
    },

    save: (err, res) => {
        if (err) {
            res.statusCode = httpStatus.BAD_REQUEST;
            res.send(err);
        }
        else {
            res.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
            res.send({ status: "OK" });
        }
    }

};

export default obj;