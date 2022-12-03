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
        iconRight: '7%',
        iconTop: '0%',
        chipColor: '#26C1C9',
        chipText: 'gxr chips',
        subTitleColor: '#ec6a13',
        subTitle: '新的一年开始了',
        imgUrl: image,
        content: `
        首创微信集商务、娱乐一体化多媒体智能终端机微美图打印机
        营销推广活动支持导入SN码
        微商城模板，支持分类列表
        微商城完整支持微信支付
        微商城数据统计显示顺序更正
        微商城支持商品预览
        微商城订单成功后，网页将收到新订单通知
        幸运机活动时间延长至三个月等6个改进及Bug.
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
        首创微信集商务、娱乐一体化多媒体智能终端机微美图打印机
        营销推广活动支持导入SN码
        微商城模板，支持分类列表.
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
        首创微信集商务、娱乐一体化多媒体智能终端机微美图打印机
        营销推广活动支持导入SN码
        微商城模板，支持分类列表.
        `,
      },
    ],
  },
])
</script>

<template>
  <div max-w-3xl my-0 ma>
    <pretty-timeline :timeline-data="timelineArr" />
  </div>
</template>
