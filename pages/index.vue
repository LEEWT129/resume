<template>
  <div class="container">
    <div class="resume">
      <div class="my-image"><img src="/images/picture.jpg" alt="" /></div>
      <div class="detail">
        <div><i class="fa-regular fa-user"></i>李偉婷</div>
        <div><i class="fa-regular fa-calendar"></i>1998-01-29</div>
        <div>
          <a href="tel:0958654598">
            <i class="fa-solid fa-phone"></i>0958654598
          </a>
        </div>
        <div>
          <a href="mailto:t0958654598@gmail.com">
            <i class="fa-regular fa-envelope"></i>t0958654598@gmail.com
          </a>
        </div>
        <div>
          <a href="https://github.com/LEEWT129?tab=repositories">
            <i class="fa-brands fa-github"></i>LEEWT129
          </a>
        </div>
      </div>
    </div>
    <div class="summary">
      我是李偉婷，擁有積極學習態度、優秀邏輯思維和出色人際溝通能力。
      對於網頁撰寫有極大興趣~
    </div>
    <catalog></catalog>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin:30px;
  .resume {
    display: flex;
    .my-image {
      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border: 8px solid var(--accent-color);
        border-radius: 50%;
      }
    }
    .detail {
      margin-left: 20px;
      font-size: 18px;
      letter-spacing: 2px;
      color: var(--secondary-color);
      div {
        margin-top: 20px;
      }
      i {
        margin-right: 10px;
      }
      a {
        text-decoration: none;
        color: var(--secondary-color);
      }
    }

}
.summary {
    color: var(--secondary-color);
    margin: 20px 0;
}
}
</style>
