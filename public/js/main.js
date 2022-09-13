const API = 'http://localhost:3000/api';

let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgProduct: 'https://via.placeholder.com/200x150?text=No+image',
        cartShow: false,
        filtered: [],
    },
    // components: { cart, products, filter_el },
    components: { cart, products },
    methods: {
        getJson(url) {
            return fetch(`${API}${url}`)
                .then(result => result.json());
        },
        removeJson(url) {
            return fetch(`${API}${url}`, {
                method: 'DELETE',
            }).then(result => result.json());
        },
        putJson(url, quantity) {
            return fetch(`${API}${url}`, {
                method: 'PUT',
                body: JSON.stringify({
                    quantity,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(result => result.json());
        },
        postJson(url, data) {
            console.log(data);

            return fetch(`${API}${url}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(result => result.json());
        },
    },
});
