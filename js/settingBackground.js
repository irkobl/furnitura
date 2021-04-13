'use strict';

define('settingBackground',['jquery','uform','stickyPopup','ul-framework'],function(a,b,c,d){

var f={
init:function(){return function(h){
var j=/^#(?:[a-fA-F0-9]{6})$/i,

k=h,
l=!1;

d.folds.init(),

'parallax'!=k.context.params.background.parallax||l||(
d.range.init(),
d.folds.after(),
l=!0),


k.$formBg=a('.ul-block-styles-image'),
c._position(),

'none'!=k.context.params.background.parallax&&(

a('.js-wrap-position',k.$formBg).find('label:not(.js-parallax)').attr('disabled','disabled'),
!a('[ul-model="parallax.justify"]').prop('checked')&&
a('.js-wrap-repeat',k.$formBg).find('label:not(.js-disable-repeat)').attr('disabled','disabled')),



k.$formBg.on('change.modelBg','[ul-model]',function(){

var m=b.formParse(k.$formBg);
m.params.background.parallax||(
m.params.background.parallax='none'),


j.test(m.params.background.color)||(
m.params.background.color=k.context.params.background.color),


'parallax'!=m.params.background.parallax||l||(
d.range.init(),
d.folds.after(),
l=!0),


'none'==m.params.background.parallax&&(

a('.js-wrap-repeat',k.$formBg).find('label:not(.js-disable-repeat)').removeAttr('disabled'),
a('.js-wrap-position',k.$formBg).find('label').removeAttr('disabled','disabled'),
a('.js-parallax-justify',k.$formBg).hide(),
'stretch'==m.params.background.justify&&(
a('.js-wrap-repeat',k.$formBg).hide(),
a('.js-wrap-speed-parallax',k.$formBg).hide(),
a('.js-wrap-zoom-parallax',k.$formBg).hide()),

'tile'==m.params.background.justify&&(
a('.js-wrap-speed-parallax',k.$formBg).hide(),
a('.js-wrap-zoom-parallax',k.$formBg).hide(),
a('.js-wrap-repeat',k.$formBg).show())),



'none'!=m.params.background.parallax&&(
a('.js-parallax-justify',k.$formBg).show(),
a('.js-wrap-repeat',k.$formBg).show(),

a('.js-wrap-speed-parallax',k.$formBg).show(),
a('.js-wrap-zoom-parallax',k.$formBg).show(),
a('.js-wrap-position',k.$formBg).find('label:not(.js-parallax)').attr('disabled','disabled'),



a.each(a('.js-wrap-position',k.$formBg).find('label:not(.js-parallax)'),function(n,o){
a(o).find('input').prop('checked')&&((
'LC'==m.params.background.position||'LB'==m.params.background.position)&&(
m.params.background.position='LT'),(

'C'==m.params.background.position||'CB'==m.params.background.position)&&(
m.params.background.position='CT'),(

'RC'==m.params.background.position||'RB'==m.params.background.position)&&(
m.params.background.position='RT'),



a('.js-wrap-position',k.$formBg).find('[value="'+m.params.background.position+'"]')[0].checked=!0);


}),

a('.js-wrap-position',k.$formBg).find('[value="'+m.params.background.position+'"]').attr('checked','checked'),

'fixedPosition'==m.params.background.parallax&&(
a('.js-wrap-speed-parallax',k.$formBg).hide(),
a('.js-wrap-zoom-parallax',k.$formBg).hide()),

'parallax'==m.params.background.parallax&&(
a('.js-wrap-speed-parallax',k.$formBg).show(),
a('.js-wrap-zoom-parallax',k.$formBg).show()),


m.parallax&&m.parallax.justify?(
a('.js-wrap-repeat',k.$formBg).find('label:not(.js-disable-repeat)').removeAttr('disabled'),
m.params.background.justify='tile'):(

m.params.background.justify='stretch',
a('.js-wrap-repeat',k.$formBg).find('label:not(.js-disable-repeat)').attr('disabled','disabled'))),


k.context.updateSettings(m.params),
k.context.setParams(),
c._position();
}),


k.$formBg.
on('change','.js-parallax-speed',function(m,n){
var o=n.val;
k.context.updateSettings({background:{parallaxRatio:o}});
}).on('change','.js-parallax-zoom',function(m,n){
var o=n.val;
k.context.updateSettings({background:{zoom:o}});
}),

k.$formBg.on('focusout.modelBg','[ul-model="params.background.color"]',function(){

if(!j.test(a(this).val())&&a(this).val().length)
a(this).closest('.js-color-background').addClass('error');else
{
a(this).closest('.js-color-background').removeClass('error');
var m=b.formParse(k.$formBg);
a(this).val().length?





a(this).
closest('.js-color-background').
find('.js-color-preview').
css({
"background-color":a(this).val()}):a(this).closest('.js-color-background').find('.js-color-preview').removeAttr('background'),


m.params.background.color=a(this).val(),
k.context.updateSettings(m),
k.context.setParams(),
c._position();
}
}),
k.$formBg.on('keyup.modelBg','[ul-model="params.background.color"]',function(){
if(!j.test(a(this).val())&&a(this).val().length)
a(this).closest('.js-color-background').addClass('error');else
{
a(this).closest('.js-color-background').removeClass('error');

var m=b.formParse(k.$formBg);

a(this).val().length?





a(this).
closest('.js-color-background').
find('.js-color-preview').
css('background','').
css({
"background-color":a(this).val()}):a(this).closest('.js-color-background').find('.js-color-preview').removeAttr('background'),


m.params.background.color=a(this).val(),
k.context.updateSettings(m),
k.context.setParams(),
c._position();
}
});
}}(),
destroy:function(){return function(){
var h=this;
a(h.$formBg).off('.modelBg'),
a(h.$formBg).find('.ul-range').off('change');
}}()};


return f;
});
//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map

//# sourceMappingURL=settingBackground.js.map
