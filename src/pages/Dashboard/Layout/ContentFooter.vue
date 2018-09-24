<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{path:'/admin'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; 2018 - PostureMom, Inc.
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
</style>
