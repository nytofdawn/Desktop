const { contextBridge, ipcRenderer } = require('electron');

// Expose a safe API to the renderer
contextBridge.exposeInMainWorld('electron', {
    readFile: (filePath) => ipcRenderer.invoke('readFile', filePath),
    // You can expose other functionalities here as needed
});
