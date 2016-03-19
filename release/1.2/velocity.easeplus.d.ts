// Type definitions for Ease+ for Velocity.js v1.2
// Project: https://github.com/yuichiroharai/easeplus-velocity/
// Definitions by: Yuichiroh Arai <https://github.com/yuichiroharai/>
// Definitions: https://github.com/yuichiroharai/easeplus-velocity/

interface JQueryStatic {
    easeplus: jquery.easeplus.EasePlusStatic;
}

declare namespace jquery.easeplus {

    interface EasePlusStatic {
        addBackIn(name:string, amount:number);
        addBackOut(name:string, amount:number);
        addBackInOut(name:string, amount:number);

        addElasticIn(name:string, amplitude:number, period:number);
        addElasticOut(name:string, amplitude:number, period:number);
        addElasticInOut(name:string, amplitude:number, period:number);

        addElasticIn(name:string, amplitude:number, period:number);
        addElasticOut(name:string, amplitude:number, period:number);
        addElasticInOut(name:string, amplitude:number, period:number);

        addBlend(name:string, ease1:string, ease2:string, easeMix:string);

        remove(name:string);
    }

}
