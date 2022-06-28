export default async function getGuild(guildID: string) {
    const response = await fetch(`https://discord.com/api/guilds/${guildID}`);
    return await response.json();
}