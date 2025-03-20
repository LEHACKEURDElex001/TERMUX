```python
import discord
from discord.ext import commands

# Creates a bot instance
intents = discord.Intents.default()
intents.members = True  
bot = commands.Bot(command_prefix="!")

@bot.event
async def on_member_join(member):
    channel = discord.utils.get(member.guild.text_channels, name="general")  # Remplace par ton salon de bienvenue
    if channel:
        await channel.send(f"🎉 Welcome to the server, {member.mention} ! We are happy to have you here ! 🎉")

# Start the bot
bot.run('YOUR_BOT_TOKEN')
