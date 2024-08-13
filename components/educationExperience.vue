<template>
  <div class="container">
    <div class="education">
      <h3 class="title">學歷</h3>
      <div class="education-content">
        <div class="education-item">
          <div>資策會-中區</div>
          <div>前端工程師</div>
          <div class="status">就業養成班</div>
          <div>2023/05~2023/10</div>
        </div>
        <div class="education-item">
          <div>國立臺中科技大學</div>
          <div>企業管理系</div>
          <div class="status">二技畢業</div>
          <div>2018/09~2020/06</div>
        </div>
        <div class="education-item">
          <div>國立臺中科技大學</div>
          <div>國際貿易與經營科</div>
          <div class="status">五專畢業</div>
          <div>2013/09~2018/06</div>
        </div>
      </div>
    </div>
    <div class="experience">
      <h3 class="title">經歷</h3>
      <div class="experience-content">
        <div class="experience-item">
          <div>公司名暫不公開</div>
          <div>前端工程師</div>
          <div>2023/12~仍在職</div>
        </div>
        <div class="experience-item">
          <div>台中商業銀行股份有限公司</div>
          <div>人力資源人員</div>
          <div>2022/03~2023/04</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .education {
    padding: 10px;
    .title {
      border-bottom: 2px solid var(--secondary-color);
      padding-bottom: 10px;
    }
    .education-content {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .education-item {
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr 1fr;
        gap: 10px;

        div {
          text-align: center;
        }
      }
    }
  }

  .experience {
    padding: 10px;
    .title {
      border-bottom: 2px solid var(--secondary-color);
      padding-bottom: 10px;
    }
    .experience-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .experience-item {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
      }
      div {
        text-align: center;
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    .education {
      .education-content {
        .education-item {
          grid-template-columns: 1fr 1fr 1fr;
          .status {
            display: none;
          }
        }
      }
    }
  }
}
</style>
