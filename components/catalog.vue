<template>
  <div class="container">
    <div class="catalog-btn">
      <button
        v-for="button in buttons"
        :key="button.key"
        @click="handleClick(button.key)"
        :class="{ active: activeKey === button.key }"
      >
        {{ button.text }}
      </button>
    </div>
    <div class="content">
      <EducationExperience v-if="activeKey === 'experience'" />
      <Skills v-if="activeKey === 'skills'" />
      <Projects v-if="activeKey === 'projects'" />
    </div>
  </div>
</template>

<script setup>
const buttons = [
  { text: "學經歷", key: "experience" },
  { text: "技能", key: "skills" },
  { text: "作品", key: "projects" },
];

const activeKey = ref("experience");

const handleClick = (key) => {
  activeKey.value = key;
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .catalog-btn {
    display: flex;
    margin: 30px;
    position: relative;

    button {
      letter-spacing: 5px;
      width: 120px;
      height: 50px;
      margin: 10px;
      border: none;
      border-radius: 10px;
      font-size: 20px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      cursor: pointer;
      position: relative;
      
      &.active::after {
        content: "";
        position: absolute;
        bottom: -10px;;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: var(--accent-color); 
        border-radius: 2px; 
      }

      &:hover {
        font-weight: 800;
        font-size: 24px;
        background-color: var(--accent-color);
        color: var(--primary-color);
      }
    }
  }
}
</style>