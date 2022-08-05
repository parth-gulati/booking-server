import User from "../models/user";

export const register = async (req, res) => {
  console.log(req.body);

  const { name, password, email } = req.body;

  //validation
  if (!name) {
    return res.status(400).send("Bhai kya yaar naam toh bhejo");
  }
  if (!password || password.length < 6) {
    return res.status(400).send("Bhai kya yaar valid password toh bhejo");
  }
  if (!email) {
    return res.status(400).send("Bhai kya yaar email toh bhejo");
  }
  let userExist = await User.findOne({ email }).exec();
  if (userExist) return res.status(400).send("Email is taken");

  const user = new User(req.body);
  try {
    await user.save();
    console.log("USER CREATED");
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error in creating user");
  }
};
