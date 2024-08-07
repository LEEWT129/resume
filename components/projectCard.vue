<template>
  <div class="card-container">
    <div class="card" v-for="card in cards" :key="card.id">
      <div class="card-img">
        <img :src="card.imgSrc" alt="Card Image" class="img" />
      </div>
      <div class="card-body">
        <div class="card-title">{{ card.title }}</div>
        <div class="card-text">{{ card.text }}</div>
        <div class="card-btn">
          <a :href="card.link1" class="card-display" target="_blank">
            <i class="fa-solid fa-display"></i>
          </a>
          <a :href="card.link2" class="card-display" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define your card data
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
]);
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-wrap: wrap; // Allows cards to wrap to the next line
  gap: 1rem; // Adds space between cards
  justify-content: space-between; // Distributes space between cards
  .card {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    width: 180px;
    display: flex;
    flex-direction: column;

    .card-img {
      height: 100px;
      .img {
        width: 100%;
height: auto;
        display: block;
        object-fit: cover;
      }
    }

    .card-body {
      padding: 15px;
      display: flex;
      flex-direction: column;
      text-align: center;
      .card-title {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
        height: 50px;
      }

      .card-text {
        margin-bottom: 10px;
        color: #6c757d;
        font-size: 12px;
        height: 30px;
      }

      .card-btn {
        display: flex;
        justify-content: end;
        .card-display {
          margin: 0 5px;
          text-decoration: none;

          i {
            color: var(--secondary-color);
          }
        }
      }
    }
  }
}
</style>
