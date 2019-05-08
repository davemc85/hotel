<template>
 <div id="app">
   <bookings-form />
   <bookings-grid :bookings="bookings" />
 </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsList';
import { eventBus } from './main';
import BookingService from './services/BookingService';

export default {
 name: 'app',
 data () {
   return {
     bookings: []
   }
 },
 components: {
   BookingsForm,
   BookingsGrid
 },
 mounted(){
   this.fetchData();

   eventBus.$on('refresh-data', this.fetchData)
 },
 methods: {
   fetchData(){
       BookingService.getBookings()
       .then(bookings => this.bookings = bookings);
   }
 }
}
</script>

<style>
body {
  background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('./assets/seo_hotels.jpg') no-repeat center center fixed;
  background-size: cover;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

</style>
