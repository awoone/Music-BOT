module.exports = {
	name: 'skip',
	description: 'Skip command.',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Você precisa estar em um canal de voz primeiro!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Não tem nada tocando no momento para pular.');
		serverQueue.connection.dispatcher.end('Pulando para a próxima música para você!');
	}
};