const product = {
    props: ['img', 'product'],
    template: `
        <div class="featured-items-col">
            <article class="featured-item">
                <div class="featured-item-img">
                    <img :src="product.imgProduct" :alt="product.product_name">
                    <div class="add-to-cart">
                        <button
                            class="add-to-cart-btn"
                            @click="$root.$refs.cart.addProduct(product)"
                        >
                            <img src="img/cart-icon2.svg" alt="Add to Cart">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="featured-item-content">
                    <h3 class="featured-item-content-title">{{ product.product_name }}</h3>
                    <p class="featured-item-content-description">{{ product.description }}</p>
                    <span>{{ product.price }}</span>
                </div>
            </article>
        </div>
    `,
};

const products = {
    components: {product},
    data() {
        return {
            catalogUrl: '/products',
            products: [],
            imgCatalog: '/product.imgProduct',
            filtered: [],
        };
    },
    mounted() {
        this.$parent.getJson(this.catalogUrl)
            .then(data => {
                for (const el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="row featured-items-wrp">
            <product
                v-for="product of filtered"
                :key="product.id_product"
                :img="imgCatalog"
                :product="product"
            ></product>
        </div>
    `,
};

