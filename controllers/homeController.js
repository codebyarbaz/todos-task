exports.getHome = async (req, res, next) => {
  try {
    return res.render("index", { title: "Todos" });
  } catch (err) {
    next(err);
  }
};
