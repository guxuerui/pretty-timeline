# [pretty-timeline](https://github.com/guxuerui/pretty-timeline)

这是一个Vue3版本的时间轴组件, 功能强大、使用丝滑

> 因为想使用时间轴来展示自己的一些经历，苦于没有找到满意的单vue3版本组件，所以自己动手写一个

## 安装

```sh
# Install with pnpm
$ pnpm i pretty-timeline -S
# or npm
$ npm i pretty-timeline -S
```

## Preview

[Please Look Here](https://www.guxuerui.cn/about/lifeTimeline)

## 使用(Use)

### 1. 导入(Import)

- 使用**局部导入**:

```ts
// 在.vue文件中
<script setup lang="ts">
  import { PrettyTimeline } from 'pretty-timeline'
  import 'pretty-timeline/dist/style.css'
</script>
```

- 使用**全局导入**

```ts
// 在main.ts中
import { PrettyTimeline } from 'pretty-timeline'
import 'pretty-timeline/dist/style.css'

// 注册为全局组件使用
app.component('pretty-timeline', PrettyTimeline);
```

### 2. 使用方式(Usage）

```ts
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
        iconRight: '7%',
        iconTop: '0%',
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
        iconRight: '7%',
        iconTop: '0%',
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
        iconRight: '7%',
        iconTop: '0%',
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
```

- **属性(Props)**

|名称|描述|类型|默认|是否必须|
|---|---|---|---|---|
|isCollapsed|是否收起|boolean|false|true|
|year|年份时间|string|''|true|
|title|标题|string|''|true|
|date|月份时间|string|''|true|
|iconColor|圆环颜色|string|'#ec6a4f'|true|
|iconRight|圆环定位右偏移量|string|'7%'|false|
|iconTop|圆环定位上偏移量|string|'0%'|false|
|chipColor|chip颜色|string|'#26c1c9'|false|
|chipText|chip文本|string|''|false|
|subTitleColor|小标题颜色|string|'#ec6a13'|true|
|subTitle|小标题|string|''|true|
|imgUrl|图片链接|string|''|false|
|content|正文内容|string|''|true|

## License

[MIT license](https://github.com/guxuerui/pretty-timeline/blob/main/LICENSE)
