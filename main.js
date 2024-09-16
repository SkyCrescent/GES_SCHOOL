// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
   const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         preload: path.join(__dirname, 'preload.js'),
         nodeIntegration: true,
         contextIsolation: false,
      }
   });

   mainWindow.loadURL('http://localhost:3000'); // L'URL de votre serveur Next.js en développement

   // Ouvrir DevTools pour le débogage
   mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
   createWindow();

   app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
   });
});

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') app.quit();
});
