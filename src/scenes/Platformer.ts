import { ColorComp, GameObj, PosComp, RectComp, OutlineComp } from "kaboom";
import k from "../kaboom";
import { AreaComp } from "kaboom";
import { BodyComp } from "kaboom";
import { AnchorComp } from "kaboom";

export type PlayerComp = GameObj<PosComp | RectComp | ColorComp | AreaComp | BodyComp | AnchorComp | OutlineComp >;

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
        onKeyPress,
        onKeyDown,
        setGravity,
        outline
    } = k;

    debug.inspect = false;

    setGravity(4900);
    
    //loadSprite('box', '/assets/asset_1.png')

    let player : PlayerComp = add([
        pos(80, 40),
        rect(16, 16),
        //sprite('box', { width: 16, height: 16}),
        color(0,255,0),
        area(),
        body(),
        anchor("center"),
        outline(2, color(0,0,0).color)
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

    onKeyPress("space", () => {
        if(player.isGrounded())
            player.jump();
    })
    
    onKeyDown("left", () => {
        player.move(-100, 0);
    })

    onKeyDown("right", () => {
        player.move(+100, 0);
    })
}