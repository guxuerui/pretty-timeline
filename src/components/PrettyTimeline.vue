<script setup lang="ts">
import type { ITimeline } from '~/types'

interface Props {
  timelineData: ITimeline[]
}

const props = withDefaults(defineProps<Props>(), {
  timelineData: () => [
    {
      isCollapsed: false,
      year: '2022年',
      title: '光阴长河',
      list: [
        {
          date: '',
          iconColor: '#ec6a4f',
          iconRight: '7%',
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
  timelineArr.value = props.timelineData.slice()
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
  <div w-full min-h-5xl class="wrapper">
    <div class="timeline">
      <div
        v-for="timeline, index in timelineArr"
        :key="index"
        class="year"
        :class="{ close: timeline.isCollapsed }"
      >
        <div class="list-item">
          <div text="#58a6fb 2xl center" cursor="pointer" @click="collapseLine(index)">
            <a>{{ timeline.year }}</a>
            <i mx-3 />
          </div>
          <div text="#58a6fb 2xl">
            {{ timeline.title }}
          </div>
        </div>
        <div class="list">
          <div
            v-for="item, i in timeline.list" :key="item.date + i"
            class="list-item mt-6"
            text="xl"
          >
            <div text="center 2xl" position="relative">
              <div>{{ item.date }}</div>
              <div
                i-carbon-circle-filled
                text-2xl
                position="absolute"
                :style="{ color: item.iconColor, right: item.iconRight, top: item.iconTop }"
              />
            </div>
            <div>
              <p mb-3>
                <span
                  v-if="item.chipText"
                  border="rounded-6"
                  text="white"
                  px-4 py-1 mr-4
                  :style="{ background: item.chipColor }"
                >
                  {{ item.chipText }}
                </span>
                <span :style="{ color: item.subTitleColor }">{{ item.subTitle }}</span>
              </p>
              <img v-if="item.imgUrl" my-5 border="rounded-2" :src="item.imgUrl">
              <p v-html="item.content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .timeline {
    background: url("/images/line-bg.png") repeat-y 23% 0;
  }
  .list-item i {
    display: inline-block;
    height: 0;
    width: 0;
    border-width: 6px;
    border-style: solid;
    border-color: #58a6fb transparent transparent transparent;
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
