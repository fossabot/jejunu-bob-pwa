<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" icon>
        <v-icon color="grey darken-2">info</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>오픈소스 라이선스</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list three-line subheader>
        <!-- <v-subheader>User Controls</v-subheader> -->
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>vue</v-list-tile-title>
            <v-list-tile-sub-title>
              <a target="_blank" href="https://vuejs.org/">https://vuejs.org/</a>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>vuetify</v-list-tile-title>
            <v-list-tile-sub-title>
              <a target="_blank" href="https://vuetifyjs.com">https://vuetifyjs.com</a>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>axios</v-list-tile-title>
            <v-list-tile-sub-title>
              <a
                target="_blank"
                href="https://github.com/axios/axios"
              >https://github.com/axios/axios</a>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>register-service-worker</v-list-tile-title>
            <v-list-tile-sub-title>
              <a
                target="_blank"
                href="https://github.com/yyx990803/register-service-worker"
              >https://github.com/yyx990803/register-service-worker</a>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: 'OpenSourceLicense',
    data: () => ({
        dialog: false
    })
}
</script>

