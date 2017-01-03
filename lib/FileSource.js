'use strict'

const fs = require('fs')

class FileSource {
  constructor () {
    this.label = 'file source'
    this.inPlace = false
    this.dirty = true
  }

  process (filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, function (err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}

module.exports = FileSource
