var https = require("follow-redirects").https;
var fs = require("fs");

var options = {
  method: "POST",
  hostname: "customer-analytics-34146.my.salesforce-sites.com",
  path: "/services/apexrest/buyStocks",
  headers: {
    "content-type": "application/json",
    "bfhl-auth": "2110991887",
    Cookie:
      "BrowserId=9iDHkOUDEe6crOVpdDNWXQ; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1",
  },
  maxRedirects: 20,
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({
  company: "Bjaj Finserv",
  currentPrice: 1571.65,
  accountNumber: "BFHL0018619",
  githubRepoLink: "https://github.com/AvinashKumar0923/investment-bajaj",
});

req.write(postData);

req.end();
