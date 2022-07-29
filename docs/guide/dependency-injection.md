# 의존성 주입

::: warning
해당 문서에는 **DI**, **IoC**등 의존성에 관한 개념을 설명하지 않습니다.
:::


## 주입 가능 객체

이전 내용들에서 `CordWorkClient`나 메시지 컴포넌트를 주입받았던 것과 같이, 개발자가 원하는 클래스를 어느곳에서나 주입받을 수 있습니다. `src/service.inject.ts` 파일에 새 클래스를 생성합니다.

```typescript{2,7}
import {
  Injectable,
  Inject,
  CordWorkClient,
} from "@cordwork/core";

@Injectable()
export class Service {
  constructor(
    @Inject(CordWorkClient) private client: CordWorkClient
  ) {}

  service() {
    return this.client?.user?.tag || '';
  }
}
```

## 객체 등록

`Injectable()` 함수를 사용하면 **주입할 수 있는** 클래스가 됩니다. 물론, 주입할 수 있는 클래스 또한 주입받을 수 있습니다. 지금까지 설명했던 것과 같이 모듈에 등록해야 합니다.


```typescript{4,7}
import { Module } from '@cordwork/core';
import { PingCommand } from './commands/ping.command';
import { ReadyEvent } from './events/ready.event';
import { Service } from './service.inject';

@Module({
  imports: [Service],
  events: [ReadyEvent],
  commands: [PingCommand],
})
export class App {

}
```

주입할 수 있는 클래스는 `imports` 에 추가합니다.

## 객체 사용

이제 등록한 객체를 주입받아 사용하기만 하면 됩니다.


```typescript{7}
import { CommandInteraction } from 'discord.js';
import { DiscordCommand, Inject } from '@coredwork/core';
import { Service } from '../service.inject';

@DiscordCommand({
  name: 'ping',
  description: 'The test command.',
  guilds: ['my guild name'],
})
export class PingCommand {
  constructor(
	  @Inject(Service) private service: Service
  ) {}

  async listener(interaction: CommandInteraction): Promise<void> {
    interaction.reply(`Pong! by ${this.service.service()}`);
  }
}
```

