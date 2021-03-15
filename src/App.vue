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
  transition: 0.5s all;
  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
    color: #6a6af5;
    transform: translateY(-1px);
  }

  &.router-link-exact-active {
    position: relative;
    color: #2929bb;
  }
}
</style>
