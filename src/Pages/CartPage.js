import CartComp from "../Components/CartComp"
import FooterComp from "../Components/FooterComp"
import NavComp from "../Components/NavComp"

const CartPage = ()=>{

    return(
        <>
        {<NavComp/>}
        {<CartComp/>}
        {<FooterComp/>}
        </>
    );
};

export default CartPage;