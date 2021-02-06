const {app, BrowserWindow} = require('electron');
const { fstat } = require('fs');
const path = require('path');
var newWindow;

function newWindow(){
  newWindow = new BrowserWindow({fullscreen:false,
    webPreferences:{
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration : true,
      enableRemoteModule: true,
      allowRunningInsecureContent: true
    }
  });
  newWindow.loadURL('https://www.linkedin.com');
}

app.whenReady().then(() => {
  BrowserWindow.addExtension(__dirname+'/AdminAutoLiker').then((name) => console.log(`Added Extension:  ${name}`)).catch((err) => console.log('An error occurred: ', err));
  setTimeout(()=>{
    newWindow();
  },5000);

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// app.setLoginItemSettings({
//   openAtLogin: true

// })

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});


