new Vue ({
    el: "#app",

    data: {
        lista:[],
        inputItem: '',
        selectedIndex: null,
        isEditing: false,
        checked: false,
    },

    created() {
        const itensLocalStorage = JSON.parse(localStorage.getItem('listaSalva'));
        this.lista = itensLocalStorage ? itensLocalStorage : [];
    },

    methods: {

        storeItem() {
            this.lista.unshift({label:this.inputItem, checked:false});
            this.inputItem = '';
            this.salvaLocalStorage();
        },

        editItem(index, item) {
            this.inputItem = item.label;
            this.selectedIndex = index;
            this.isEditing = true;
        },

        deleteItem(index) {
            this.lista.splice(index, 1)
            this.salvaLocalStorage();
        },

        updateItem() {
            this.lista.splice(this.selectedIndex, 1, {label:this.inputItem, checked:false});
            this.isEditing = false;
            this.inputItem = '';
            this.salvaLocalStorage();
        },

        salvaLocalStorage() {
            localStorage.setItem('listaSalva', JSON.stringify(this.lista));
        },

        salvaCheckedItem(){
            this.salvaLocalStorage();
        },
    },

})