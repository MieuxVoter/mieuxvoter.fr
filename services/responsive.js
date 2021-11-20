import Parser from "ua-parser-js";

export function isMobile(req) {
  let userAgent;

  if (req) {
    // SSR request
    userAgent = Parser(req.headers["user-agent"] || "");
  } else {
    userAgent = new Parser().getResult();
  }

  return userAgent?.device?.type === "mobile";
}
