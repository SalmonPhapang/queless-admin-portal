<template>
  <v-app id="home">
    <v-content>
    <v-app-bar app>
      Queless Dashboard
    </v-app-bar>
    <v-navigation-drawer
        color="#09151E"
        permanent
        app>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-subheader class="title" style="color:white;font-size: 22px">Management</v-subheader>
        <v-list-item-group
            color="#008000">
          <!--          <v-list-item class="px-2">-->
          <!--            <v-list-item-avatar>-->
          <!--              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>-->
          <!--            </v-list-item-avatar>-->
          <!--          </v-list-item>-->
          <v-list-item link href="/clients">
            <v-list-item-icon>
              <v-icon color="white" small>fas fa-users</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="color: white;font-size: 15px;text-align: left">Clients</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link href="/clients">
            <v-list-item-icon>
              <v-icon color="white" small>fa fa-user-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="color: white;font-size: 15px;text-align: left">Users</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link href="#">
            <v-list-item-icon>
              <v-icon color ="white" small>fas fa-shopping-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="color: white;font-size: 15px;text-align: left">Orders</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
      <v-container fluid>
    <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator';
import ClientComponent from '@/components/client/ClientMain.vue';

@Component({
  components: {
    ClientComponent,
  },
})
export default class Home extends Vue {

}
</script>
