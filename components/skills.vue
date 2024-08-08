<template>
  <div class="skills-container">
    <div class="skill-section-container">
      <div class="section-title"><h3>前端</h3></div>
      <div class="skill-section">
        <ul>
          <li v-for="skill in FrontEndSkillsList" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
    <div class="skill-section-container">
      <div class="section-title"><h3>後端</h3></div>
      <div class="skill-section">
        <ul>
          <li v-for="skill in BackEndSkillsList" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
    <div class="skill-section-container">
      <div class="section-title"><h3>工具</h3></div>
      <div class="skill-section">
        <ul>
          <li v-for="skill in Tools" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const FrontEndSkillsList = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "Vue.js",
  "Nuxt.js",
  "React.js",
  "Angular",
  "Bootstrap",
  "Tailwind CSS",
  "Axios",
  "RWD",
];
const BackEndSkillsList = ["Node.js", "MySQL", "PHP"];
const Tools = ["Git 版控", "Docker 部署", "Photoshop", "Figma"];
</script>

<style lang="scss" scoped>
.skills-container {
  display: flex;
  gap: 20px;

  .skill-section {
    flex: 1;
    display: flex;
    align-items: center;
    border: 2px solid var(--secondary-color);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 200px;
    ul {
      width: 100%;
      li {
        line-height: 24px;
      }
    }
  }

  .section-title {
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
