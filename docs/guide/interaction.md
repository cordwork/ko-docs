# 상호작용

Component API를 사용하여 구성요소를 만들 때, 핸들러에서 생성과 응답을 관리할 수 있습니다.
해당 문서에서는 버튼으로 예제를 작성합니다.


## 핸들러 생성


```typescript
// components/button.component.ts
import { MessageButton } from 'discord.js';
import { Inject, DiscordComponent, CordWorkClient } from '@cordwork/core';

@DiscordComponent()
export class ButtonComponent {
  constructor(
    @Inject(CordWorkClient) private client: CordWorkClient,
  ) {}

  create(): MessageButton {
    return new MessageButton()
      .setCustomId('mybutton')
      .setLabel(`LABEL ${this.client?.user?.tag} at ${new Date()}`)
      .setStyle('PRIMARY');
  }

  listener(interaction): void {
    interaction.reply('button click');
  }
}
```

`create` 메서드에서 생성하고자 하는 상호작용 컴포넌트를 만듭니다. 마찬가지로 상호작용에 대한 응답을 하기 위해선 `listener` 메서드가 존재해야 합니다.


::: tip
생성된 컴포넌트와 응답을 매칭시키기 위한 기준으로 `customId`를 사용하기 때문에, `setCustomId`를 사용하여 아이디를 반드시 지정해 주어야 합니다.
:::


## 핸들러 등록 및 사용

핸들러를 **주입**받기 위해서는 CordWork가 내부적으로 사용하는 컨테이너에 등록해야 하므로 모듈에 등록시켜주어야 합니다.

```typescript{4,9}
import { Module } from '@cordwork/core';
import { PingCommand } from './commands/ping.command';
import { ReadyEvent } from './events/ready.event';
import { ButtonComponent } from './components/button.cpmonent';

@Module({
  events: [ReadyEvent],
  commands: [PingCommand],
  components: [ButtonComponent],
})
export class App {

}
```

이후 등록한 컴포넌트를 주입받아 `create` 메서드로 생성된 컴포넌트를 가져옵니다. 이전에 만든 예제인 `/ping` 명령어 입력시 생성한 버튼을 응답으로 주도록 수정해 보겠습니다.

```typescript{3-4,10,13,23,29-32}
// commands/ping.command.ts
import {
  CommandInteraction,
  MessageActionRow,
  MessageButton,
} from 'discord.js';
import {
  DiscordCommand,
  Inject,
  CordWorkClient,
  Component,
} from '@coredwork/core';
import { ButtonComponent } from '../components/button.component';

@DiscordCommand({
  name: 'ping',
  description: 'The test command.',
  guilds: ['my guild name'],
})
export class PingCommand {
  constructor(
    @Inject(CordWorkClient) private client: CordWorkClient,
    @Inject(ButtonComponent) private button: Component<MessageButton>
  ) {}

  async listener(interaction: CommandInteraction): Promise<void> {
    interaction.reply({
      content: 'pong',
      components: [
        new MessageActionRow()
          .addComponents(this.component.create())
      ]
    });
  }
}
```

::: warning
`create` 명령을 사용하는 것은 호출될 때마다 컴포넌트를 새로 생성하는 것입니다. 어플리케이션이 실행될 때 만들어지는 것과는 다르니 주의하세요.
:::