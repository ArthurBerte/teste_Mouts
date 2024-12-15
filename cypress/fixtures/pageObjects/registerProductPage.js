export default {
    locators: {
        productNameField: '[data-testid="nome"]',
        productPriceField: '[data-testid="preco"]',
        productDescriptionField: '[data-testid="descricao"]',
        productQuantityField: '[data-testid="quantity"]',
        chooseImageField: 'input[type=file]',
        registerProductButton: '[data-testid="cadastarProdutos"]',
    },

    data: {
        productName: 'Audi S3 model 8L Nardo Blue',
        productPrice: '120000',
        productDescription: 'New model for the PQ34 platform, the S3 8L in the color Nardo Blue.',
        productQuantity: '1',
        productImage: 'cypress\\fixtures\\images\\audiS38LNardoBlue.jpeg'
    }
};