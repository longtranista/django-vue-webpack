<template>
    <button @click="getData">Get data</button>
    <div>
        Display data:
        <p>
            {{ responseData }}
        </p>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      responseData: 'Not yet'
    }
  },
  methods: {
    getData () {
      var me = this
      $.getJSON('/api/sample', function (response) {
        me.responseData = JSON.stringify(response)
      })
    }
  }
}
</script>