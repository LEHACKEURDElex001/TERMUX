```python
import discord
from discord.ext import commands

# Crée une instance de bot
intents = discord.Intents.default()
intents.message_content = True 
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')
    
    user_id = 123456789012345678  # Replace with user ID
    user = await bot.fetch_user(user_id)
    await user.send("WRITE YOUR MESSAGE HERE!")

# Start the bot
bot.run('YOUR_BOT_TOKEN')
