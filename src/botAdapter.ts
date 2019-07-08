import { BotFrameworkAdapter } from "botbuilder";

export default new BotFrameworkAdapter({
  appId: process.env.MICROSOFT_APP_IP || "",
  appPassword: process.env.MICROSOFT_APP_PASSWORD || ""
});
