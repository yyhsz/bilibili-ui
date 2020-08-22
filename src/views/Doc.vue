<template>
  <div>
    <top-nav></top-nav>
    <div class="content">
      <aside v-if="showMenu">
        <ol>
          <li>
            <!--<router-link :to="{name:'switch'}">switch</router-link>-->
            <router-link to="/doc/switch">switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/content/TopNav.vue";


import { inject, Ref } from "vue";
import router from '../router';


export default {
  name: "Doc",
  components: {
    TopNav,
  },
  setup() {
    const showMenu = inject<Ref<boolean>>("showMenu");
   
    return {
      showMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
aside {
  background: rgb(169, 241, 162);
  width: 150px;
  padding: 16px;
  

  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>