const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Film Doctor Strange 2', price: 87000, image: 'C:\Users\acer\Desktop\Portofolio-main\img\dr strange.jpg' },
                { name: 'Film Avenger', price: 50000, image: 'C:\Users\acer\Desktop\Portofolio-main\img\Avenger.jpg' },
                { name: 'Film Power Ranger', price: 90000, image: 'C:\Users\acer\Desktop\Portofolio-main\img\powerranger.jpg' },
                { name: 'Film Doraemon', price: 76000, image: 'C:\Users\acer\Desktop\Portofolio-main\img\doraemon.jpg' },
                { name: 'Film Thomas and friend', price: 55000, image: 'C:\Users\acer\Desktop\Portofolio-main\img\thomas.jpg' },
                { name: 'Film Spiderman', price: 76000, image: 'C:\Users\acer\Desktop\Portofolio-main\img\spiderman.jpg' },
            ],
            cart: [],
            wallet: '',
            addWallet: [
                { amount: 1000 },
                { amount: 2000 },
                { amount: 3000 },
                { amount: 10000 },
                { amount: 15000 },
                { amount: 60000 },
                { amount: 100000 },
            ]
        };
    },
    methods: {
        addToCart(product, isDuplicate = false) {
            const existingItem = this.cart.find(item => item.name === product.name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({ name: product.name, price: product.price, quantity: 1, image: product.image });
            }
        },
        formatNumber(number) {
            // Menggunakan metode toLocaleString untuk menambahkan titik sebagai pemisah ribuan
            return number.toLocaleString('id-ID');
        },
        addAmount(amount) {
            this.wallet = (parseFloat(this.wallet || 0) + amount);
        },
        removeFromCart(index) {
            const item = this.cart[index];

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                // hapus jika sisa 1
                this.cart.splice(index, 1);
            }
        },
        getTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        resetWallet() {
            // Reset nilai wallet menjadi 0
            this.wallet = '0';
        }
    }
});
app.mount('#app');