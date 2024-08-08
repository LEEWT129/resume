<template>
    <div class="card-container">
        <ProjectCard v-for="card in cards" :key="card.id" :card="card" />
    </div>
</template>

<script setup>

const cards = ref([
  {
    id: 1,
    imgSrc: "/images/todolist.png",
    title: "Angular練習TodoList",
    text: "可以新增項目，刪除，已完成，重新執行",
    link1: "https://todo-list-jade-eta.vercel.app/",
    link2: "https://github.com/LEEWT129/todoList",
  },
  {
    id: 2,
    imgSrc: "/images/resume.png",
    title: "NUXT3履歷",
    text: "運用NUXT3製作履歷介面",
    link1: "https://resume-nine-phi.vercel.app/",
    link2: "https://github.com/LEEWT129/resume",
  },
  {
    id: 3,
    imgSrc: "/images/chandelier.png",
    title: "HTML、CSS吊燈動畫",
    text: "運用CSS簡易撰寫吊燈移動軌跡",
    link1: "https://leewt129.github.io/chandelier/",
    link2: "https://github.com/LEEWT129/chandelier",
  },
  {
    id: 4,
    imgSrc: "/images/Beauty_Studio.png",
    title: "Bootstrap美容工作室",
    text: "運用的Bootstrap製作切版(前端課程第三週的作品)",
    link1: "https://leewt129.github.io/Beauty_Studio/index.html",
    link2: "https://github.com/LEEWT129/Beauty_Studio",
  },
  {
    id: 5,
    imgSrc: "/images/ball-games.png",
    title: "Vue.js單頁式球類介紹",
    text: "運用的Vue.js製作單頁簡單的球類介紹，加上一些動畫效果",
    link1: "https://ball-games.vercel.app/",
    link2: "https://github.com/LEEWT129/ball-games",
  },
  {
    id: 6,
    imgSrc: "/images/card.png",
    title: "個人簡介卡片",
    text: "運用的HTML、CSS、JS製作簡介卡片",
    link1: "https://leewt129.github.io/card/",
    link2: "https://github.com/LEEWT129/card",
  },
  {
    id: 7,
    imgSrc: "/images/comesee.png",
    title: "React.js電影線上購票平台",
    text: "運用的React.js製作電影線上購票平台(前端課程結業專題)",
    link1: "https://github.com/LEEWT129/comesee",
    link2: "https://github.com/LEEWT129/comesee",
  },
  {
    id: 8,
    imgSrc: "/images/book.png",
    title: "書城首頁純切版",
    text: "運用的HTML、CSS、JS製作書城首頁(未完成)",
    link1: "https://leewt129.github.io/bookstore/",
    link2: "https://github.com/LEEWT129/bookstore",
  },
  {
    id: 9,
    imgSrc: "/images/ParallaxScrolling.png",
    title: "ParallaxScrolling練習",
    text: "運用的HTML、CSS、JS製作ParallaxScrolling效果",
    link1: "https://leewt129.github.io/ParallaxScrolling/",
    link2: "https://github.com/LEEWT129/ParallaxScrolling",
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