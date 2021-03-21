<template>
  <div class="wrapper__content wrapper__content_fixed">
    <header-main />
    <section class="section">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <div class="information">
          <div class="information__wrapper-images">
            <img
              class="information__image"
              src="/images/intro.jpg"
              alt="New collection"
            />
            <img
              class="information__image information__image_title"
              src="/images/title.png"
              alt="Info"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import headerMain from '@/components/HeaderMain.vue';

export default {
  name: 'home',
  components: { headerMain },
  data() {
    return {
      title: 'online store sneakers',
    };
  },
};
</script>

<style lang="scss" >
.information {
  position: relative;

  &__image {
    &_title {
      position: absolute;
      top: 10px;
      left: 10px;
      max-width: 40%;
    }
  }
}
</style>
