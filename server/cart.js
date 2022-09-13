const add = (cart, req) => {
    cart.contents.push(req.body);

    return JSON.stringify(cart, null, 4);
};

const change = (cart, req) => {
    const currentProduct = cart.contents.find(el => el.id_product === req.params.id);
    currentProduct.quantity += req.body.quantity;

    return JSON.stringify(cart, null, 4);
};

const remove = (cart, req) => {
    cart.contents = cart.contents.reduce((acc, el) => {
        if (el.id_product !== req.params.id) {
            return acc.concat(el);
        }

        if (+el.quantity > 1) {
            el.quantity--;
        } else {
            return acc;
        }

        return acc.concat(el);
    }, []);

    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    remove,
};
