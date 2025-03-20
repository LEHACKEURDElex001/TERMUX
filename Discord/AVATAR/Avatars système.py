```python
import discord
from discord.ext import commands

bot = commands.Bot(command_prefix="!")

@bot.command()
async def avatar(ctx, member: discord.Member = None):
    member = member or ctx.author
    embed = discord.Embed(title=f"Avatar de {member.name}")
    embed.set_image(url=member.avatar_url)
    await ctx.send(embed=embed)

# Start the bot
bot.run('YOUR_BOT_TOKEN')
