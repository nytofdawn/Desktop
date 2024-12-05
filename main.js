const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Correct path to load dashboard.html directly from Pages folder
    const filePath = path.join(__dirname,'index.html'); // Fixed to 'Pages' folder
    win.loadFile(filePath); // Load the dashboard.html file
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
