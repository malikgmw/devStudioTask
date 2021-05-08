<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" ref="sidebar">
        <router-link :to="`/${$store.state.profile.role}`" class="sidebar-brand d-flex align-items-center justify-content-center">
            <div class="sidebar-brand-icon">
            <i class="fa fa-info-circle" style="font-size:48px;"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Developer<sup>Studio</sup></div>
        </router-link>

        <hr class="sidebar-divider my-0">

        <li class="nav-item">
            <router-link :to="`/${$store.state.profile.role}`" class="nav-link" exact>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Tasks</span>
            </router-link>
        </li>
        <hr class="sidebar-divider d-none d-md-block" />

        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0 mt-3" id="sidebarToggle" v-on:click="toggleSidebar"></button>
        </div>
    </ul>
</template>

<script>
export default {
  name: "Sidebar",
  mounted() {
    this.toggleSidebar();
  },
  methods: {
    toggleSidebar() {
      document
        .getElementsByTagName("body")[0]
        .classList.contains("sidebar-toggled")
        ? document
            .getElementsByTagName("body")[0]
            .classList.remove("sidebar-toggled")
        : document
            .getElementsByTagName("body")[0]
            .classList.add("sidebar-toggled");
      this.$refs.sidebar.classList.contains("toggled")
        ? this.$refs.sidebar.classList.remove("toggled")
        : this.$refs.sidebar.classList.add("toggled");3
    }
  }
};
 </script>
