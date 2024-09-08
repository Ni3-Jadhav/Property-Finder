import { useNavigate } from "react-router-dom";
import { usePropertyApp } from "../Context/PropertyAppContext";

const HomeComp = () => {

    const navigate = useNavigate();

    const { state, dispatch } = usePropertyApp();
    return (
        <>
            <section class="property-listings">
                <h2 id="up">Available Properties</h2>
                <div class="properties-container">
                    {state?.filterProperty.map(
                        ({ id, image, name, price, location, address, bedrooms, amenities }) => {
                            return (
                                <div class="property-card" key={id} >
                                    <img src={image} alt="Property Image" />
                                    <h3>{name}</h3>
                                    <p>Location: {location}<br />No of BedRooms: {bedrooms} <stong>BHK</stong> </p>
                                    <p class="price">Price:INR {price}₹ </p>
                                    <p
                                        class="see-details"
                                        onClick={() => {
                                            navigate("/propertyPage",
                                                {
                                                    state: { id, image, name, price, location, address, bedrooms, amenities }
                                                })

                                        }}
                                    >
                                        See details
                                    </p>
                                    <button onClick={() =>
                                        dispatch({ type: "ADD_WHISHLIST", payload: id })
                                    }
                                        class="book-btn">
                                        <i class="fa-solid fa-bookmark"></i> Book Now</button>
                                </div>
                            )
                        }
                    )}
                </div>
                <a href="#up" className="up-btn" ><i class="fa-solid fa-angle-up"></i></a>
            </section>

        </>
    );
};


export default HomeComp;