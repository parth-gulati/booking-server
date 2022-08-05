export const showMessage = (req, res) => {
  //do work
  res.status(200).send(`<H1>${req.params.message}</H1>`);
};

export const register = async (req, res) => {
  console.log(req.body);
};
