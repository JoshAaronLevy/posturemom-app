<template>
  <div>
    <div class="wrapper wrapper-full-page">
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute">
        <div class="container">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="#pablo">PostureMom</a>
            <button class="navbar-toggler"
                    type="button"
                    @click="showMenu = !showMenu"
                    data-toggle="collapse"
                    aria-controls="navigation-index"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
              <span class="navbar-toggler-bar burger-lines"></span>
              <span class="navbar-toggler-bar burger-lines"></span>
              <span class="navbar-toggler-bar burger-lines"></span>
            </button>
          </div>
          <el-collapse-transition>
            <div class="navbar-collapse justify-content-end" id="navbar" v-show="showMenu">
              <ul class="navbar-nav">
                <router-link to="/admin" tag="li" class="nav-item">
                  <a class="nav-link">
                    <i class="nc-icon nc-chart-pie-35"></i> Dashboard
                  </a>
                </router-link>
                <router-link to="/register" tag="li" class="nav-item">
                  <a class="nav-link">
                    <i class="nc-icon nc-badge"></i> Register
                  </a>
                </router-link>
                <router-link to="/login" tag="li" class="nav-item">
                  <a class="nav-link">
                    <i class="nc-icon nc-mobile"></i> Login
                  </a>
                </router-link>
              </ul>
            </div>
          </el-collapse-transition>
        </div>
      </nav>
      <div class="full-page" :data-color="backgroundColor" :class="pageClass">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple | black" -->
        <div class="content">
          <div class="container">
            <slot></slot>
          </div>
        </div>
        <div class="full-page-background" style="background-color: #222;"></div>
        </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <router-link to="/register" tag="li">
          <a>Register</a>
        </router-link>
        <router-link to="/admin/overview" tag="li">
          <a>Dashboard</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

export default {
  components: {
    [CollapseTransition.name]: CollapseTransition
  },
  props: {
    pageClass: {
      type: String,
      default: 'login-page'
    },
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle('nav-open');
    },
    closeMenu() {
      document.body.classList.remove('nav-open');
      document.body.classList.remove('off-canvas-sidebar');
    }
  },
  beforeDestroy() {
    this.closeMenu();
  }
};
</script>
<style>
.navbar-nav .nav-item p {
  line-height: inherit;
  margin-left: 5px;
}
.navbar-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.wrapper-full-page .navbar-toggler,
.wrapper-full-page .navbar-collapse .navbar-nav {
  margin-right: 30px;
}
.navbar-collapse .navbar-nav .nav-link {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
