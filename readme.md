# Ease+ for Velocity.js

[Velocity.js](http://julian.com/research/velocity/)が対応していないBack, Elastic, Bounceの3種類のイージングを追加するライブラリです。

イージング関数は[TweenJS(CreateJS)](http://createjs.com/TweenJS)から拝借。

また、Back, Elasticの強さをカスタムしたり、イージングをブレンドする機能もあります。

## Download

### v1.2 (for Velocity.js v1.2.2)

[velocity.easeplus.min.js](http://yuichiroharai.github.io/easeplus-velocity/release/1.2/velocity.easeplus.min.js) - 圧縮版

[velocity.easeplus.js](http://yuichiroharai.github.io/easeplus-velocity/release/1.2/velocity.easeplus.js) - 通常版

## Sample

[Sample - Ease+ for Velocity.js](http://yuichiroharai.github.io/easeplus-velocity/sample/)

## History

### v1.2

* 2つのイージングをブレンドしてカスタムできる機能を追加
    * $.easeplus.addBlend("easeName", "cubicIn", "backOut", "sineOut");
* カスタムしたイージングの削除するメソッドをひとつに統一
    * removeBackOut など → remove

### v1.1

* イージング名をjQuery方式に合わせて変更
    * backOut → easeOutBack など
* さらに、全てのイージング名に別名を追加してどちらの方式でも指定できるように変更
    * easeOutSine → sineOut など
