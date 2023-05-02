import { ColorComp, GameObj, PosComp, RectComp, OutlineComp } from "kaboom";
import k from "../kaboom";
import { AreaComp } from "kaboom";
import { BodyComp } from "kaboom";
import { AnchorComp } from "kaboom";
import controls, { ControlsComp } from "../components/controls";

export type PlayerComp = GameObj<PosComp | RectComp | ColorComp | AreaComp | BodyComp | AnchorComp | OutlineComp | ControlsComp>;

export default function Platformer() {
    const {
        debug,
        add,
        pos,
        rect,
        //sprite,
        //loadSprite,
        color,
        area,
        body,
        anchor,
        setGravity,
        outline
    } = k;

    debug.inspect = false;

    setGravity(2450);
    
    //loadSprite('box', '/assets/asset_1.png')

    let player : PlayerComp = add([
        pos(80, 40),
        rect(16, 16),
        //sprite('box', { width: 16, height: 16}),
        color(0,255,0),
        area(),
        body(),
        anchor("center"),
        outline(2, color(0,0,0).color),
        controls()
    ]);

    let platform = add([
        pos(0, 200),
        rect(319, 120),
        color(0,120,120),
        area(),
        body( {isStatic: true} ),
        anchor("topleft"),
        outline(2, color(0,0,0).color)
    ]);
}