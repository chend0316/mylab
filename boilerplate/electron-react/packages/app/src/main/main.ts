import { app, BrowserWindow } from 'electron'
import { logger } from '../logger'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 600
  })

  if (app.isPackaged) {
    win.loadFile('../renderer/index.html')
  } else {
    win.loadURL('http://localhost:3000/')
  }
}

app.whenReady().then(() => {
  logger.log('info', 'App is ready');
  createWindow()
})
