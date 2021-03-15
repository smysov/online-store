<template>
  <div class="wrapper">
    <!--Headre-->
    <header class="header">
      <div class="navbar">
        <div class="container">
          <div class="navbar__content">
            <router-link class="navbar__logo" :to="linkHome.url">{{
              linkHome.name
            }}</router-link>
            <ul class="navbar__list">
              <li v-for="(link, index) of links" class="navbar__item" :key="index">
                <router-link :to="link.url" class="navbar__link link">{{
                  link.name
                }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      linkHome: {
        name: 'online store',
        url: '/',
      },
      links: [
        {
          name: 'Home',
          url: '/',
        },
        {
          name: 'Shop',
          url: '/shop',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.navbar__logo {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  color: #2929bb;

  transition: 0.3s linear all;

  &:hover {
    transform: scale(0.95);
    color: cornflowerblue;
  }

  @media screen and (min-width: 480px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 968px) {
    font-size: 24px;
  }
}

.navbar__link {
  font-weight: 700;
  transition: 0.3s all;

  &:hover {
    opacity: 0.8;
  }

  &.router-link-exact-active {
    position: relative;
    color: #2929bb;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: #2929bb;
    }
  }
}
</style>
