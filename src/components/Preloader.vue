<template>
  <div class="preloader">
    <div class="preloader__icon"></div>
    <span id="by">Loading products...</span>
  </div>
</template>

<script>
export default {
  name: 'preloader',
};
</script>

<style lang="scss" scoped>
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  &__icon {
    width: 80px;
    height: 80px;
    background: blue;
    border-radius: 10px;
    transition: all 5s;
    animation: loader 2s linear infinite;
  }
}

#by {
  font-family: 'Arima Madurai', cursive;
  color: #4a676a;
  font-size: 12px;

  @media (min-width: 480px) {
    font-size: 16px;
  }
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: rotateX(0deg) rotateY(180deg);
    opacity: 0.6;
  }
  100% {
    transform: rotateX(180deg) rotateY(180deg);
    opacity: 1;
  }
}
</style>
