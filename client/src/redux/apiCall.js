import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  stablishWashList,
} from "./userSlice";
import { logoutCart } from "./cartSlice";
import { stablishCart } from "./cartSlice";
import axios from "axios";

export const login = (dispatch, user) => {
  dispatch(loginStart());

  axios
    .post("http://localhost:9898/api/auth/login", user)
    .then((res) => {
      dispatch(loginSuccess(res.data));
      return axios.all([
        axios.get(`http://localhost:9898/api/carts/find/${res.data._id}`),
        axios.get(`http://localhost:9898/api/favorites/find/${res.data._id}`),
        axios.get(`http://localhost:9898/api/products/`),
      ]);
    })
    .then(
      axios.spread((cartRes, favRes, productRes) => {
        console.log("response of getting cart", cartRes);
        console.log("response of getting fav", favRes);
        dispatch(
          stablishWashList(
            productRes.data?.filter((product) =>
              favRes.data.products
                ?.map((item) => item.productId)
                .includes(product._id)
            )
          )
        );
        const cartProducts = cartRes.data.products.map((product) => ({
          ...productRes.data.find((item) => item._id === product.productID),
          quantity: product.quantity,
        }));
        console.log("cartProducts after getting them", cartProducts);
        dispatch(
          stablishCart({
            products: cartProducts,
            totalPrice: cartRes.data.totalPrice,
          })
        );
      })
    )
    .catch((err) => {
      dispatch(loginFailure("Unauthorized"));
    });
};

export const logoutCall = (dispatch, currentUser, washList, cart) => {
  const editedCart = cart.products?.map((product) => ({
    productID: product?._id,
    quantity: product?.quantity,
    //add internalId , colors , sizes after editing the structure of cart in database
    // internalId: product?.internalId,
  }));
  const editedWashList = washList?.map((product) => ({
    productId: product._id,
  }));

  axios
    .all([
      (axios.put(`http://localhost:9898/api/carts/find/${currentUser._id}`, {
        products: editedCart,
        totalPrice: cart.total,
      }),
      axios.put(`http://localhost:9898/api/favorites/find/${currentUser._id}`, {
        products: editedWashList,
      })),
    ])
    .then(
      axios.spread((putCart, putFav) => {
        console.log("response of putting cart when logout", putCart);
        console.log("response of putting fav when logout", putFav);
        dispatch(logout());
        dispatch(logoutCart());
      })
    )
    .catch((err) => console.log(err));
  // try {
  //   const res = await axios.post("http://localhost:9898/api/favorites/", {
  //     userId: currentUser._id,
  //     products: washList.map((item) => ({ productId: item._id })),
  //   });
  //   console.log("logoutResponse", res.data);
  //   dispatch(logout());
  // } catch (err) {
  //   console.log("error in logout", err);
  // }
};
//http://localhost:9898/api/favorites/
//BODY : {userId , products:[array of products ids] }
