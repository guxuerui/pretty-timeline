# [vue3-status-indicator](https://github.com/guxuerui/vue3-status-indicator)

这是一个Vue3版本的状态指示灯组件, 受项目[vue-status-indicator](https://github.com/coderdiaz/vue-status-indicator#readme) 的启发，使用`vue3 + Ts + vite`

## 安装

```sh
# Install with pnpm
$ pnpm i vue3-status-indicator -S
# or npm
$ npm i vue3-status-indicator -S
```

## 使用

### 1. Preview

[Please Look Here](https://www.guxuerui.cn/vue/statusIndicator)

### 2. 导入

- 使用**局部导入**:

```ts
// 在.vue文件中
<script setup lang="ts">
  import { Vue3StatusIndicator } from 'vue3-status-indicator'
  import 'vue3-status-indicator/dist/style.css'
</script>
```

- 使用**全局导入**

```ts
// 在main.ts中
import { Vue3StatusIndicator } from 'vue3-status-indicator'
import 'vue3-status-indicator/dist/style.css'

// 注册为全局组件使用
app.component('vue3-status-indicator', Vue3StatusIndicator);
```

### 3. 使用方式

- 方式一: 传入具体的色值

```html
primary: <Vue3StatusIndicator bg-color="#326CD6" />
success: <Vue3StatusIndicator bg-color="#4FAD59" />
error:   <Vue3StatusIndicator bg-color="#e4393c" />
warning: <Vue3StatusIndicator bg-color="orange" />
primary: <vue3-status-indicator bg-color="#326CD6" />
```

- 方式二: 使用默认的type

```html
primary: <Vue3StatusIndicator type="primary" />
success: <Vue3StatusIndicator type="success" />
error:   <Vue3StatusIndicator type="error" />
warning: <Vue3StatusIndicator type="warning" />
primary: <vue3-status-indicator type="primary" />
<!-- 停止呼吸动画, 设置pause属性为true -->
primary: <vue3-status-indicator type="primary" :pause="true" />
```

> Tips: 不建议两种方式同时使用, 否则会以传入的type为准

### 4. 兼容性

支持最新版本的 `Chrome/Firefox/Safari`

### 5. 属性/Props

|名称|描述|类型|默认|是否必须|
|---|---|---|---|---|
|type|默认提供的类型|String|""|false|
|bgColor|自定义色值|String|#326CD6|false|
|pause|是否停止呼吸动画|Boolean|false|false|

## License

[MIT license](https://github.com/guxuerui/vue3-status-indicator/blob/main/LICENSE)
