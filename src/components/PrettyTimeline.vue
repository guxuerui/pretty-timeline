<script setup lang="ts">
interface IList {
  date: string
  iconColor?: string
  iconRight?: string
  iconTop?: string
  chipColor?: string
  chipText?: string
  subTitleColor?: string
  subTitle: string
  imgUrl?: string
  content: string
}

interface ITimeline {
  isCollapsed: boolean
  year: string
  title: string
  list: IList[]
}

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

// 判断是否为移动端
const ifMobile = isMobile()

// icon position
const iconStyle = (item: any) => {
  if (ifMobile.value) {
    return {
      color: item.iconColor || '#ec6a4f',
      right: item.iconRight || '100%',
      top: item.iconTop || '0%',
    }
  }
  else {
    return {
      color: item.iconColor || '#ec6a4f',
      right: item.iconRight || '8%',
      top: item.iconTop || '0%',
    }
  }
}

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
    <div :class="ifMobile ? mobile.timeline : web.timeline">
      <div
        v-for="timeline, index in timelineArr"
        :key="index"
        :class="{ close: timeline.isCollapsed }"
      >
        <div :class="ifMobile ? mobile.listItem : web.listItem">
          <div class="text-2xl text-center cursor-pointer" :style="{ color: baseColor }" @click="collapseLine(index)">
            <a>{{ timeline.year }}</a>
            <i class="mx-3 triangle" />
          </div>
          <div class="text-2xl" :style="{ color: baseColor }">
            {{ timeline.title }}
          </div>
        </div>
        <div class="list">
          <div
            v-for="item, i in timeline.list" :key="item.date + i"
            class="mt-6"
            :class="ifMobile ? mobile.lineItem : web.listItem"
          >
            <div class="text-2xl text-center position-relative mb-3">
              <div v-if="!ifMobile">
                {{ item.date }}
              </div>
              <svg
                class="position-absolute"
                :style="iconStyle(item)"
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
                  :style="{ background: item.chipColor || '#26c1c9' }"
                >
                  {{ item.chipText }}
                </span>
                <span :style="{ color: item.subTitleColor || '#ec6a13' }">{{ item.subTitle }}</span>
              </p>
              <div v-if="ifMobile" :style="{ color: item.subTitleColor || '#ec6a13' }">
                {{ item.date }}
              </div>
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
  .list {
    margin: 10px 0;
    position: relative;
    overflow: hidden;
    -webkit-transition: height 1s cubic-bezier(0.025,0.025,0.000,1.115), opacity 1s;
    -moz-transition: height 1s cubic-bezier(0.025,0.025,0.000,1.115), opacity 1s;
    -ms-transition: height 1s cubic-bezier(0.025,0.025,0.000,1.115), opacity 1s;
    -o-transition: height 1s cubic-bezier(0.025,0.025,0.000,1.115), opacity 1s;
    transition: height 1s cubic-bezier(0.025,0.025,0.000,1.115), opacity 1s;
  }
  .triangle {
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
  .close .triangle {
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg)
  }
  .close .list {
    opacity: 0;
    height: 0!important;
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
  .text-center {
    text-align: center;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .list-subtitle {
    margin-bottom: 0.75rem;
    margin-top: 0.25rem;
  }
  .list-image {
    margin: 1.25rem 0;
    border-radius: 0.5rem;
  }
  .chip {
    padding: 0.25rem 1rem;
    margin-right: 1rem;
    color: #fff;
    border-radius: 1.5rem;
  }
</style>

<style module="web">
  .timeline {
    background: url(../../src/assets/line-bg.png) repeat-y 23% 0;
  }
  .listItem {
    display: grid;
    grid-template-columns: 27% 73%;
  }
</style>

<style module="mobile">
  .timeline {
    background: url(../../src/assets/line-bg.png) repeat-y 5% 0;
  }
  .listItem {
    padding-left: 30px;
    display: grid;
    grid-template-columns: 40% 60%;
  }
  .lineItem {
    padding-left: 30px;
    display: grid;
    grid-template-columns: 5% 95%;
  }
</style>
