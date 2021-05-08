<template>
        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>



          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">


            <div class="topbar-divider d-none d-sm-block"></div>

            <li class="nav-item dropdown no-arrow">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span v-show="$store.state.isLoggedIn" class="mr-2 d-none d-lg-inline text-gray-600 small">{{$store.state.profile.first_name+' '+$store.state.profile.last_name}}</span>
                    <span v-if="$store.state.isLoggedIn">
                        <img v-if="$store.state.profile.photo" :src="`${$store.state.serverPath}storage/${$store.state.profile.photo}`" :alt="$store.state.profile.first_name+' '+$store.state.profile.last_name" class="img-35-cover" />
                        <avatar v-else
                        :username="$store.state.profile.first_name+' '+$store.state.profile.last_name"
                        :size="35"
                        ></avatar>
                    </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown">
                    <!-- <router-link to="/doctor/profile" class="dropdown-item">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile Setting
                    </router-link> -->
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item" v-on:click="logout">
                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </button>
                </div>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->
</template>

<script>
    import * as authService from "../../services/auth_service";
    import Avatar from 'vue-avatar';
    export default {
        name: "navbar",
        components: {
            Avatar
        },
        data() {
            return {
                loaded: false
            };
        },
        mounted() {
            if (!this.$store.state.isLoading) {
                setTimeout(() => {
                    this.loaded = true;
                }, 1000);
            }
        },
        methods: {
            logout: function() {
                try {
                    authService.logout();
                    this.$store.dispatch('authenticate', {});
                    this.$router.push('/');
                } catch (error) {}
            },
            toggleSidebar() {
                document.getElementsByTagName('body')[0].classList.contains('sidebar-toggled') ? document.getElementsByTagName('body')[0].classList.remove('sidebar-toggled') : document.getElementsByTagName('body')[0].classList.add('sidebar-toggled');
                document.getElementById('accordionSidebar').classList.contains('toggled') ? document.getElementById('accordionSidebar').classList.remove('toggled') : document.getElementById('accordionSidebar').classList.add('toggled');
            }
        }
    };
</script>

