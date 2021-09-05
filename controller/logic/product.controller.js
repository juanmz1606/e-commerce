/** Dto */
const productDto = require("../../model/dto/product.dto");

exports.createProduct = (req, res, next) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        existence: req.body.existence,
        calification: req.body.calification,
        category: req.body.category,
        mark: req.body.mark,
        discount: req.body.discount
    };
    productDto.create(product, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        };
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.updateProduct = (req, res, next) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        existence: req.body.existence,
        calification: req.body.calification,
        category: req.body.category,
        mark: req.body.mark,
        discount: req.body.discount
    };
    productDto.updateOne({ _id: req.body.id }, product, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.getAll = (req, res, next) => {
    productDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deleteProduct = () => {
    productDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
};