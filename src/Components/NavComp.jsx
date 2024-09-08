import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePropertyApp } from "../Context/PropertyAppContext";

const NavComp = () => {

    const { state, dispatch } = usePropertyApp();
    const navigation = useNavigate()
    const [isFilterContentVisible, setFilterContentVisible] = useState(false);

    const [visibleSubOptions, setVisibleSubOptions] = useState({
        location: false,
        priceRange: false,
        carpetArea: false,
    });

    const toggleFilterContent = () => {
        setFilterContentVisible(!isFilterContentVisible);
    };

    const toggleSubOptions = (option) => {
        setVisibleSubOptions((prevState) => ({
            ...prevState,
            [option]: !prevState[option],
        }));
    };



    return (
        <>
            <nav class="navbar">
                <div
                    class="navbar-logo"
                    onClick={() => { navigation("/") }}>
                    <i class="fas fa-home"></i>
                    <span>PropertyFinder</span>
                </div>
                <div class="navbar-search">
                    <input
                        type="text"
                        placeholder="Search properties..."
                        onChange={(trigerEvent) =>
                            dispatch({ type: "SEARCH_PROPERTY", payload: trigerEvent.target.value })
                        }
                    />
                    <button><i class="fas fa-search"></i></button>
                </div>
                <div className="navbar-filters">
                    <div className="filter-dropdown">
                        <button className="filter-btn" onClick={toggleFilterContent}>
                            <i className="fas fa-filter"></i> Filter
                        </button>
                        {isFilterContentVisible && (
                            <div className="filter-content">
                                <div className="filter-option">
                                    <span onClick={() => toggleSubOptions('location')}>Location</span>
                                    {visibleSubOptions.location && (
                                        <div className="sub-options">
                                            <a
                                                onClick={() =>
                                                    dispatch({ type: "LOCATION", payload: "mumbai" })
                                                }
                                            >
                                                Mumbai
                                            </a>
                                            <a
                                                onClick={() =>
                                                    dispatch({ type: "LOCATION", payload: "delhi" })
                                                }
                                            >
                                                Delhi
                                            </a>
                                            <a
                                                onClick={() =>
                                                    dispatch({ type: "LOCATION", payload: "bengaluru" })
                                                }
                                            >
                                                Bangalore
                                            </a>
                                            <a
                                                onClick={() =>
                                                    dispatch({ type: "LOCATION", payload: "chennai" })
                                                }
                                            >
                                                Chennai
                                            </a>
                                            <a
                                                onClick={() =>
                                                    dispatch({ type: "LOCATION", payload: "kolkata" })
                                                }
                                            >
                                                Kolkata
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className="filter-option">
                                    <span onClick={() => toggleSubOptions('priceRange')}>Price Range</span>
                                    {visibleSubOptions.priceRange && (
                                        <div className="sub-options">
                                            <a
                                                onClick={() => dispatch({ type: "HIGH_LOW" })}
                                            >
                                                High-To-Low
                                            </a>
                                            <a
                                                onClick={() => dispatch({ type: "LOW_HIGH" })}
                                            >
                                                Low-To-High
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className="filter-option">
                                    <span onClick={() => toggleSubOptions('carpetArea')}>
                                        No. of BedRooms
                                    </span>
                                    {visibleSubOptions.carpetArea && (
                                        <div className="sub-options">
                                            <a
                                                onClick={() => dispatch({ type: "BEDROOMS", payload: 1 })}
                                            >
                                                1 BHK
                                            </a>
                                            <a
                                                onClick={() => dispatch({ type: "BEDROOMS", payload: 2 })}
                                            >
                                                2 BHK
                                            </a>
                                            <a
                                                onClick={() => dispatch({ type: "BEDROOMS", payload: 3 })}
                                            >
                                                3 BHK
                                            </a>
                                            <a
                                                onClick={() => dispatch({ type: "BEDROOMS", payload: 4 })}
                                            >
                                                4 BHK
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div class="navbar-links">
                    <a ><i class="fas fa-user"></i> Profile</a>
                    <a class="cart" onClick={() => { navigation("/cartPage") }}>
                        <i class="fa-solid fa-bookmark"></i>
                        <span id="cart-count">{state?.WhishList1.length}</span>
                    </a>
                </div>
            </nav>
        </>
    );
};

export default NavComp;