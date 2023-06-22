const express = require("express");
const { storage } = require("./data/storage");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(storage.get("products"));
});

router.get("/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = storage.get("products").find({ id: productId }).value();
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

router.post("/", (req, res, next) => {
  const { shoppingCart, user } = req.body;

  if (!shoppingCart || !user) {
    return res.status(400).json({ error: "Missing shoppingCart or user field" });
  }

  if (!Array.isArray(shoppingCart)) {
    return res.status(400).json({ error: "Invalid shoppingCart format" });
  }

  const duplicateItems = shoppingCart.filter(
    (item, index, self) => self.findIndex((i) => i.itemId === item.itemId) !== index
  );

  if (duplicateItems.length > 0) {
    return res.status(400).json({ error: "Duplicate items in shoppingCart" });
  }

  const invalidItems = shoppingCart.filter((item) => !item.itemId || !item.quantity);

  if (invalidItems.length > 0) {
    return res.status(400).json({ error: "Invalid items in shoppingCart" });
  }

  const total = shoppingCart.reduce((acc, item) => {
    const product = storage.get("products").find({ id: item.itemId }).value();
    if (product) {
      return acc + product.price * item.quantity;
    }
    return acc;
  }, 0);

  const newPurchase = {
    id: storage.get("purchases").size().value() + 1,
    name: user.name,
    email: user.email,
    order: shoppingCart,
    total: total * 1.0875,
    createdAt: new Date().toISOString(),
    receipt: "Thank you for your purchase!",
  };

  storage.get("purchases").push(newPurchase).write();

  res.status(201).json({ purchase: newPurchase });
});

module.exports = router;
