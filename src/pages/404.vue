<template>
  <div class="error">
    <div class="error__wrapper">
      <p class="error__message">error</p>
      <h1 class="error__number">404</h1>
    </div>
    <p class="error__home"
      >Page not found, want to go to<br />
      <router-link :to="linkHome.url">{{ linkHome.name }}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkHome: {
        name: 'main page',
        url: '/',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.error {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0a7189;
  color: #f0f0f0;
  text-transform: uppercase;

  &__wrapper {
    position: relative;
    margin-bottom: 20px;
    text-shadow: 0px 3px 0px #7f8c8d;

    @media (min-width: 480px) {
      margin-bottom: 0;
    }
  }

  &__message {
    font-size: 1em;
    position: absolute;
    transform: rotate(-55deg);
    top: 28%;
    left: -12%;

    @media (min-width: 480px) {
      font-size: 1.3em;
    }

    @media (min-width: 768px) {
      font-size: 1.6em;
      top: 29%;
      left: -11%;
    }
  }

  &__number {
    font-size: 6em;

    @media (min-width: 480px) {
      font-size: 8em;
    }

    @media (min-width: 768px) {
      font-size: 10em;
    }
  }

  &__home {
    font-size: 16px;
    text-align: center;

    @media (min-width: 480px) {
      font-size: 18px;
    }

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  .router-link-active {
    font-weight: 700;
    color: #bcff57;
    letter-spacing: 1.2px;
    transition: 0.5s linear;

    &:hover {
      color: #f6f63b;
    }

    @media (min-width: 768px) {
      margin-left: 5px;
      font-size: 22px;
    }
  }
}

br {
  @media (min-width: 768px) {
    display: none;
  }
}
</style>
