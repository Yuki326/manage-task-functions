const express = require("express");
const router = express.Router();

/* サンプルAPI①
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get("/", function (req, res, next) {
  const param = { 値: "これはサンプルAPIです" };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

/* サンプルAPI②
 * http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get("/hello", function (req, res, next) {
  const param = { result: "Hello World !" };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

router.post("/api", function (req, res, next) {
  const param = {
    値: "POSTメソッドのリクエストを受け付けました",
    bodyの値: req,
  };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

module.exports = router;
