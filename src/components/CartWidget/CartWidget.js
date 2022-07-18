import './CartWidget.scss';

const CartWidget = () => {
    return (
        <button className="cart-widget">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>1</span>
        </button>
    );
}

export default CartWidget;