const { db } = require("../configs/firebase-config");
// const { getDocs } = require("firebase-admin/firestore");
// const { collection } = require("firebase-admin/firestore");

const express = require("express");
const router = express.Router();

// 表示
async function dispData() {
  const snapshot = await db.collection("root").get();
  const userList = [];
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    const task = {
      docId: doc.id,
      title: doc.data().title,
      timeStamp: doc.data({ serverTimestamps: "estimate" }).timeStamp,
    };
    userList.push(task);
  });
  return userList[0];
}

/* サンプルAPI①
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get("/", async function (req, res, next) {
  const data = await dispData();
  console.log(data);
  const param = {
    値: "これはサンプルAPIです",
    firestore: ">" + data.title,
  };
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
