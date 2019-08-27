/** @noSelfInFile */

// Server
declare function GetTimeSeconds(): number;
declare function GetDeltaSeconds(): number;
declare function GetTickCount(): number;
declare function GetGameVersion(): number;
declare function GetGameVersionString(): string;
declare function GetServerTickRate(): number;
declare function ServerExit(): void;
declare function SetServerName(name: string): void;
declare function GetServerName(): string;
declare function GetMaxPlayers(): number;

// Explosions
declare function CreateExplosion(explosionId: number, x: number, y: number, z: number, soundExplosion?: boolean, camShakeRadius?: number, radialForce?: number): void;

// Lights
declare function GetLightCount(): number;
declare function GetAllLights(): number[];
declare function CreateLight(lightType: number, intensity: number, x: number, y: number, z: number, rx?: number, ry?:number, rz?:number): number;
declare function DestroyLight(lightId: number): void;
declare function IsValidLight(lightId: number): boolean;

// Network
declare function CancelConnectionRequest(): void; // Unclear
//declare function GetNetworkStats(): void; -> Unknown return type
declare function DumpNetworkStats(verbosity: number): void;

// NPCs
declare function CreateNPC(modelId: number, x: number, y: number, z: number, h: number): number;
declare function DestroyNPC(npcId: number): void;
declare function IsValidNPC(npcId: number): boolean;
declare function GetAllNPC(): number[];
declare function GetNPCCount(): number;
declare function IsNPCStreamedIn(playerId: number, npcId: number): boolean;
declare function GetNPCModel(npcId: number): number;
declare function SetNPCLocation(npcId: number, x: number, y: number, z: number): void;
/** @tupleReturn */
declare function GetNPCLocation(npcId: number): [number, number, number];
declare function GetNPCHealth(npcId: number): number;
declare function SetNPCAnimation(npcId: number, animationName: string, loop: boolean): boolean;
declare function SetNPCHeading(npcId: number, heading: number): void;
declare function GetNPCHeading(npcId: number): number;
declare function SetNPCTargetLocation(npcId: number, x: number, y: number, z: number, speed?: number): void;
declare function SetNPCFollowPlayer(npcId: number, playerId: number, speed?: number): void;
declare function SetNPCFollowVehicle(npcId: number, vehicleId: number, speed?: number): void;

// Objects
declare function CreateObject(modelId: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, sx?: number, sy?: number, sz?: number): number;
declare function DestroyObject(objectId: number): void;
declare function IsValidObject(objectId: number): boolean;
declare function GetObjectCount(): number;
declare function GetObjectModel(objectId: number): number;
declare function IsObjectStreamedIn(playerId: number, objectId: number): boolean;
declare function SetObjectStreamDistance(objectId: number, distance: number): void;
declare function SetObjectLocation(objectId: number, x: number, y: number, z: number): void;
/** @tupleReturn */
declare function GetObjectLocation(objectId: number): [number, number, number];
declare function SetObjectRotation(objectId: number, rx: number, ry: number, rz: number): void;
/** @tupleReturn */
declare function GetObjectRotation(objectId: number): [number, number, number];
declare function SetObjectScale(objectId: number, sx: number, sy: number, sz: number): void;
/** @tupleReturn */
declare function GetObjectScale(objectId: number): [number, number, number];
declare function SetObjectAttached(objectId: number, attachType: number, attachId: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, socketName?: string): void;
declare function SetObjectDetached(objectId: number): void;
declare function IsObjectAttached(objectId: number): boolean;
//declare function GetObjectAttachmentInfo(objectId: number): unknown; -> Unknown return type
declare function IsObjectMoving(objectId: number): boolean;
declare function SetObjectMoveTo(objectId: number, x: number, y: number, z: number, speed: number): void;
declare function StopObjectMove(objectId: number): void;
declare function SetObjectRotateAxis(objectId: number, x: number, y: number, z: number): void;
declare function SetObjectColor(objectId: number, color: number, materialSlot?: number, blsEmissive?: boolean, emissiveStrength?: number): void;
declare function SetObjectTexture(objectId: number, textureFile: string, materialSlot?: number): void;
declare function SetObjectAnimatedTexture(objectId: number, textureFile: string, rows: number, columns: number, materialSlot?: number): void;

// Package / Event Stuff
declare function ImportPackage(packageName: string): any; // Maybe we can find a better type
declare function AddFunctionExport(exportName: string, exportFunction: Function): void; // I definitly don't know if this will work
declare function AddEvent(eventName: string, handler: Function): void;
declare function CallEvent(eventName: string, ...args: any[]): void;
declare function AddRemoteEvent(remoteEventName: string, handler: Function): void;
declare function AddCommand(commandName: string, handler: Function): void;
declare function GetAllPackages(): string[];
declare function GetPackageName(): string;

// Pickups
declare function GetPickupCount(): number;
declare function GetAllPickups(): number[];
declare function CreatePickup(modelId: number, x: number, y: number, z: number): number;
declare function DestroyPickup(pickupId: number): void;
declare function IsValidPickup(pickupId: number): boolean;
declare function SetPickupScale(pickupId: number, sx: number, sy: number, sz: number): void;
/** @tupleReturn */
declare function GetPickupScale(pickupId: number): [number, number, number];

// Players
declare function IsValidPlayer(playerId: number): boolean;
declare function CallRemoteEvent(playerId: number, eventName: string, ...args: any[]): boolean;
declare function GetPlayerCount(): number;
declare function GetAllPlayers(): number[];
declare function GetNearestPlayer2D(x: number, y: number): number;
declare function GetPlayersInRange2D(x: number, y: number, range: number): number[];
declare function GetPlayersInRange3D(x: number, y: number, z: number, range: number): number[];
declare function GetStreamedPlayersForPlayer(playerId: number): number[];
declare function SetPlayerName(playerId: number, name: string): void;
declare function GetPlayerName(playerId: number): string;
declare function GetPlayerSteamId(playerId: number): string;
//declare function GetPlayerNetworkStats(playerId: number): unknown; -> Unknown return type
declare function SetPlayerSpawnLocation(playerId: number, x: number, y: number, z: number, h: number): void;
declare function IsPlayerStreamedIn(playerId: number, otherPlayerId: number): boolean;
declare function SetPlayerVoiceEnabled(playerId: number, enabled: boolean): void;
declare function IsPlayerVoiceEnabled(playerId: number): boolean;
declare function IsPlayerTalking(playerId: number): boolean;
declare function AddPlayerChat(playerId: number, message: string): void;
declare function AddPlayerChatRange(x: number, y: number, range: number, message: string): void;
declare function AddPlayerChatAll(message: string): void;
//declare function GetPlayerState(playerId: number): unknown; -> Unknown return type
declare function GetPlayerMovementMode(playerId: number): number; //Unclear
declare function GetPlayerMovementSpeed(playerId: number): number;
declare function IsPlayerAiming(playerId: number): boolean;
declare function IsPlayerReloading(playerId: number): boolean;
declare function GetPlayerVehicle(playerId: number): number;
declare function GetPlayerVehicleSeat(playerId: number): number;
declare function SetPlayerInVehicle(playerId: number, vehicleId: number, seat?: number): void;
declare function RemovePlayerFromVehicle(playerId: number): void;
declare function SetPlayerLocation(playerId: number, x: number, y: number, z: number): void;
/** @tupleReturn */
declare function GetPlayerLocation(playerId: number): [number, number, number];
declare function SetPlayerWeaponStat(playerId: number, weaponId: number, stat: string, value: number): void; //Unclear
//declare function AddPlayerWeapon(playerId: number, weaponId: number): void; -> Not documented
declare function GetPlayerWeapon(playerId: number, weaponSlot?: number): number; //Unclear
declare function GetPlayerEquippedWeaponSlot(playerId: number): number;
declare function EquipPlayerWeaponSlot(playerId: number, weaponSlot: number): void;
declare function GetPlayerEquippedWeapon(playerId: number): number; //Unclear
//declare function ResetPlayerWeapon(playerId: number): void; -> Not documented
declare function CancelPlayerWeaponShot(): void; //Unclear
declare function CancelChatCommand(): void; //Unclear
declare function SetPlayerHeading(playerId: number, heading: number): void;
declare function GetPlayerHeading(playerId: number): number;
declare function SetPlayerSpectate(playerId: number, spectate: boolean): void;
declare function ResetPlayerCamera(playerId: number): void;
declare function IsPlayerDead(playerId: number): boolean;
declare function SetPlayerHealth(playerId: number, health: number): void;
declare function GetPlayerHealth(playerId: number): number;
declare function SetPlayerArmor(playerId: number, armor: number): void;
declare function GetPlayerArmor(playerId: number): number;
declare function SetPlayerRespawnTime(playerId: number, respawnTime: number): void;
declare function GetPlayerRespawnTime(playerId: number): number;
declare function SetPlayerModel(playerId: number, modelId: number): void;
declare function GetPlayerModel(playerId: number): number;
declare function GetPlayerIP(playerId: number): string;
declare function GetPlayerPing(playerId: number): number;
declare function KickPlayer(playerId: number, reason: string): void;
declare function GetPlayerLocale(playerId: number): string;
declare function GetPlayerGUID(playerId: number): string;
declare function GetPlayerGameVersion(playerId: number): number;
declare function SetPlayerAnimation(playerId: number, animationId: number): void;
declare function AttachPlayerParachute(playerId: number, attach: boolean): void;
declare function SetPlayerHeadSize(playerId: number, size: number): void;
declare function GetPlayerHeadSize(playerId: number): number;

// 3D Texts
declare function GetText3DCount(): number;
declare function GetAllText3D(): number[];
declare function CreateText3D(text: string, size: number, x: number, y: number, z: number, rx: number, ry: number, rz: number): number;
declare function DestroyText3D(text3DId: number): void;
declare function IsValidText3D(text3DId: number): boolean;
declare function SetText3DAttached(text3DId: number, attachType: number, attachId: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, socketName?: number): void;

// Vehicles
declare function GetVehicleCount(): number;
declare function GetAllVehicles(): number[];
declare function GetVehicleModel(vehicleId: number): number;
declare function GetVehicleModelName(vehicleId: number): string;
declare function SetVehicleRespawnParams(vehicleId: number, enableRespawn: boolean, respawnTime?: number, repairOnRespawn?: boolean): void;
declare function IsVehicleStreamedIn(playerId: number, vehicleId: number): boolean;
declare function GetStreamedVehiclesForPlayer(playerId: number): number[];
declare function SetVehicleLocation(vehicleId: number, x: number, y: number, z: number): void;
/** @tupleReturn */
declare function GetVehicleLocation(vehicleId: number): [number, number, number];
declare function SetVehicleRotation(vehicleId: number, rx: number, ry: number, rz: number): void;
/** @tupleReturn */
declare function GetVehicleRotation(vehicleId: number): [number, number, number];
declare function SetVehicleHeading(vehicleId: number, heading: number): void;
declare function GetVehicleHeading(vehicleId: number): number;
declare function SetVehicleHealth(vehicleId: number, health: number): void;
declare function GetVehicleHealth(vehicleId: number): number;
declare function SetVehicleLicensePlate(vehicleId: number, licensePlate: string): void;
declare function GetVehicleVelocity(vehicleId: number): number;
declare function CreateVehicle(modelId: number, x: number, y: number, z: number, h?: number): number;
declare function DestroyVehicle(vehicleId: number): void;
declare function IsValidVehicle(vehicleId: number): boolean;
declare function GetVehicleDriver(vehicleId: number): number;
declare function GetVehiclePassenger(vehicleId: number, seat: number): number;
declare function GetVehicleNumberOfSeats(vehicleId: number): number;
declare function SetVehicleColor(vehicleId: number, color: number): void;
declare function GetVehicleColor(vehicleId: number): number;
declare function GetVehicleInteriorColor(vehicleId: number): number;
declare function SetVehicleLinearVelocity(vehicleId: number, x: number, y: number, z: number): void;
declare function SetVehicleAngularVelocity(vehicleId: number, rx: number, ry: number, rz: number): void;
declare function GetVehicleGear(vehicleId: number): number;
declare function SetVehicleHoodRatio(vehicleId: number, hoodRatio: number): void;
declare function GetVehicleHoodRatio(vehicleId: number): number;
declare function SetVehicleTrunkRatio(vehicleId: number, trunkRatio: number): void;
declare function GetVehicleTrunkRatio(vehicleId: number): number;
declare function StartVehicleEngine(vehicleId: number): void;
declare function StopVehicleEngine(vehicleId: number): void;
declare function GetVehicleEngineState(vehicleId: number): boolean;
declare function SetVehicleLightEnabled(vehicleId: number, enabled: boolean): void;
declare function GetVehicleLightState(vehicleId: number): boolean;
declare function GetVehicleLightColor(vehicleId: number): number;
declare function SetVehicleDamage(vehicle: number, damageIndex: number, damage: number): void;
declare function GetVehicleDamage(vehicle: number, damageIndex: number): number;
declare function AttachVehicleNitro(vehicle: number, attach?: boolean): void;

// Dimensions
declare function SetPlayerDimension(player: number, dimension: number): void;
declare function SetVehicleDimension(vehicle: number, dimension: number): void;
declare function SetObjectDimension(object: number, dimension: number): void;
declare function SetLightDimension(light: number, dimension: number): void;
declare function SetPickupDimension(pickup: number, dimension: number): void;
declare function SetText3DDimension(text3d: number, dimension: number): void;
declare function SetNPCDimension(npc: number, dimension: number): void;
declare function GetPlayerDimension(player: number): number;
declare function GetVehicleDimension(vehicle: number): number;
declare function GetObjectDimension(object: number): number;
declare function GetLightDimension(light: number): number;
declare function GetPickupDimension(pickup: number): number;
declare function GetText3DDimension(text3d: number): number;
declare function GetNPCDimension(npc: number): number;