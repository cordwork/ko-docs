# 이벤트 핸들링


::: info
discord.js 의 가이드는 [이곳](https://discordjs.guide/creating-your-bot/event-handling.html)에서 확인할 수 있습니다.
:::


Node.js는 이벤트 드리븐 아키텍처를 사용해서 특정 이벤트가 있을 때 코드를 실행할 수 있습니다. discord.js 라이브러리는 이벤트 드리븐 아키텍처를 최대한 사용합니다. [Client](https://discord.js.org/#/docs/discord.js/main/class/Client) 문서에서 디스코드가 지원하는 모든 이벤트 목록을 확인할 수 있습니다.


## 핸들러 생성

CordWork에선 이벤트를 개별로 핸들링하는 인스턴스를 만들 수 있습니다. `src/events` 폴더를 생성하고, `src/events/ready.event.ts` 에서 작업을 합니다.

이벤트 핸들러 또한 마찬가지로 의존성을 주입받을 수 있습니다.

```typescript
import {
  Inject,
  DiscordEvent,
  CordWorkClient,
} from '@cordwork/core';

@DiscordEvent('ready')
export class ReadyEvent {
  constructor(
    @Inject(CordWorkClient) private client: CordWorkClient
  ) {}

  async listener(): Promise<void> {
    console.log(`Logged in as ${this.client?.user?.tag}!`);
    const application = this.client.application;
    if ( application ) {
      console.log('client id', application.id);
    }
  }
}
```

## 핸들러 등록

명령어 핸들러와 같이 모듈에 등록시켜야 합니다. `src/app.module.ts` 를 수정합니다.

```typescript{3,6}
import { Module } from '@cordwork/core';
import { PingCommand } from './commands/ping.command';
import { ReadyEvent } from './events/ready.event';

@Module({
  events: [ReadyEvent],
  commands: [PingCommand],
})
export class App {

}
```