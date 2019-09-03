/** @noSelfInFile */

class Client3DText {
    constructor(private id: number){}
    public getId(): number {
        return this.id;
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetText3DLocation(this.id));
    }
}