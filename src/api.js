import $ from 'jquery'

const APIENDPOINT = 'http://localhost:8000/api/'

function getProducts(){
    return $.ajax({
        url: APIENDPOINT + 'products',
        method: 'GET',
    })
}

function getProduct(id){
    return $.ajax({
        url: APIENDPOINT + 'products/' + id,
        method: 'GET',
    })
}

function addProduct(product){
    return $.ajax({
        url: APIENDPOINT + 'products',
        method: 'POST',
        data: {
            name: product.name,
            price: product.price,
            stock: product.stock,
            minimum_stock: product.minimum_stock
        }
    })
}

function deleteProduct(id){
    return $.ajax({
        url: APIENDPOINT + 'products' + id,
        method: 'DELETE',
    })
}



export default {
    getProducts,
    getProduct,
    addProduct,
    deleteProduct
}