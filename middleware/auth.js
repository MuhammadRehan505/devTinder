const authAdmin = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

const authUser = (req, res, next) => {
  const token = "xyzz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

module.exports = {
  authAdmin,
  authUser,
};

//KFe5LFOk7H4S9ZCQ
//mongodb+srv://rehandb:KFe5LFOk7H4S9ZCQ@cluster0.qmdzfxn.mongodb.net/
