import requests

webhook_url = "https://discord.com/api/webhooks/xxxxxxxx/xxxxxxxxxxxx"

# the message sent here
message = "WRITE YOUR TEXT HERE"

data = {"content": message}

response = requests.post(webhook_url, json=data)

if response.status_code == 204:
    print("✅ Message successfully sent on Discord!")
else:
    print(f"❌ Message successfully sent on Discord! : {response.status_code}")
