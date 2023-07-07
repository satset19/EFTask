<script lang="ts">
import '../assets/main.css'
import { format, compareAsc, formatDistance, subDays } from 'date-fns'
// import formatDistanceStrict from 'date-fns/formatDistanceStrict'
// import players from "../store/data.ts"
import { defineComponent } from 'vue';

export default defineComponent({
  name: "DatePicker",
  data() {
    return {
      dataDate: {
        start: '',
        end: ''
      }
    }
  },
  methods: {
    rangeDay(date1: string, date2: string) {
      return formatDistance(new Date(date1), new Date(date2))

    }
  }
})

</script>
<template>
  <div class="flex items-center justify-center">
    <div class="relative">
      <span class="text-gray-500 ">Check-in</span>
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <!-- <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg> -->
      </div>
      <input type="date"
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Select date start" v-model="dataDate.end" />
    </div>
    <span class="mx-4 text-gray-500">to</span>
    <div class="relative">
      <span class="text-gray-500 ">Check-out</span>
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 ">
        <!-- <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg> -->
      </div>
      <input type="date"
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Select date end" v-model="dataDate.start" />
    </div>
  </div>
  <div class="flex justify-center w-screen">

    <p v-if="dataDate.start.length > 0">{{ rangeDay(dataDate.start, dataDate.end) }}</p>
  </div>
  <!-- <p>{{ dataDate.end ? new Date(dataDate.end) : "" }}</p> -->
</template>
