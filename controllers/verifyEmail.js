const client = require("./../config/redis");
const pgClient = require("./../config/postgres");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const otp = req.body.OTP;
    const email = req.body.email;
    if (otp === undefined || otp % 10000 != otp)
      res.send({ message: "Invalid Otp" });
    else {
      redisOtp = await client.get(email);

      if (redisOtp === undefined)
        res.send({ message: "Session timed out.Please try again." });
      else {
        if (redisOtp != otp)
          res.send({
            message: "Incorrect otp",
          });
        else {
          const getUserQuery = {
            text: "SELECT user_id from users where email=$1",
            values: [email],
          };
          const getUserQueryResult = await pgClient.query(getUserQuery);

          if (!getUserQueryResult.rowCount) {
            const insertUserQuery = {
              text: "INSERT INTO users (email,verified) VALUES($1,$2)",
              values: [email, true],
            };
            const getInsertUserQueryResult = await pgClient.query(
              insertUserQuery
            );
            console.log(getInsertUserQueryResult);
            res.send({
              message: "Email verified successfully!",
            });
          } else {
            const userId = getUserQueryResult.rows[0].user_id;

            const token = jwt.sign(
              { user_id: userId, email },
              process.env.TOKEN_KEY,
              {
                expiresIn: "7d",
              }
            );
            res.send({ userId, token });
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
