const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('helloWorldContext', {
  helloWorld: 'Hello, world!'
})
