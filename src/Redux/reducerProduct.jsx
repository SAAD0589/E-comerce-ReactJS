import * as type from './typeProduct'

const initialState = {
    Product: [
        {
          id:1,
          type:'men',
          name: "T-shirt",
          price: 20.99,
          img1:
            "https://images.pexels.com/photos/15708080/pexels-photo-15708080/free-photo-of-young-man-in-casual-clothing-posing-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
        {
            id:2,
            type:'men',
          name: "Jeans",
          price: 49.99,
          img1:
            "https://images.pexels.com/photos/15336574/pexels-photo-15336574/free-photo-of-posing-man-standing-on-an-empty-city-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:3,
            type:'men',
          name: "Shoes",
          price: 79.99,
          img1:
            "https://images.pexels.com/photos/16495778/pexels-photo-16495778/free-photo-of-young-man-in-a-casual-outfit-standing-on-the-background-of-a-graffiti-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
        id:4,
        type:'men',
          name: "Shoes",
          price: 79.99,
          img1:
            "https://images.pexels.com/photos/15185505/pexels-photo-15185505/free-photo-of-fashionable-young-man-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:5,
            type:'men',
          name: "Shoes",
          price: 79.99,
          img1:
            "https://images.pexels.com/photos/18095747/pexels-photo-18095747/free-photo-of-young-man-in-a-casual-outfit-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:6,
            type:'woman',
          name: "Dress",
          price: 39.99,
          color: "red",
          img1:
            "https://images.pexels.com/photos/16850434/pexels-photo-16850434/free-photo-of-young-fashionable-woman-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:7,
            type:'woman',
          name: "Skirt",
          price: 29.99,
          color: "blue",
          img1:
            "https://images.pexels.com/photos/15778298/pexels-photo-15778298/free-photo-of-young-brunette-in-a-trendy-outfit-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:8,
            type:'woman',
          name: "Handbag",
          price: 59.99,
          color: "black",
          img1:
            "https://images.pexels.com/photos/17029535/pexels-photo-17029535/free-photo-of-young-woman-in-a-modern-denim-outfit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:9,
            type:'woman',
          name: "Handbag",
          price: 59.99,
          color: "black",
          img1:
            "https://images.pexels.com/photos/17046561/pexels-photo-17046561/free-photo-of-young-woman-in-a-fashionable-outfit-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        
        {
            id:10,
            type:'woman',
          name: "Handbag",
          price: 59.99,
          color: "black",
          img1:
            "https://images.pexels.com/photos/17171387/pexels-photo-17171387/free-photo-of-young-brunette-in-a-black-outfit-and-sunglasses-posing-outside.jpeg",
        },
        {
            id:11,
            type:'kids',
            name: "T-shirt",
            price: 14.99,
            color: "green",
            img1:"https://images.pexels.com/photos/11291500/pexels-photo-11291500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            id:13,
            type:'kids',
            name: "Shorts",
            price: 19.99,
            color: "yellow",
            img1:"https://images.pexels.com/photos/4048011/pexels-photo-4048011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            id:14,
            type:'kids',
            name: "Sneakers",
            price: 34.99,
            color: "pink",
            img1:"https://images.pexels.com/photos/1648535/pexels-photo-1648535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
        ],
        Panier:[
          {idk:1,type:'',name:"Chicken momo",price:40,image:'https://images.pexels.com/photos/1648535/pexels-photo-1648535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',amount:5},
          {idk:2,type:'',name:"sala",price:60,
          image:'https://images.pexels.com/photos/18095747/pexels-photo-18095747/free-photo-of-young-man-in-a-casual-outfit-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',amount:1}
        ]
}
export default function reducerProduct(state=initialState,action) {
  switch(action.type){
    case "ADD_PRODUCT":
        return{...state,Panier:[...state.Panier,action.payload]}
        case type.REMOVE_Product:
            return{...state,Product:[]}
            default:
                return state
  }
}
