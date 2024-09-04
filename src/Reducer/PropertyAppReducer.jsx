const propertyListData = [
  {
    id: 1,
    name: "Skyline Apartments",
    location: "Mumbai",
    price: 8500000,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "123 Marine Drive, Mumbai, Maharashtra",
    bedrooms: 3,
    amenities: "Swimming Pool, Gym, 24/7 Security, Power Backup"
  },
  {
    id: 2,
    name: "Green Valley Residence",
    location: "Delhi",
    price: 7200000,
    image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "456 Connaught Place, New Delhi, Delhi",
    bedrooms: 2,
    amenities: "Garden, Parking, 24/7 Security, Clubhouse"
  },
  {
    id: 3,
    name: "Lakeview Villa",
    location: "Bengaluru",
    price: 9500000,
    image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "789 Whitefield, Bengaluru, Karnataka",
    bedrooms: 4,
    amenities: "Private Pool, Gym, Play Area, Clubhouse"
  },
  {
    id: 4,
    name: "Sunshine Residency",
    location: "Chennai",
    price: 6300000,
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600    ",
    address: "101 OMR Road, Chennai, Tamil Nadu",
    bedrooms: 3,
    amenities: "Gym, Power Backup, Parking, Community Hall"
  },
  {
    id: 5,
    name: "Royal Heights",
    location: "Kolkata",
    price: 7800000,
    image: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "202 Salt Lake, Kolkata, West Bengal",
    bedrooms: 3,
    amenities: "Swimming Pool, Gym, 24/7 Security, Parking"
  },
  {
    id: 6,
    name: "Palm Grove",
    location: "Mumbai",
    price: 8900000,
    image: "https://images.pexels.com/photos/1234422/pexels-photo-1234422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "303 Andheri West, Mumbai, Maharashtra",
    bedrooms: 4,
    amenities: "Gym, Play Area, Power Backup, Parking"
  },
  {
    id: 7,
    name: "Urban Nest",
    location: "Delhi",
    price: 7100000,
    image: "https://images.pexels.com/photos/2035398/pexels-photo-2035398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "404 Vasant Kunj, New Delhi, Delhi",
    bedrooms: 2,
    amenities: "Garden, Community Hall, 24/7 Security, Parking"
  },
  {
    id: 8,
    name: "Lavender Homes",
    location: "Bengaluru",
    price: 8300000,
    image: "https://images.pexels.com/photos/187815/pexels-photo-187815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`",
    address: "505 Koramangala, Bengaluru, Karnataka",
    bedrooms: 3,
    amenities: "Gym, Play Area, 24/7 Security, Parking"
  },
  {
    id: 9,
    name: "Silver Oak Residency",
    location: "Chennai",
    price: 6800000,
    image: "https://images.pexels.com/photos/276593/pexels-photo-276593.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "606 Velachery, Chennai, Tamil Nadu",
    bedrooms: 2,
    amenities: "Clubhouse, Garden, 24/7 Security, Parking"
  },
  {
    id: 10,
    name: "Golden Sands Apartments",
    location: "Kolkata",
    price: 9200000,
    image: "https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "707 Park Street, Kolkata, West Bengal",
    bedrooms: 4,
    amenities: "Swimming Pool, Gym, Power Backup, Parking"
  },
  {
    id: 11,
    name: "Crystal Towers",
    location: "Mumbai",
    price: 9500000,
    image: "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "808 Bandra, Mumbai, Maharashtra",
    bedrooms: 3,
    amenities: "Swimming Pool, Gym, 24/7 Security, Parking"
  },
  {
    id: 12,
    name: "Maple Woods",
    location: "Delhi",
    price: 8200000,
    image: "https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "909 Greater Kailash, New Delhi, Delhi",
    bedrooms: 3,
    amenities: "Garden, Gym, 24/7 Security, Power Backup"
  },
  {
    id: 13,
    name: "Serene Villa",
    location: "Bengaluru",
    price: 9100000,
    image: "https://images.pexels.com/photos/3221215/pexels-photo-3221215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "1010 Indiranagar, Bengaluru, Karnataka",
    bedrooms: 4,
    amenities: "Private Pool, Play Area, 24/7 Security, Clubhouse"
  },
  {
    id: 14,
    name: "Emerald Residency",
    location: "Chennai",
    price: 7000000,
    image: "https://images.pexels.com/photos/210538/pexels-photo-210538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "1111 Anna Nagar, Chennai, Tamil Nadu",
    bedrooms: 3,
    amenities: "Gym, Community Hall, Power Backup, Parking"
  },
  {
    id: 15,
    name: "Ocean View Apartments",
    location: "Kolkata",
    price: 7600000,
    image: "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "1212 New Town, Kolkata, West Bengal",
    bedrooms: 2,
    amenities: "Swimming Pool, Gym, 24/7 Security, Parking"
  },
  {
    id: 16,
    name: "Cedar Court",
    location: "Mumbai",
    price: 8700000,
    image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "1313 Juhu, Mumbai, Maharashtra",
    bedrooms: 3,
    amenities: "Gym, Play Area, 24/7 Security, Power Backup"
  },
  {
    id: 17,
    name: "Rosewood Residency",
    location: "Delhi",
    price: 7900000,
    image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "1414 Saket, New Delhi, Delhi",
    bedrooms: 2,
    amenities: "Garden, Community Hall, 24/7 Security, Parking"
  },
  {
    id: 18,
    name: "Pine Grove",
    location: "Bengaluru",
    price: 8300000,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "1515 HSR Layout, Bengaluru, Karnataka",
    bedrooms: 3,
    amenities: "Gym, Play Area, 24/7 Security, Parking"
  },
  {
    id: 19,
    name: "Magnolia Heights",
    location: "Chennai",
    price: 6700000,
    image: "https://images.pexels.com/photos/783745/pexels-photo-783745.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "1616 Adyar, Chennai, Tamil Nadu",
    bedrooms: 2,
    amenities: "Clubhouse, Garden, 24/7 Security, Parking"
  },
  {
    id: 20,
    name: "Sunset Villas",
    location: "Kolkata",
    price: 8800000,
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "1717 Ballygunge, Kolkata, West Bengal",
    bedrooms: 4,
    amenities: "Swimming Pool, Gym, Power Backup, Parking"
  }
];

console.log(propertyListData);

export const instialState = {
  propertyList1: propertyListData,
  filterProperty: propertyListData,
  WhishList1: []
 
};

export const PropertyAppreducer = (state, { type, payload }) => {

  switch (type) {

    case "ADD_WHISHLIST":
      const addWishlist = state?.propertyList1?.find(({ id }) => id === payload);
      return { ...state, WhishList1: [...state.WhishList1, addWishlist] };
     
    case "REMOVE_WHISHLIST":
      const removeWhishlist = state?.WhishList1?.filter(({ id }) => id !== payload);
      return { ...state, WhishList1: removeWhishlist };

    case "SEARCH_PROPERTY":
      const searchPropertyList =
        payload === "" ? state?.propertyList1
          : state?.propertyList1?.filter(
            ({ location, name }) =>
              location.toLowerCase().includes(payload.toLowerCase()) ||
              name.toLowerCase().includes(payload.toLowerCase())
          );
      return { ...state, filterProperty: searchPropertyList };

    case "LOCATION":
      const locationFilter =
        payload === "" ? state?.propertyList1
          : state?.propertyList1?.filter(({ location }) =>
            location.toLowerCase().includes(payload)
          );
      return { ...state, filterProperty: locationFilter };

    case "BEDROOMS":
      const bedRoomFilter =
        payload === "" ? state?.propertyList1
          : state?.propertyList1?.filter(({ bedrooms }) => bedrooms === payload);
      return { ...state, filterProperty: bedRoomFilter };

    case "HIGH_LOW":
      const highlowFilter = [...state.filterProperty].sort(
        (a, b) => b.price - a.price
      );
      return { ...state, filterProperty: highlowFilter };

    case "LOW_HIGH":
      const lowhighFilter = [...state.filterProperty].sort(
        (a, b) => a.price - b.price
      );
      return { ...state, filterProperty: lowhighFilter };

    default:
      return state;
  }

};

