<script setup lang="ts">
import image from '/images/street.jpeg'
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
</script>

<template>
  <div max-w-3xl my-0 ma>
    <PrettyTimeline :timeline-data="timelineArr" />
  </div>
</template>
