/** @noSelfInFile */

declare function GetPlayerId(): number;
declare function GetAllCollisions(): number[];
declare function CreateCollisionBox(x: number, y: number, z: number, bx: number, by: number, bz: number, bVisible?: boolean): number;
declare function CreateCollisionSphere(x: number, y: number, z: number, radius: number, bVisible?: boolean): number;
declare function DestroyCollision(collision: number): void;
declare function SetCameraShakeLocation(XAmp: number, XFreq: number, YAmp: number, YFreq: number, ZAmp: number, ZFreq: number): void;
declare function StopCameraFade(): void;
declare function ShowWeaponHUD(show: boolean): void;
declare function DrawCircle3D(x: number, y: number, z: number, radius: number, r: number, g: number, b: number): number;
declare function DrawCircle3D(x: number, y: number, z: number): number;
declare function DrawRect(sX: number, sY: number, sW: number, sH: number): number;
declare function DrawRect(sX: number, sY: number, sW: number, sH: number, r: number, g: number, b: number): number;
declare function GetPlayerBoneNames(): string;
declare function GetScreenSize(): number;
declare function PlayCameraShake(duration: number): void;
declare function PlayCameraShake(duration: number, blendInTime: number, blendOutTime: number, scale: number): void;
declare function SetWaypoint(slot: number, name: string, x: number, y: number, z: number): number;
/** @tupleReturn */
declare function GetChatLocation(): [number, number];
declare function SetCameraShakeFOV(FOVAmp: number, FOVFreq: number): void;
declare function SetTextBoxAlignment(textId: number, x: number, y: number): void;
declare function ShowHealthHUD(show: boolean): void;
declare function ShowMouseCursor(bShow: boolean): void;
declare function ScreenToWorld(x: number, y: number): number;
declare function DrawBox(sX: number, sY: number, sW: number, sH: number): void;
declare function DrawBox(sX: number, sY: number, sW: number, sH: number, thickness: number, r: number, g: number, b: number): void;
declare function SetSunRadius(radius: number): void;
declare function GetAllPlayersInBox(x: number, y: number, z: number, bx: number, by: number, bz: number): number[];
declare function GetAllPlayersInBox(x: number, y: number, z: number, bx: number, by: number, bz: number, bIncludeSelf: boolean): number[];
declare function SetMoonShine(shine: number): void;
declare function GetPlayerRotationRate(): number;
/** @tupleReturn */
declare function GetMouseLocation(): [number, number];
//declare function GetPlayerCameraUpVector(): number;
declare function SetTextBoxText(textid: number, text: string): void;
declare function CreateTextBox(x: number, y: number, text: string, justification: string): number;
declare function SetStarsBrightness(brightness: number): void;
//declare function DrawTexture(): void;
//declare function WorldToScreen(x: number, y: number, z: number): void;
declare function IsChatFocus(): boolean;
declare function SetSunAzimuth(azimuth: number): void;
declare function CreateSound(SoundFile: string, bLoop?: boolean): number;
declare function SetOceanColor(HexColor: string): void;
declare function GetMouseInputDelta(): number;
declare function IsPlayerInVehicle(player?: number): boolean;
declare function SetDrawScale(sx: number, sy: number): void;
declare function SetSkyRotationSpeed(speed: number): void;
declare function GetAllSounds(): number[];
declare function LineTrace(sX: number, sY: number, sZ: number, eX: number, eY: number, eZ: number, complex?: number): number;
declare function ShowChat(show: boolean): void;
declare function SetTextBoxAnchors(textid: number, minX: number, minY: number, maxX: number, maxY: number): void;
declare function CreateSound3D(soundFile: string, x: number, y: number, z: number, radius?: number, bLoop?: boolean): number;
declare function SetPlayerOutline(player: number, bEnable?: boolean): void;
declare function IsValidSound(sound: number): boolean;
declare function SetSoundVolume(sound: number, volume: number): void;
declare function SetObjectCastShadow(object: number, bEnable: boolean): void;
declare function DrawLine(sX: number, sY: number, eX: number, eY: number): number;
declare function DrawLine(sX: number, sY: number, eX: number, eY: number, thickness: number, r: number, g: number, b: number): number;
declare function SetFogDensity(density: number): void;
//declare function GetPlayerBoneLocation(player: number, BoneName: string [, BoneSpace]): void;
declare function EnableObjectHitEvents(objectId: number, enable?: boolean): void;
declare function GetSoundCount(): number;
declare function DestroyTextBox(textid: number): void;
//declare function GetInputAxisValue(AxisName: string): void;
declare function AddPlayerChat(message: string): void;
declare function DestroySound(sound: number): void;
declare function SetPlayerRotationRate(RotationRate: number): void;
/** @tupleReturn */
declare function GetPlayerCameraLocation(): [number, number, number];
declare function GetAllCollisions(): number[];
declare function GetTerrainHeight(sX: number, sY: number, sZ: number): number;
//declare function GetPlayerCameraRightVector(): void;
declare function SetObjectOutline(object: number, bEnable?: boolean): void;
declare function SetDrawColor(HexColor: string): void;
declare function DrawLine3D(sX: number, sY: number, sZ: number, eX: number, eY: number, eZ: number): void;
declare function DrawLine3D(sX: number, sY: number, sZ: number, eX: number, eY: number, eZ: number, r: number, g: number, b: number): void;
declare function SetChatLocation(x: number, y: number): void;
declare function SetObjectEditable(object: number, editMode: boolean): void;
//declare function SetCameraShakeRotation(PitchAmp, PitchFreq, YawAmp, YawFreq, RollAmp, RollFreq): void;
declare function DrawSolidBox3D(x: number, y: number, z: number, eX: number, eY: number, eZ: number, HexColor: string): number;
declare function SetSkyLightIntensity(intensity: number): void;
declare function GetTextSize(text: string): number;
declare function GetTextSize(text: string, scale: number): number;
//declare function GetPlayerCameraRotation(): void;
declare function GetStreamedLights(): number[];
declare function DrawText(x: number, y: number, text: string): number;
declare function SetTime(time: number): void;
declare function IsMouseCursorEnabled(): boolean;
declare function SetMoonRadius(radius: number): void;
//declare function DeprojectMouseLocationToWorld(): void;
declare function SetMoonLightIntensity(intensity: number): void;
declare function SetSunLightIntensity(intensity: number): void;
declare function SetSunShine(shine: number): void;
declare function GetPing(): number;
//declare function GetNetworkStats(): void;
declare function GetStreamedNPC(): number[];
//declare function SetInputMode(InputMode): void;
/** @tupleReturn */
declare function GetLightLocation(light: number): [number, number, number];
declare function SetNPCOutline(npc: number, bEnable?: boolean): void;
//declare function SetWeather(weather): void;
declare function GetTime(): number;
//declare function GetObjectBoundingBox(object: number): void;
declare function GetObjectSize(object: number): number;
/** @tupleReturn */
declare function GetPickupLocation(pickupid: number): [number, number, number];
declare function GetAllPlayersInSphere(x: number, y: number, z: number, radius: number): number[];
declare function GetAllPlayersInSphere(x: number, y: number, z: number, radius: number, bIncludeSelf: boolean): number[];
declare function GetStreamedObjects(): number[];
declare function GetStreamedObjects(bGetAttached: boolean): number[];
//declare function GetObjectModelGroup(model): void;
//declare function GetObjectRotation(object): void;
declare function GetStreamedPlayers(): number[];
//declare function GetPlayerHeading(player: number): void;
declare function GetStreamedPickups(): number[];
declare function StopCameraShake(): void;
declare function StopCameraShake(bImmediate: boolean): void;
declare function StartCameraFade(fromAlpha: number, toAlpha: number, duration: number, hexColor?: string): void;
declare function SetSkySaturation(saturation: number): void;
declare function GetMouseHitEntity(): number;
declare function GetPlayerFOV(): number;
declare function SetPlayerCameraRotation(x: number, y: number, z: number): void;
//declare function VectorToRotation(x: number, y: number, z: number): void;
declare function SetPlayerCameraLocation(x: number, y: number, z: number): void;
declare function SetPlayerFOV(fov: number): void;
declare function GetPlayerCameraViewDistance(): number;
declare function SetObjectEditorSpeed(speed: number): void;
//declare function InvokeDamageFX(value): void;
declare function IsPlayerInMainMenu(): boolean;
declare function GetDistanceSquared3D(x: number, y: number, z: number, x2: number, y2: number, z2: number): number;
declare function SetPlayerCameraViewDistance(distance: number): void;
declare function DrawPoint3D(x: number, y: number, z: number, pointSize?: number, r?: number, g?: number, b?: number): number;
//declare function NormalizeVector(x: number, y: number, z: number): void;
//declare function RotationToVector(x: number, y: number, z: number): void;
declare function GetObjectMass(object: number): number;
//declare function GetMouseHitLocation(): void;
declare function SetSoundPitch(sound: number, pitch: number): number;
declare function GetSoundVolume(sound: number): number;
//declare function SetSoundFadeOut(sound, Duration, VolumeLevel): void;
declare function GetSoundPitch(sound: number): number;
declare function IsFloatNearlyZero(Value: number): boolean;
declare function GetSoundDuration(sound: number): number;
//declare function GetVehicleRightVector(vehicle: number): void;
/** @tupleReturn */
declare function GetVehicleDoorLocation(vehicle: number, door: number): [number, number, number];
//declare function GetVehicleForwardVector(vehicle): void;
declare function IsVehicleHornActive(vehicle: number): boolean;
//declare function SetSoundFadeIn(sound [, Duration, VolumeLevel, StartTime]): void;
declare function IsVehicleInAir(vehicle: number): boolean;
//declare function GetVehicleWheelSteerAngle(vehicle, wheel): void;
//declare function GetVehicleEngineState(vehicle: number): void;
//declare function IsVehicleSeatOccupied(vehicle: number, seat): void;
declare function IsVehicleInWater(vehicle: number): boolean;
declare function IsVehicleWheelInAir(vehicle: number, wheel: number): boolean;
declare function GetVehicleEngineRPM(vehicle: number): number;
declare function GetVehicleForwardSpeed(vehicle: number): number;
declare function GetWebVisibility(web: number): boolean;
//declare function GetVehicleBoundingBox(vehicle): void;
declare function LoadWebFile(web: number, file: string): void;
declare function GetAllWebUI(): number[];
declare function DestroyWebUI(web: number): void;
declare function SetWebVisibility(web: number, visibility: boolean): void;
declare function SetWebRotation(web: number, rx: number, ry: number, rz: number): void;
declare function ExecuteWebJS(web: number, Javascript: string): void;
/** @tupleReturn */
declare function GetText3DLocation(text3d: number): [number, number, number];
declare function GetStreamedText3D(): number[];
//declare function GetVehicleWheelSurface(vehicle, wheel): void;
declare function GetStreamedVehicles(): number[];
declare function SetWebURL(web: number, URL: string): void;
declare function SetWebLocation(web: number, x: number, y: number, z?: number): void;
declare function SetWebSize(web: number, width: number, height: number): void;
declare function SetWebAnchors(web: number, minX: number, minY: number, maxX: number, maxY: number): void;
//declare function GetVehicleUpVector(vehicle: number): void;
declare function SetWebAlignment(web: number, x: number, y: number): void;
declare function GetWebUICount(): number;
declare function SetIgnoreMoveInput(bIgnore: boolean): void;
declare function CreateWebUI3D(x: number, y: number, z: number, rx: number, ry: number, rz: number, width: number, height: number, FrameRate?: number): number;
declare function SetIgnoreLookInput(bIgnore: boolean): void;
//declare function GetPlayerCameraForwardVector(): void;
declare function IsShiftPressed(): boolean;
declare function IsCtrlPressed(): boolean;
declare function CreateWebUI(x: number, y: number, width: number, height: number, zOrder?: number, frameRate?: number): number;