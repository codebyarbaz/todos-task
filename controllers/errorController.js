exports.get404 = async (req, res, next) => {
  try {
    return res.render("404", { title: "Page Not Found" });
  } catch (err) {
    next(err);
  }
};

exports.get500 = async (err, req, res, next) => {
  try {
    return res.render("500", { title: "Something went wrong" });
  } catch (err) {
    next(err);
  }
};
