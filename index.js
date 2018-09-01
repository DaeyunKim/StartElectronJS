const { app, BrowserWindow} = require('electron');

let mainWindow;

function onClosed(){
    mainWindow = null;
}


// app.on('ready',()=>{
//     mainWindow = new BrowserWindow({
//         width: 640,
//         height:480
//     });

//     mainWindow.loadURL(`file://${__dirname}/index.html`);
//     mainWindow.on('clased',onClosed);
// });

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 640,
        height:480
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on('closed',onClosed);
}

//앱이 종료 됬을때
app.on('window-all-closed',()=>{
    if(process.platform ==! 'darwin'){
        app.quit();
    }
})
app.on('activate',()=>{
    if(!mainWindow){
        createWindow();
    }
    
})
app.on('ready',()=>{
    createWindow();
})