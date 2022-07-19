import { DBConnection } from "./utils/database";
import { app } from "./app";
import { fetchBulk } from "./utils";

//connect to database
DBConnection();
// async function requestSender() {
//   console.log(await fetchBulk("https://api.huobi.pro/market/detail?symbol={}", ["ethusdt","btcusdt", "ethbtc", "bakeusdt", "algousdt"]));
// }
// requestSender()
if (app.listen(process.env.PORT)) {
  console.log("Node is listening to Port " + process.env.PORT);
} else {
  console.log("An error occured");
}
