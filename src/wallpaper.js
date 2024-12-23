import { register } from '@tauri-apps/plugin-global-shortcut';
import wallpaper from "tauri-plugin-wallpaper";
import { getCurrentWindow } from '@tauri-apps/api/window';

let isWallpaper = true;

await getCurrentWindow().setFullscreen(true);

wallpaper.attach();

await register('CommandOrControl+Alt+W', () => {
    if (isWallpaper) {
        wallpaper.detach();
    } else {
        wallpaper.attach();
    }
});