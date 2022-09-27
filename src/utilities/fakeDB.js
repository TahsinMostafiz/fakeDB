
// Set data to LocalStorage 

const addToDB = (id) => {

    let storageCart;

    const storedCart = localStorage.getItem('employee-storage');
    if (storedCart) {
        storageCart = JSON.parse(storedCart);
    }else {
        storageCart = {};
    }
    

    const quantity = storageCart[id];
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        storageCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    } else {
        // localStorage.setItem(id, 1);
        storageCart[id] = 1;
    }

    localStorage.setItem('employee-storage', JSON.stringify(storageCart));
    
}


// Remove data from LocalStorage

const removeFromDB = (id) => {
    const storedCart = localStorage.getItem('employee-storage');
    if (storedCart) {
        const cart = JSON.parse(storedCart);
        if (id in cart) {
            delete cart[id];
            localStorage.setItem('employee-storage', JSON.stringify(cart));
        }
    }
}

export {
    addToDB,
    removeFromDB
};