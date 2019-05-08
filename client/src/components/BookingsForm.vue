<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div class="formWrap">
      <label for="email">Email Address:</label>
      <input type="text" id="email" v-model="email" required>
    </div>
    <div class="formWrap">
      <label for="status">Checked in? </label>
      <input type="checkbox" id="status" v-model="status">
    </div>

    <input type="submit" value="Save" id="save"/>
  </form>
</template>

<script>
import {eventBus} from '../main';
import BookingService from '../services/BookingService.js';

export default {
  name: "BookingsForm",
  data(){
    return {
      name: "",
      email: "",
      status: false
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        status: this.status
      };
      BookingService.postBooking(payload)
      .then(response => {
        eventBus.$emit('refresh-data');
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
