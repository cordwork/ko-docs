# 시작하기

## 개요

CordWork (Dis**cord** Bot Frame**work** 에서 따옴) 는 [NestJS](https://nestjs.com) 에서 착안한 프레임워크로, [Node.js](https://nodejs.org)를 사용하는 디스코드 봇 어플리케이션입니다.
최신 자바스크립트를 사용하며, [TypeScript](https://www.typescriptlang.org/)를 완전 지원하여 OOP (Object Oriented Programming), FP (Functional Programming) 와  FRP (Functional Reactive Programming) 개념을 결합할 수 있습니다.

## 왜 CordWork를 사용해야 하나요?

간단한 예로, Discord.js 에서 설명하는 [Slash Command](https://discordjs.guide/interactions/slash-commands.html)를 등록하는 방법은 다음과 같습니다.

```javascript
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { token } = require('./config.json');

// Place your client and guild ids here
const clientId = '123456789012345678';
const guildId = '876543210987654321';


const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      {
        body: [
          new SlashCommandBuilder()
          .setName('echo')
          .setDescription('Replies with your input!')
          .addStringOption(option =>
            option.setName('input')
              .setDescription('The input to echo back')
              .setRequired(true));
        ]
      },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
```

등록한 Slash Command에 대해 반응하려면 Client 에서 `interactionCreate` 이벤트를 받아 처리해야 합니다.

```javascript
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (interaction.commandName === 'echo') {
    await interaction.reply('Echo!');
  }
});
```


하지만 CordWork에선 다음과 같은 클래스를 만들어 등록하는 것만으로 등록과 반응 처리를 할 수 있습니다.

```typescript
import { DiscordCommand } from '@coredwork/core';

@DiscordCommand({
  name: 'ping',
  description: 'The test command.',
  guilds: ['my guild name'],
})
export class CommandController {
  async listener(interaction): Promise<void> {
    interaction.reply('Pong!');
  }
}
```
