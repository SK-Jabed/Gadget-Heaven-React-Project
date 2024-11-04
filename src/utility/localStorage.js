import { toast } from "react-toastify";

// Get All Gadgets from Local Storage 
const getAllCartProducts = () => {
    const allCartProducts = localStorage.getItem("cartProduct");
    
    if (allCartProducts) {
        const cartProduct = JSON.parse(allCartProducts);
        console.log(cartProduct);
        return cartProduct;
    }
    else {
        console.log([]);
        return [];
    }
}

// Add a gadget to Local Storage
const addToCart = gadget => {


    const cartProduct = getAllCartProducts();
    const isExist = cartProduct.find((product) => product.product_id == gadget.product_id);
    if (isExist) {
        return toast.error(`${gadget.product_title} is Already Added`);
    }
    
    cartProduct.push(gadget);
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
    toast.success(`${gadget.product_title} Added to Your Cart !!!`);
}


// Remove a gadget from local storage



// Get All Gadgets from Local Storage 
const getAllWishListProducts = () => {
    const allWishListProducts = localStorage.getItem("wishListProduct");
    
    if (allWishListProducts) {
      const wishListProduct = JSON.parse(allWishListProducts);

      return wishListProduct;
    } else {
      console.log([]);
      return [];
    }
}

// Add a gadget to Local Storage
const addToWishList = gadget => {


    const wishListProduct = getAllWishListProducts();
    const isExist = wishListProduct.find((product) => product.product_id == gadget.product_id);
    if (isExist) {
        return toast.error(`${gadget.product_title} is Already Added`);
    }
    
    wishListProduct.push(gadget);
    localStorage.setItem("wishListProduct", JSON.stringify(wishListProduct));
    toast.success(`${gadget.product_title} Added to Your Wish List !!!`);
}


export { addToCart, getAllCartProducts, addToWishList, getAllWishListProducts };