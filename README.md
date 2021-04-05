# Send Slack Message

This is a GitHub action to send a Slack message using a Slack bot token.

## Set up

See https://api.slack.com/bot-users for information on setting up and installing a Slack Bot.

## Inputs

- `webhook_url`: Slack webhook URL to send message.

- `message`: The Slack message to send


## Example Usage


```yaml
      - name: Send Slack Notification
        uses: ssethu24/action-slack-notify@v1
        with:
          webhook_url: https://hooks.slack.com/services/{token}
          message: 'your message' 
```