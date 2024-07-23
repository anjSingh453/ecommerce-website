import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, createUpdateController, deleteProductController, getProductController, getSingleProductController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController } from "../controllers/productController.js";
import formidable from "express-formidable";


//to make router we use express
const router = express.Router();

//routes
router.post("/create-product" , requireSignIn , isAdmin , formidable() ,createProductController);

//update product 
router.put("/update-product/:pid" , requireSignIn , isAdmin , formidable() ,createUpdateController);

//router for get product
router.get("/get-product" , getProductController);

//get single  product 
router.get("/get-product/:slug" , getSingleProductController);

//get photo
router.get("/product-photo/:pid" ,productPhotoController);

//delete product
router.delete("/delete-product/:pid" , deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product 
router.get("/search/:Keyword" , searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);


export default router;