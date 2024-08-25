<template>
    <div class="card-container">
        <ProjectCard v-for="card in cards" :key="card.id" :card="card" />
    </div>
</template>

<script setup>

const cards = ref([
  {
    id:'resume',
    imgSrc: "/images/resume.png",
    title: "履歷",
    text: "NUXT3製作履歷介面，RWD",
    link1: "https://resume-nine-phi.vercel.app/",
    link2: "https://github.com/LEEWT129/resume",
  },
  {
    id: 'todoList',
    imgSrc: "/images/todoList.png",
    title: "TodoList",
    text: "運用Vue撰寫，將資料存在localStorage",
    link1: "https://vue-todo-list-sigma.vercel.app/",
    link2: "https://github.com/LEEWT129/VueTodoList",
  },
  {
    id: 'Beauty',
    imgSrc: "/images/Beauty_Studio.png",
    title: "美容工作室",
    text: "Bootstrap製作切版(前端課程第三週的作品)",
    link1: "https://leewt129.github.io/Beauty_Studio/index.html",
    link2: "https://github.com/LEEWT129/Beauty_Studio",
  },
  {
    id: 'comesee',
    imgSrc: "/images/comesee.png",
    title: "電影線上購票",
    text: "React.js製作電影線上購票平台(前端課程結業專題)",
    link1: "https://github.com/LEEWT129/comesee",
    link2: "https://github.com/LEEWT129/comesee",
  },
  {
    id: 'mingtie',
    imgSrc: "/images/mingtie.png",
    title: "公司專案-名帖(電子名片)",
    text: "前端獨立開發，使用者前後台，RWD (3個月開發)",
    link1: "https://mingtie.lale.im/_mingtie/",
  },
]);
</script>


<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: 10px; 

}
</style>