<template>
  <div className="content">
    <h1>모바일</h1>
    <h3>Date Time Picker</h3>
    <div class="row">
      <span class="label">date picker</span>
      <flat-pickr
          v-model="dateDefault"
      />
      <span class="label">Time picker</span>
      <flat-pickr
          v-model="timePicker"
          :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i',}"
      />
    </div>
    <div class="row">
      <span class="label">Date & TIme</span>
      <flat-pickr
          v-model="dateNtim"
          :config="{ enableTime: true, dateFormat: 'Y-m-d H:i'}"
      />
      <span class="label">Range</span>
      <flat-pickr
          v-model="rangeDate"
          :config="{ mode: 'range'}"
      />
    </div>
  </div>
</template>

<script>
import Controller from '@/pages/third-party/date-time-picker'

export default {
  extends: Controller,
}
</script>
