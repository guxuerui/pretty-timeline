<script setup lang="ts">
import type { ITimeline } from '~/types'

interface IPrettyTimeline {
  baseColor?: string
  timelineData: ITimeline[]
}

const props = withDefaults(defineProps<IPrettyTimeline>(), {
  baseColor: '#58a6fb',
  timelineData: () => [
    {
      isCollapsed: false,
      year: '2022年',
      title: '',
      list: [
        {
          date: '',
          iconColor: '#ec6a4f',
          iconRight: '9%',
          iconTop: '0%',
          chipColor: '#26C1C9',
          chipText: '',
          subTitleColor: '#ec6a13',
          subTitle: '',
          imgUrl: '',
          content: '',
        },
      ],
    },
  ],
})

const timelineArr = ref<ITimeline[]>([])
watchEffect(() => {
  timelineArr.value = props.timelineData
})

const collapseLine = (index: number) => {
  timelineArr.value[index].isCollapsed = !timelineArr.value[index].isCollapsed
}

onMounted(() => {
  setTimeout(() => {
    const domList = document.querySelectorAll('div.list')
    domList.forEach((dom: any) => {
      dom.style.height = `${dom.offsetHeight}px`
    })
  }, 500)
})
</script>

<template>
  <div class="wrapper">
    <div class="timeline">
      <div
        v-for="timeline, index in timelineArr"
        :key="index"
        class="year"
        :class="{ close: timeline.isCollapsed }"
      >
        <div class="list-item">
          <div class="text-2xl text-center cursor-pointer" :style="{ color: baseColor }" @click="collapseLine(index)">
            <a>{{ timeline.year }}</a>
            <i class="mx-3" />
          </div>
          <div class="text-2xl" :style="{ color: baseColor }">
            {{ timeline.title }}
          </div>
        </div>
        <div class="list">
          <div
            v-for="item, i in timeline.list" :key="item.date + i"
            class="list-item mt-6"
          >
            <div class="text-2xl text-center position-relative mb-3">
              <div>{{ item.date }}</div>
              <svg
                class="position-absolute"
                :style="{ color: item.iconColor, right: item.iconRight || '8%', top: item.iconTop || '0%' }"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <circle cx="16" cy="16" r="10" fill="currentColor" />
                <path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z" />
              </svg>
            </div>
            <div>
              <p class="list-subtitle">
                <span
                  v-if="item.chipText"
                  class="chip"
                  :style="{ background: item.chipColor }"
                >
                  {{ item.chipText }}
                </span>
                <span :style="{ color: item.subTitleColor }">{{ item.subTitle }}</span>
              </p>
              <img v-if="item.imgUrl" class="list-image" :src="item.imgUrl">
              <p v-html="item.content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    width: 100%;
    min-height: 64rem;
  }
  .text-center {
    text-align: center;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .timeline {
    background: url(../../src/assets/line-bg.png) repeat-y 23% 0;
  }
  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .mx-3 {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }
  .mt-6 {
    margin-top: 1.5rem;
  }
  .position-relative {
    position: relative;
  }
  .position-absolute {
    position: absolute;
  }
  .chip {
    padding: 0.25rem 1rem;
    margin-right: 1rem;
    color: #fff;
    border-radius: 1.5rem;
  }
  .list-image {
    margin: 1.25rem 0;
    border-radius: 0.5rem;
  }
  .list-subtitle {
    margin-bottom: 0.75rem;
    margin-top: 0.25rem;
  }
  .list-item i {
    display: inline-block;
    height: 0;
    width: 0;
    border-width: 6px;
    border-style: solid;
    border-color: v-bind('baseColor') transparent transparent transparent;
    -webkit-transition: .5s;
    -moz-transition: .5s;
    -ms-transition: .5s;
    -o-transition: .5s;
    transition: .5s;
    -webkit-transform-origin: 6px 3px;
    -moz-transform-origin: 6px 3px;
    -ms-transform-origin: 6px 3px;
    -o-transform-origin: 6px 3px;
    transform-origin: 6px 3px
  }
  .year .list {
    margin: 10px 0;
    position: relative;
    overflow: hidden;
    -webkit-transition: height 1s cubic-bezier(0.025,0.025,0.000,1.115), opacity 1s;
    -moz-transition: height 1s cubic-bezier(0.025,0.025,0.000,1.115), opacity 1s;
    -ms-transition: height 1s cubic-bezier(0.025,0.025,0.000,1.115), opacity 1s;
    -o-transition: height 1s cubic-bezier(0.025,0.025,0.000,1.115), opacity 1s;
    transition: height 1s cubic-bezier(0.025,0.025,0.000,1.115), opacity 1s;
  }
  .list-item {
    display: grid;
    grid-template-columns: 27% 73%;
  }
  .year.close .list-item i {
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg)
  }
  .timeline .year.close .list {
    opacity: 0;
    height: 0!important;
  }
</style>
