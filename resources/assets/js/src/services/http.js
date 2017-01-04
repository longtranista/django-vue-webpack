import $ from 'jquery'
export default {
  __ajax: function (method, url, data, successCb) {
    $.ajax({
      method: method,
      url: url,
      data: data,
      dataType: 'json'
    }).done(function (res) {
      successCb && successCb(res)
    }).fail(function (res) {
      console.log('Ajax Fail!!!', res)
    })
  },

  get: function (url, data, successCb) {
    this.__ajax('GET', url, data, successCb)
  },
  post: function (url, data, successCb) {
    this.__ajax('POST', url, data, successCb)
  }
}
