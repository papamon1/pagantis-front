const moment = require('moment')

exports.capitalize = function(word){
    return word ? word[0].toUpperCase()+ word.substring(1) : ''
}

exports.formatFromNow = function(date){
    return moment(date).fromNow() || ''
}

exports. formatWithTime = function(date){
    return moment(date).format('YYYY-MM-DD, h:mm a')
}

exports.isUnicode = function(message) {
    for (let i = 0, n = message.length; i < n; i+=1) {
        if (message.charCodeAt( i ) > 255) { return true; }
      }
      return false;
}