import { useNavigate } from "react-router-dom"

const EmptyCartComp = () => {
    const navigate = useNavigate();
    return (
        <>
            <section class="empty-cart-section">
                <div class="empty-cart-message">
                    <i class="fa-solid fa-hourglass"></i>
                    <h2>Haven't Booked Anything Yet</h2>
                    <p>Looks like you haven't added anything to your List yet.</p>
                    <p>Start exploring and add some great Properties !</p>
                    <button
                        class="shop-now-btn"
                        onClick={() => navigate('/')}
                    >
                        Explore Now
                    </button>
                </div>
            </section>
        </>
    );
};

export default EmptyCartComp;