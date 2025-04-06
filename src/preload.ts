import { contextBridge, ipcRenderer } from "electron";
import { IPC_EVENTS } from "./constants";

contextBridge.exposeInMainWorld("electronAPI", {
  openFile: () => ipcRenderer.invoke(IPC_EVENTS.OPEN_FILE),
});
