<template lang="html">
  <div id="bookingsList">
    <div class="booking" v-for="booking in bookings">
      <h2>{{ booking.name }}</h2>
      <p>{{ booking.email }}</p>
      <p>Customer checked in? {{ booking.status }}</p>
      <label for="status">Checked in? {{ booking.status }}</label>
      <input v-on:change="handleCheckInChange(booking._id, booking.status)" type="checkbox" id="status" v-model="booking.status"></br></br>
      <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import BookingService from '../services/BookingService'
export default {
  name: "BookingsList",
  props: ['bookings'],

methods: {
  handleDelete(id){
    BookingService.deleteBooking(id)
    .then(response => {
      eventBus.$emit('refresh-data');
    });
  },
  handleCheckInChange(id, status){
    const payload = {
      status: status
    };
    BookingService.putBooking(id, payload)
    .then(response => {
      eventBus.$emit('refresh-data');
    })
  }
}}
</script>

<style lang="css" scoped>
#bookingsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}

.booking {
  background-color: white;
  margin: 20pt;
  padding: 20pt;
  border: 1px solid black;
  border-radius: 20px;
}



</style>
