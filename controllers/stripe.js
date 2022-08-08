import User from "../models/user";
import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET);

export const createConnectAccount = async (req, res) => {
  const user = await User.findById(req.auth._id).exec();
  console.log(user);
  const account = await stripe.accounts.create({
    type: "express",
  });
  console.log(account);
};
