import{_ as s,c as n,o as a,a as l}from"./app.a8cbee4a.js";const A=JSON.parse('{"title":"\uC0C1\uD638\uC791\uC6A9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uD578\uB4E4\uB7EC \uC0DD\uC131","slug":"\uD578\uB4E4\uB7EC-\uC0DD\uC131"},{"level":2,"title":"\uD578\uB4E4\uB7EC \uB4F1\uB85D \uBC0F \uC0AC\uC6A9","slug":"\uD578\uB4E4\uB7EC-\uB4F1\uB85D-\uBC0F-\uC0AC\uC6A9"}],"relativePath":"guide/interaction.md"}'),p={name:"guide/interaction.md"},o=l(`<h1 id="\uC0C1\uD638\uC791\uC6A9" tabindex="-1">\uC0C1\uD638\uC791\uC6A9 <a class="header-anchor" href="#\uC0C1\uD638\uC791\uC6A9" aria-hidden="true">#</a></h1><p>Component API\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAD6C\uC131\uC694\uC18C\uB97C \uB9CC\uB4E4 \uB54C, \uD578\uB4E4\uB7EC\uC5D0\uC11C \uC0DD\uC131\uACFC \uC751\uB2F5\uC744 \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD574\uB2F9 \uBB38\uC11C\uC5D0\uC11C\uB294 \uBC84\uD2BC\uC73C\uB85C \uC608\uC81C\uB97C \uC791\uC131\uD569\uB2C8\uB2E4.</p><h2 id="\uD578\uB4E4\uB7EC-\uC0DD\uC131" tabindex="-1">\uD578\uB4E4\uB7EC \uC0DD\uC131 <a class="header-anchor" href="#\uD578\uB4E4\uB7EC-\uC0DD\uC131" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// components/button.component.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MessageButton</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">discord.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Inject</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DiscordComponent</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CordWorkClient</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@cordwork/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">DiscordComponent</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ButtonComponent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Inject</span><span style="color:#A6ACCD;">(CordWorkClient) </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CordWorkClient</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">create</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MessageButton</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">MessageButton</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCustomId</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mybutton</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setLabel</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">LABEL </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> at </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setStyle</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PRIMARY</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">listener</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">interaction</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">interaction</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reply</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">button click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>create</code> \uBA54\uC11C\uB4DC\uC5D0\uC11C \uC0DD\uC131\uD558\uACE0\uC790 \uD558\uB294 \uC0C1\uD638\uC791\uC6A9 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB9CC\uB4ED\uB2C8\uB2E4. \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC0C1\uD638\uC791\uC6A9\uC5D0 \uB300\uD55C \uC751\uB2F5\uC744 \uD558\uAE30 \uC704\uD574\uC120 <code>listener</code> \uBA54\uC11C\uB4DC\uAC00 \uC874\uC7AC\uD574\uC57C \uD569\uB2C8\uB2E4.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\uC0DD\uC131\uB41C \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC751\uB2F5\uC744 \uB9E4\uCE6D\uC2DC\uD0A4\uAE30 \uC704\uD55C \uAE30\uC900\uC73C\uB85C <code>customId</code>\uB97C \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0, <code>setCustomId</code>\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC544\uC774\uB514\uB97C \uBC18\uB4DC\uC2DC \uC9C0\uC815\uD574 \uC8FC\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p></div><h2 id="\uD578\uB4E4\uB7EC-\uB4F1\uB85D-\uBC0F-\uC0AC\uC6A9" tabindex="-1">\uD578\uB4E4\uB7EC \uB4F1\uB85D \uBC0F \uC0AC\uC6A9 <a class="header-anchor" href="#\uD578\uB4E4\uB7EC-\uB4F1\uB85D-\uBC0F-\uC0AC\uC6A9" aria-hidden="true">#</a></h2><p>\uD578\uB4E4\uB7EC\uB97C <strong>\uC8FC\uC785</strong>\uBC1B\uAE30 \uC704\uD574\uC11C\uB294 CordWork\uAC00 \uB0B4\uBD80\uC801\uC73C\uB85C \uC0AC\uC6A9\uD558\uB294 \uCEE8\uD14C\uC774\uB108\uC5D0 \uB4F1\uB85D\uD574\uC57C \uD558\uBBC0\uB85C \uBAA8\uB4C8\uC5D0 \uB4F1\uB85D\uC2DC\uCF1C\uC8FC\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-typescript"><span class="copy"></span><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Module</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@cordwork/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PingCommand</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./commands/ping.command</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ReadyEvent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./events/ready.event</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ButtonComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./components/button.cpmonent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Module</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ReadyEvent]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">commands</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [PingCommand]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ButtonComponent]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\uC774\uD6C4 \uB4F1\uB85D\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC8FC\uC785\uBC1B\uC544 <code>create</code> \uBA54\uC11C\uB4DC\uB85C \uC0DD\uC131\uB41C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4. \uC774\uC804\uC5D0 \uB9CC\uB4E0 \uC608\uC81C\uC778 <code>/ping</code> \uBA85\uB839\uC5B4 \uC785\uB825\uC2DC \uC0DD\uC131\uD55C \uBC84\uD2BC\uC744 \uC751\uB2F5\uC73C\uB85C \uC8FC\uB3C4\uB85D \uC218\uC815\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4.</p><div class="language-typescript"><span class="copy"></span><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// commands/ping.command.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CommandInteraction</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">MessageActionRow</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">MessageButton</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">discord.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">DiscordCommand</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Inject</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">CordWorkClient</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Component</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@coredwork/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ButtonComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../components/button.component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">DiscordCommand</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ping</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">The test command.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">guilds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my guild name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PingCommand</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Inject</span><span style="color:#A6ACCD;">(CordWorkClient) </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CordWorkClient</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Inject</span><span style="color:#A6ACCD;">(ButtonComponent) </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> button</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MessageButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">listener</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">interaction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CommandInteraction</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">interaction</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reply</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      content</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pong</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      components</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">MessageActionRow</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addComponents</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">())</span></span>
<span class="line"><span style="color:#F07178;">      ]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>create</code> \uBA85\uB839\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC740 \uD638\uCD9C\uB420 \uB54C\uB9C8\uB2E4 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0C8\uB85C \uC0DD\uC131\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC2E4\uD589\uB420 \uB54C \uB9CC\uB4E4\uC5B4\uC9C0\uB294 \uAC83\uACFC\uB294 \uB2E4\uB974\uB2C8 \uC8FC\uC758\uD558\uC138\uC694.</p></div>`,12),e=[o];function t(c,r,D,F,y,C){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};
