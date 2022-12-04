# [pretty-timeline](https://github.com/guxuerui/pretty-timeline)

这是一个vue3版本的时间轴组件, 功能强大、可配置性高、使用丝滑

> 因为想使用时间轴组件，苦于没有找到现有的vue3版本，所以自己动手实现一下

## 安装(Install)

```sh
# Install with pnpm
$ pnpm i pretty-timeline -S
# or npm
$ npm i pretty-timeline -S
```

## 预览(Preview)

- On Light Mode

![light](https://user-images.githubusercontent.com/23629097/205476617-3710f1c4-4f43-422b-9f26-1eea3416dbfb.png)

- On Dark Mode

![dark](https://user-images.githubusercontent.com/23629097/205476620-9590cd43-3ebc-45d1-b115-46eefa2407ca.png)

## 使用(Use)

### 1. 导入(Import)

- 使用**局部导入**:

```ts
// 在.vue文件中
import { PrettyTimeline } from 'pretty-timeline'
import 'pretty-timeline/dist/style.css'
```

- 使用**全局导入**

```ts
// 在main.ts中
import PrettyTimeline from 'pretty-timeline'
import 'pretty-timeline/dist/style.css'

// 注册为全局组件使用
app.use(PrettyTimeline)
// or
app.component('PrettyTimeline', PrettyTimeline)
```

### 2. 使用示例(Example）

```ts
import image from '/imgs/street.jpeg'
import type { ITimeline } from '~/types'

const timelineArr = ref<ITimeline[]>([
  {
    isCollapsed: false,
    year: '2022年',
    title: '光阴长河',
    list: [
      {
        date: '12月3日',
        iconColor: 'green',
        chipColor: '#26C1C9',
        chipText: 'gxr chips',
        subTitleColor: '#ec6a13',
        subTitle: '新的一年开始了',
        imgUrl: image,
        content: `
        春日忆李白<br/>
        白也诗无敌，飘然思不群。<br/>
        清新庾开府，俊逸鲍参军。<br/>
        渭北春天树，江东日暮云。<br/>
        何时一尊酒，重与细论文。
        <br/>
        <a text="orange" border-b="1 dashed orange" href="https://github.com/guxuerui" target="_blank">我的Github</a>
        `,
      },
      {
        date: '12月2日',
        iconColor: '#fa1',
        chipColor: '#26C',
        chipText: '此时此刻, 恰如彼时彼刻',
        subTitleColor: '#ec6a13',
        subTitle: '进入12月了',
        imgUrl: '',
        content: `
        菊<br/>
        罗隐〔唐代〕<br/>
        篱落岁云暮，数枝聊自芳。<br/>
        雪裁纤蕊密，金拆小苞香。<br/>
        千载白衣酒，一生青女霜。<br/>
        春丛莫轻薄，彼此有行藏。
        <br/>
        <a text="blue" border-b="1 dashed blue" href="https://github.com/guxuerui" target="_blank">我的Github</a>
        `,
      },
    ],
  },
  {
    isCollapsed: false,
    year: '2021年',
    title: '',
    list: [
      {
        date: '12月2日',
        iconColor: 'cyan',
        chipColor: '#1C9',
        chipText: '你好吗',
        subTitleColor: '#1f3',
        subTitle: '去年今日',
        imgUrl: image,
        content: `
        秦淮杂诗·其八<br/>
        王士祯〔清代〕<br/>
        新歌细字写冰纨，小部君王带笑看。<br/>
        千载秦淮呜咽水，不应仍恨孔都官。
        `,
      },
    ],
  },
])
```

```html
<pretty-timeline :timeline-data="timelineArr" />
```

### 3. 兼容性

支持最新版本的 `Chrome/Firefox/Safari`

### 4. 类型定义和属性(Props)

- **类型定义(Type Declarations)**

```ts
export interface IList {
  date: string
  iconColor: string
  iconRight?: string
  iconTop?: string
  chipColor?: string
  chipText?: string
  subTitleColor: string
  subTitle: string
  imgUrl?: string
  content: string
}

export interface ITimeline {
  isCollapsed: boolean
  year: string
  title: string
  list: IList[]
}

interface IPrettyTimeline {
  baseColor?: string
  timelineData: ITimeline[]
}
```

- **属性(Props)**

|名称|描述|类型|默认|是否必须|
|---|---|---|---|---|
|baseColor|基础颜色, 应用于年份和title|string|'#58a6fb'|false|
|isCollapsed|是否收起|boolean|false|true|
|year|年份时间|string|''|true|
|title|标题|string|''|true|
|date|月份时间|string|''|true|
|iconColor|圆环颜色|string|'#ec6a4f'|true|
|iconRight|圆环定位右偏移量|string|'8%'|false|
|iconTop|圆环定位上偏移量|string|'0%'|false|
|chipColor|chip颜色|string|'#26c1c9'|false|
|chipText|chip文本|string|''|false|
|subTitleColor|小标题颜色|string|'#ec6a13'|true|
|subTitle|小标题|string|''|true|
|imgUrl|图片链接|string|''|false|
|content|正文内容|string|''|true|

## 类型报错

如果引入组件后报类型错误，可以在 `shims.d.ts`(或其它 `.d.ts` 文件)中加入:

```ts
declare module 'pretty-timeline'
```

## License

[MIT license](https://github.com/guxuerui/pretty-timeline/blob/main/LICENSE)
