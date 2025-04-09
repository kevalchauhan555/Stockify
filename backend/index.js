require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const cors = require('cors');
const Holdings = require("./Models/holdings");
const Orders = require("./Models/orders");
const Positions = require("./Models/positions");
const User = require("./Models/user");
const {createSecretToken} = require("./utils/SecretToken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");


const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyparser.json());
app.use(express.json());
app.use(cookieParser());


mongoose
  .connect(uri)
  .then(console.log("Database Connected"))
  .catch((e) => {
    console.log(e);
  });

app.get("/", (req, res) => {
  res.send("hello Stockify");
});

//Signup
app.post("/signup",async (req,res,next)=>{
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
})

//Login
app.post("/login",async (req,res,next)=>{
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: "User logged in successfully", success: true });
    next()

  } catch (error) {
    console.log(error);
  }
})

app.get("/allHoldings",async (req,res)=>{
  let allholdings = await Holdings.find({});
  res.json(allholdings);
});

app.get("/allPositions",async (req,res)=>{
  let allpositions = await Positions.find({});
  res.json(allpositions);
});

app.get("/allOrder",async (req,res)=>{
  let allOrders = await Orders.find({});
  res.json(allOrders);
});

app.post("/newOrder",async (req,res)=>{
  let newOrder = new Orders({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
  });
  newOrder.save();
  res.send("Order was save!");
});

// app.get("/addHoldings", async (req, res) => {
//   let tempHolding = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempHolding.forEach((item) => {
//     let newHoldings = new Positions({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//     });

//     newHoldings.save();
//   });
//   res.send("Done positions!!");
// });

app.listen(PORT, () => {
  console.log("Server is Started");
});