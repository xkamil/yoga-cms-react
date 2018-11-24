class Store {

    static init(store) {
        this.store = store;
    };

    static dispatch(action) {
        console.log('Action invoked: ', action);
        this.store.dispatch(action);
        console.log('Store:          ', this.store.getState())
    }
}

export default Store;