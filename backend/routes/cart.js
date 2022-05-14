const router = require("express").Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// CREATE CART, any user can create the cart
router.post("/", async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();

    return res.status(200).json(savedCart);
  } catch {
    return res.status(500).json(err);
  }
});

// UPDATE, user can change its own cart
// put new version
router.put("/find/:id", async (req, res) => {
  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { userId: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );

    return res.status(200).json(updatedCart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.deleteOne({ userId: req.params.id });

    return res.status(200).json("Cart Deleted successfully");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET USER CART

router.get("/find/:id", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    return res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

/*
router.get("/delete-from-cart/:id", verifyTokenAndAuthorization, async (req,res)=>{

 const userId = req.params.id;
 const productID = req.body.productID;
   try{
     const cart = await Cart.findOne({userId:userId }); 
        
     let idx = cart.products.findIndex(p => p.productId === productID);
     if(idx > -1){
        const product = await Product.findById(productID);

        cart.products[idx].quntity--;
        cart.totalPrice -= product.price;
        if(cart.products[idx].quntity <= 0){
             cart.products.splice(idx,1);
        }
        
      await cart.save();
    }else{
        return res.status(404).json("No product with this id in the cart");
    }
         
   }catch(err){
       return res.status(500).json(err);
   }

} );

router.get("/add-to-cart/:id",verifyTokenAndAuthorization,async (req,res)=>{
   const userId = req.params.id;
   const productID= req.body.productID;

    try{
       const cart = await Cart.findOne({userId:userId});
       const product = await Product.findById(productID);
       if(!product){
         return  res.status(404).send('product not found!');
    }

       if(cart){
        let itemIndex = cart.products.findIndex(p => p.productId === productID);
         // Check if product exists or not
         if(itemIndex > -1)
         {
              cart.products[itemIndex].quantity += 1 ;
              cart.totalPrice += product.price;
         }
         else {
             cart.items.push({ productID: productID,quntity: 1 });
         }
     await cart.save();
     return res.status(201).send(cart);
       }else{

        const newCart = await Cart.create({
            userId,
            items: [{ productID : productID,quntity: 1 }]
        });
             
        return res.status(201).send(newCart);
       }
      
    }catch(err){
        return res.status(500).json(err);
    }

});
*/

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    return res.status(200).json(carts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
