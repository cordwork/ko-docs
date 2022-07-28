# 시작하기

해당 문서에선 CordWork를 사용하여 프로젝트를 만들고 봇의 명령까지 추가하는 법을 설명합니다.
CordWork 앱의 기본 구성 요소를 익히기 위해, 가장 간단한 `ping - ping` 명령어가 동작되도록 할 것입니다.

::: warning
CordWork는 아직 **개발 단계** 를 거치고 있습니다. 사용하는 데에 문제는 없지만, 계속되는 배포 과정에서 사용 방법이 변경될 수 있습니다.
:::

## 언어

타입스크립트를 사용할 것입니다. [Babel](https://babeljs.io/)을 사용하여 컴파일한다면 순수 자바스크립트를 사용하여도 앱을 만들 수 있지만 해당 문서에선 설명하지 않을 것입니다.



## 새 프로젝트 만들기

미리 만들어져있는 [템플릿](https://github.com/cordwork/starting-template)을 사용해 프로젝트를 구성합니다.

```sh
$ npx degit cordwork/starting-template my-discord-bot
$ cd my-descord-bot
$ npm install
```

`my-discord-bot` 이름의 디렉토리가 생성되고 노드 모듈과 `src/` 디렉토리 안에 코어 파일로 채워집니다.

```
src
├── app.module.ts
├── commands
│   └── ping.command.ts
└── main.ts
```

아래는 이러한 파일들의 간단한 개요입니다.


| 파일 이름 | 설명 |
|-------|-----|
|`main.ts`|`CordWork` 클래스를 이용하여 CordWork 어플리케이션 인스턴스를 만드는 파일입니다.|
|`app.module.ts`|어플리케이션의 최상위 모듈 파일입니다.|
|`ping.command.ts`|`/ping` 명령어를 생성하고, `ping!`을 응답하는 명령어 클래스 파일입니다.|

`main.ts` 에는 어플리케이션을 **부트스트랩**하는 비동기 함수가 포함되어있습니다.

```typescript
import { CordWork } from '@cordwork/core';
import { App } from './app.module';

async function bootstrap() {
  const client = await new CordWork()
    .SetToken(process.env.BOT_TOKEN || '')
    .SetAppModule(App)
    .Launch();
}
bootstrap();
```

앱을 생성하기 위해 `CordWork` 클래스를 사용합니다. `Lanch()` 함수는 [Client 클래스](https://discord.js.org/#/docs/discord.js/main/class/Client)를 감싼 `CordWorkClient`를 반환합니다.
어플리케이션이 실행되기까지 앱 모듈을 파싱하고 자체 컨테이너에 정보들을 등록한 뒤 디스코드에 로그인합니다.

## 어플리케이션 실행하기

설치가 끝났다면 OS 명령 프롬프트에서 아래 명령을 입력하여 디스코드 봇 앱을 실행할 수 있습니다.
환경변수 관리는 각자의 방법으로 변경할 수 있으나, [봇 토큰 발급](https://discord.com/developers/applications/)은 꼭 필요합니다.

```sh
$ BOT_TOKEN=[You Bot Token] GUILD=[Your Guild Name] npm run dev
```

위 명령을 사용하여 어플리케이션을 시작하면, `src/main.ts` 가 실행되어 앱이 로그인합니다.
`[Your Guild Name]` 의 디스코드 채널에 `/ping` 명령어가 추가된 것을 확인할 수 있습니다.

