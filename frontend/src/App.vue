<template>
  <div id="app">
    <b-container>
      <b-row >
        <b-col>
          <b-card title="Status from Backend">
            <h1 class="mt-3">{{ status }}</h1>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      status: '',
    };
  },
  mounted() {
    this.checkBackendConnection();
  },
  methods: {
    async checkBackendConnection() {
      try {
        const response = await this.$axios.get(`${process.env.VUE_APP_BACKEND_URL}/`);
        this.status = response.data;
      } catch (error) {
        this.status = 'Disconnected from Backend';
      }
    },
  },
};
</script>

