import * as core from "@actions/core";
import fetch from "node-fetch";

async function run(): Promise<void> {
  try {
    // Inputs and validation
    const slackReleaseChannelUrl = core.getInput("webhook_url", {
      required: true,
    });
    const message = core.getInput("message", { required: true });

    const res = await fetch(slackReleaseChannelUrl, {
      method: "POST",
      body: JSON.stringify({ text: message }),
    });

    if (res.status === 200) {
      core.info("Slack message sent 🚀");
    } else {
      core.setFailed(`❌ Unable to send Slack message: ${res.status}`);
    }
  } catch (error) {
    core.setFailed(`❌ Action failed with error: ${error}`);
  }
}

run();
