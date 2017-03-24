const obj = {

    find: (err, element) => {
        if (!err) {
            return element;
        } else {
            return err;
        }
    },

    findById: (err, element, res) => {
        if (!element) {
            return {};
        }
        if (!err) {
            return element;
        }
        else {
            return err;
        }
    },

    remove: (err, res) => {
        if (!err) {
            return true;
        }
        else {
            return err;
        }
    },

    save: (err, element) => {
        if (err) {
           return err;
        }
        else {
            return element;
        }
    }

};

export default obj;