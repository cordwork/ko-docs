# 명령어 핸들링


::: info
discord.js 의 가이드는 [이곳](https://discordjs.guide/creating-your-bot/command-handling.html)에서 확인할 수 있습니다.
:::

봇 어플리케이션이 작은 프로젝트가 아닐 때, 하나의 파일에서 거대한 `if/else` 체인으로 관리하는 것은 매우 좋은 생각이 아닙니다.
discord.js 에서는 봇의 기능을 구현하고 개발 프로세스를 덜 고통스럽게 하기 위해 명령 핸들러를 구현하는 예제를 알려줍니다.

CordWork에서는 이미 핸들러를 제공하고, 더 깔끔하게 모듈화 시킬 수 있습니다.

## 핸들러 생성

파일을 하나 생성하고, `DiscordCommand` 데코레이터를 사용해 명령어 핸들러를 생성합니다. [시작하기](/guide/getting-started)에서 만든 프로젝트를 기준으로 `src/commands/ping.command.ts` 파일이 핸들러입니다.

```typescript
import { CommandInteraction } from 'discord.js';
import { DiscordCommand } from '@coredwork/core';

@DiscordCommand({
  name: 'ping',
  description: 'The test command.',
  guilds: ['my guild name'],
})
export class PingCommand {
  async listener(interaction: CommandInteraction): Promise<void> {
    interaction.reply('Pong!');
  }
}
```

다음은 데코레이터에 들어가는 객체의 인자에 대해서 간략한 설명입니다.

| 키 | 값 |
|---|----|
|`name`|명령어 이름입니다. 위 코드의 경우 `/ping`이 명령어가 됩니다.|
|`description`|명령어 설명입니다. `/ping` 을 입력했을 경우, 디스코드가 보여줄 설명입니다.|
|`guilds`|해당 명령어를 사용할 [Guild](https://discord.js.org/#/docs/discord.js/main/class/Guild) 정보입니다.|


`Guild` 의 경우 여러개의 채널을 설정할 수 있으며 길드의 이름이 문자열 타입으로 들어가거나, 길드 메타데이터 형식의 객체가 들어갈 수 있습니다.

```typescript
export interface GuildMetadata {
	id?: string;
	name?: string;
}
export type Guild = string | GuildMetadata;
```

::: danger
`@DiscordCommand` 데코레이터를 적용하는 객체는 항상 `listener` 메소드가 존재해야 합니다. 이는 `client.on('interactionCreate')` 의 콜백함수가 됩니다.
:::

## 핸들러 등록

당연히 핸들러를 생성한다고 해서 바로 사용할 수는 없습니다. 어플리케이션 실행시 등록된 모듈을 기준으로 명령어를 주입하도록 모듈에 등록해야 합니다. 모듈에 대한 설명은 이후에 하므로 지금은 예제의 `src/app.module.ts` 를 확인합시다.

```typescript{2,5}
import { Module } from '@cordwork/core';
import { PingCommand } from './commands/ping.command';

@Module({
  commands: [PingCommand],
})
export class App {

}
```

모듈에서 생성한 명령어 핸들러를 `commands` 에 배열로 등록합니다. 이제, 봇이 시작될 때 `/ping` 명령어가 등록됩니다.


## 의존성 주입

CordWork는 의존성 주입(Dependency Injection)과 의존관계 역전(Inversion Of Control)에 의해 설계됨으로, 원하는 의존관계를 공급자에게 주입받을 수 있습니다.

`export default` 로 핸들러를 생성하는 것은 `main.ts` 에서 생성한 클라이언트 인스턴스에 접근할 수 없기때문에 의존성을 주입받아야 합니다.

::: info
물론, `interaction.client` 객체에 접근한다면 discord.js에서 생성한 클라이언트 인스턴스에 접근할 수 있으나, CordWork에서 생성한 클라이언트 인스턴스와는 다른 객체입니다.
:::

명령어 핸들러를 생성한 `ping.command.ts`를 수정합니다.

```typescript{2,10-12,15}
import { CommandInteraction } from 'discord.js';
import { DiscordCommand, Inject, CordWorkClient } from '@coredwork/core';

@DiscordCommand({
  name: 'ping',
  description: 'The test command.',
  guilds: ['my guild name'],
})
export class PingCommand {
  constructor(
	@Inject(CordWorkClient) private client: CordWorkClient
  ) {}

  async listener(interaction: CommandInteraction): Promise<void> {
    interaction.reply(`Pong! by ${this.client?.user?.tag}`);
  }
}
```

생성 인자로 의존성을 주입받으면 핸들러에서 클라이언트 인스턴스에 접근할 수 있게 됩니다. 