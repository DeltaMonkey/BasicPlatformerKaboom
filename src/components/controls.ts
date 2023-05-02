import { AreaComp, GameObj } from 'kaboom';
import k from '../kaboom';
import { BodyComp } from 'kaboom';

export type ControlsComp = {
    add(): void;
};

export default function controls() {
    const {
        onKeyDown,
        onKeyPress,
        onKeyRelease
    } = k;

    return {
        add(this: GameObj & AreaComp & BodyComp ) {
            onKeyPress("space", () => {
                if(this.isGrounded())
                    this.jump();
            })
        
            onKeyRelease("space", () => {
                if(!this.isGrounded())
                    this.gravityScale = 3;
            })
            
            this.onGround(() => {
                this.gravityScale = 1;
            })
        
            onKeyDown("left", () => {
                this.move(-100, 0);
            })
        
            onKeyDown("right", () => {
                this.move(+100, 0);
            })
        }
    };
}