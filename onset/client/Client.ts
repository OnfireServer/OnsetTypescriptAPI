/** @noSelfInFile */

namespace Client {
    export function getTimeSeconds(): number {
        return GetTimeSeconds();
    }
    export function getDeltaSeconds(): number {
        return GetDeltaSeconds();
    }
    export function getGameVersion(): number {
        return GetGameVersion();
    }
    export function listen(event: string, handler: Function): void {
        AddEvent(event, handler);
    }
    export function listenRemote(event: string, handler: Function): void {
        AddRemoteEvent(event, handler);
    }
    export function printChat(message: string): void {
        AddPlayerChat(message);
    }
    export function connect(address: string, port: number, password?: string): void {
        ConnectToServer(address, port, password);
    }
    export function getPing(): number {
        return GetPing();
    }
    export function getTimerManager(): TimerManager {
        return new TimerManager();
    }
    export function getSoundManager(): ClientSoundManager {
        return new ClientSoundManager();
    }
    export function getInputManager(): ClientInputManager {
        return new ClientInputManager();
    }
    export function getWorld(): ClientWorldManager {
        return new ClientWorldManager();
    }
    export function getGraphics(): ClientGraphicsManager {
        return new ClientGraphicsManager();
    }
}