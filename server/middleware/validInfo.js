module.exports = (req, res, next) => {
<<<<<<< HEAD
  const { email, password } = req.body;

  function validEmail(userEmail) {
    //return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    return /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(fpt.edu|fe.edu)\.vn$/.test(
      userEmail
    );
  }

  if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.status(401).json({ message: "Missing Credentials" });
    } else if (!validEmail(email)) {
      return res.status(401).json({ message: "Invalid Email" });
=======
    const { email, password } = req.body;
  
    function validEmail(userEmail) {
      //return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
      return /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(fpt.edu|fe.edu)\.vn$/.test(userEmail);
    }
    
    if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.status(401).json({
          message: "Missing Credentials"
        });
      } else if (!validEmail(email)) {
        return res.status(401).json({
          message: "Invalid Email"
        });
      }
>>>>>>> 1242fab6e4181c7d41fec545092745e8c9fae29c
    }
  }

  next();
};
