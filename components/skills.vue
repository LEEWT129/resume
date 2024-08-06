<template>
    <div class="skills-container">
        <div class="skill-section">
          <div class="section-title">前端</div>
      </div>
      <div class="skill-section">
        <div class="section-title">後端</div>
      </div>
      <div class="skill-section">
        <div class="section-title">工具</div>
      </div>
    </div>
  </template>

<style lang="scss" scoped>
.skills-container {
  display: flex;
  gap: 20px;
  padding: 20px;

  .skill-section {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
    border: 2px solid var(--secondary-color);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 200px;
  }

  .section-title {
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>