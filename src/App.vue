<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="center">{{ week }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-expansion-panel v-model="panel" expand>
        <v-expansion-panel-content v-for="(value, time) in today" :key="time">
          <template v-slot:header>
            <div>{{ time }}</div>
          </template>
          <v-card>
            <v-list>
              <template v-for="(menus, type, index) in value">
                <v-list-tile :key="`${type}_list-tile`">
                  <v-list-tile-content>
                    <v-list-tile-title>{{menus | join}}</v-list-tile-title>
                    <v-list-tile-sub-title v-text="type" />
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider v-if="index < calcEnd(value)" :key="`${type}_divider`" />
              </template>
            </v-list>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-content>
    <v-bottom-nav :active.sync="time" :value="true" absolute color="transparent">
      <v-btn color="teal" flat value="점심">
        <span>점심</span>
        <v-icon>fastfood</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="저녁">
        <span>저녁</span>
        <v-icon>restaurant</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
        week: '월요일',
		time: '점심',
		timeKey: {점심: [true, false], 저녁: [false, true]},
        panel: [true, false],
        // total: {},
        today: {
            점심: {
                양식: ['등심돈가스(pork)/스프', '양배추샐러드', '단무지/김치'],
                정식: ['에그스크램블볶음밥', '무된장국', '별미떡볶음', '김치'],
                특식: [
                    '보리밥',
                    '돼지갈비찜(pork)',
                    '무된장국',
                    '편마늘멸치볶음',
                    '브로콜리맛살무침',
                    '김치'
                ]
			},
			저녁: {
                정식: [
                    '쌀밥',
                    '어묵탕',
                    '쇠고기야채볶음(beef)',
                    '톳무침',
                    '김치'
                ]
            }
        }
    }),
	// created() {},
	watch: {
		time(newV) {
			this.panel = this.timeKey[newV]
		}
	},
    filters: {
        join: arr => arr.join(' ').replace(/\(.+\)/, '')
    },
    methods: {
        calcEnd: obj => Object.keys(obj).length - 1
    }
};
</script>

<style scoped>
.center {
    margin: 0 auto;
}

.v-bottom-nav {
    justify-content: space-between;
}
</style>

