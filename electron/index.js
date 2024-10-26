import {app, BrowserWindow, ipcMain} from 'electron';
import {join, resolve} from 'path';
const __dirname = resolve();

const isDev = !app.isPackaged;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        autoHideMenuBar: true,
        webPreferences: {
            preload: join(__dirname, 'electron/preload.js')
        }
    });

    win.loadFile(join(__dirname, 'dist/index.html'));
    win.on('ready-to-show', () => win.show());

    if (isDev) {
        win.webContents.openDevTools();
    }


}

app.whenReady().then(createWindow);

ipcMain.handleOnce('get/version', () => app.getVersion());