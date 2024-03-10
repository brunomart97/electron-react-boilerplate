const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const isDev = true

const createWindow = () => {
  const window = new BrowserWindow({
    width: 500,
    height: 500,
    resizable: false,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    autoHideMenuBar: true
  })

  const startUrl = isDev ? 'http://localhost:3000' : url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  })

  window.loadURL(startUrl)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
