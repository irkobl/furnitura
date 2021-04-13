"use strict";define("billing/feature-availability",["_","jquery","i18n","U","popup","billingHelpers","nice-modal","moment","nf","text!html/billing/feature-availability/popup-not-available-header.html","text!html/billing/feature-availability/popup-not-available-content.html","css!/css/require/billing/feature-availability-popup.css"],function(a,e,t,i,r,n,l,s,o,u,f){var c={init:function(){return function(){}}(),urls:{support:i.params.tariffSupportUrl||"/sites/url/"+i.params.site+"/dashBoard/help",tariffSelection:i.params.tariffSelectionUrl||"/sites/url/"+i.params.site+"/dashBoard/billing/tariffs"},trialDuration:-1,possiblyDestructiveFeatures:["customHtml","pipette"],check:function(){return function(a,e){var t=this;t.getFeatureMintariff(a,function(i){e({isAvailable:!!t.checkers[a]&&t.checkers[a](),minTariff:i,trial:!!t.checkersTrial[a]&&t.checkersTrial[a]()})})}}(),setActivateCheckers:{shop:function(){return function(a){i.params.featureTariffAvailable.shop.trial.isAvailableTrial=!1,i.params.featureTariffAvailable.shop.isAvailable=!0,i.params.featureTariffAvailable.shop.trial.endDate=a}}()},setDisabledCheckers:{shop:function(){return function(){i.params.featureTariffAvailable.shop.isAvailable=!1,delete i.params.featureTariffAvailable.shop.trial.endDate,i.params.featureTariffAvailable.shop.trial.isAvailableTrial=!1}}()},activateTrial:{shop:function(){return function(a,t){e('.ul-draggable-widget[data-feature-name="'+a+'"]').attr("data-is-disabled-feature",!1).attr("data-is-trial-feature",!1).removeClass("ul-premium-disabled-feature-marked"),c.setActivateCheckers[a](t),c.startTimer(a)}}()},startTimer:function(){return function(a){var e=this;-1<e.trialDuration&&!e.trialTimer&&(e.trialTimer=setTimeout(function(){e.deactivateTrial(a),e.trialDuration=-1,clearTimeout(e.trialTimer)},e.trialDuration))}}(),deactivateTrial:function(){return function(a){var t=this;e('.ul-draggable-widget[data-feature-name="'+a+'"]').attr("data-is-disabled-feature",!0).attr("data-is-trial-feature",!1).addClass("ul-premium-disabled-feature-marked"),t.setDisabledCheckers[a]()}}(),checkers:{pipette:function(){return function(){return i.params.isAllowedPipette}}(),customHtml:function(){return function(){return i.params.isAllowedCustomHtml}}(),customClasses:function(){return function(){return i.params.isAllowedCustomClasses}}(),pagesLimit:function(){return function(){return i.params.isAllowedPageAdd}}(),goals:function(){return function(){return i.params.isAllowedGoals}}(),domainConnect:function(){return function(){return i.params.isAllowedDomainConnect}}(),shop:function(){return function(){return i.params.featureTariffAvailable.shop.isAvailable||!1}}()},checkersTrial:{shop:function(){return function(){return i.params.featureTariffAvailable.shop.trial}}()},showNotAvailablePopup:function(){return function(r,n){var c=this;n=n||{};var p=t("billing"),b=p("feature availability"),d=n.minTariff||"",T=n.isAvailable,v=n.isAvailableForTrial||!1,m='<span style="white-space: nowrap;">'+p(d)+"</span>",h=-1<c.possiblyDestructiveFeatures.indexOf(r),A=n.isTariffSelectionOpenedInNewTab?'target="_blank"':"",g=n.isSupportOpenedInNewTab?'target="_blank"':"",w=h?{title:b("be careful, you can break something"),subTitle:b("this feature is only for professionals"),mainText:b("feature is not available: description",c.urls.tariffSelection,A,m)}:{title:b("not available on your tariff"),subTitle:b("feature is available starting from TARIFFNAME tariff",m),mainText:b("feature is not available: description 2",c.urls.tariffSelection,A,m)},D={shop:{title:v?t("shop.trial.try trial shop"):w.title,subTitle:t(v?"shop.trial.14 days free":"shop.trial.tariff shop available"),mainText:v?t("shop.trial.shop available from shop tariff",c.urls.tariffSelection,A):t("shop.trial.widget product not available on current tariff",c.urls.tariffSelection,A)}},S=a.extend(w,D[r]||{},n.texts||{});l.open({title:"",content:[{data:a.template(u,{__:t,title:S.title,subTitle:S.subTitle,isPossiblyDestructiveFeature:h,featureName:r,isAvailableForTrial:v})},{data:a.template(f,{__:t,mainText:S.mainText,supportUrl:c.urls.support,tariffSelectionUrl:c.urls.tariffSelection,isPossiblyDestructiveFeature:h,tariffsTargetBlank:A,supportTargetBlank:g,isAvailable:T,isAvailableForTrial:v})}],callbacks:{afterOpen:function(){return function(a){a.on("click.getTrial",".js-available-feature-trial",function(){e.ajax({url:"/sites/url/"+i.params.site+"/dashBoard/billing/trialFeatures/activate",method:"POST",data:{features:[r]},trialShopGrantsError:!0,success:function(){return function(a){var e=a[1].featureTariffAvailable[r].trial;if(e){var i=s(e.endDate),n=s(new Date),u=i.diff(n,"milliseconds");c.setTrialDuration(u),c.activateTrial[r](r,e.endDate),o.notify(t(r+".trial.activated"),"success",{actions:[{title:"",disableAfterClick:!0,closeAfterClick:!1}]}),l.close()}}}()}).fail(function(a){403===a.status&&(o.notify(t("dashboard.settings.devmode shop trial error"),"error"),l.close())})})}}(),beforeClose:function(){return function(a){a.off(".getTrial")}}()}})}}(),getFeatureMintariff:function(){return function(e,t){var r=this;r.getFeatureWeight(e,function(r){var l=n.getFeatureMinTariff({minTariffs:i.params.featuresMinTariffs,feature:e,weight:r});t(a.isObject(l)?l.tariff:l)})}}(),getFeatureWeight:function(){return function(a,e){var t={pipette:function(){return function(a){a(null)}}(),customHtml:function(){return function(a){a(null)}}(),customClasses:function(){return function(a){a(null)}}(),goals:function(){return function(a){a(null)}}(),domainConnect:function(){return function(a){a(null)}}(),pagesLimit:function(){return function(a){require(["model/pages"],function(e){e.load(i.params.site,function(e){a(e.length+1)})})}}(),shop:function(){return function(a){a(null)}}()};t[a]?t[a](e):e(null)}}(),setTrialDuration:function(){return function(a){this.trialDuration=a}}()};return c.init(),{check:function(){return function(t,i,r){c.check(t,function(n){var l={isAvailableForTrial:!!n.trial&&n.trial.isAvailableTrial};if(n.trial&&!n.trial.isAvailableTrial&&n.trial.endDate){var o=s(n.trial.endDate),u=s(new Date);l.endDate=o.diff(u,"milliseconds"),c.trialTimer||(c.trialDuration&&-1<c.trialDuration&&c.setTrialDuration(l.endDate),c.startTimer(t),n.trial.isAvailableTrial&&c.activateTrial[t](t,n.trial.endDate))}r(n.isAvailable,n.minTariff,l),n.isAvailable||(i=a.extend({showPopupIfNotAvailable:!0,$popupTargetEl:e(document.body),isTariffSelectionOpenedInNewTab:!0,isSupportOpenedInNewTab:!0,isAvailable:n.isAvailable,isAvailableForTrial:n.trial.isAvailableTrial||!1},i),i.showPopupIfNotAvailable&&c.showNotAvailablePopup(t,{$targetEl:i.$popupTargetEl,minTariff:n.minTariff,isTariffSelectionOpenedInNewTab:i.isTariffSelectionOpenedInNewTab,isSupportOpenedInNewTab:i.isSupportOpenedInNewTab,isAvailable:i.isAvailable,isAvailableForTrial:i.isAvailableForTrial}))})}}(),deactivateTrial:function(){return function(a){c.deactivateTrial(a)}}(),showNotAvailablePopup:function(){return function(t,i){i=a.extend({$popupTargetEl:e(document.body),isTariffSelectionOpenedInNewTab:!0,isSupportOpenedInNewTab:!0},i),c.getFeatureMintariff(t,function(a){c.showNotAvailablePopup(t,{$targetEl:i.$popupTargetEl,minTariff:a,isTariffSelectionOpenedInNewTab:i.isTariffSelectionOpenedInNewTab,isSupportOpenedInNewTab:i.isSupportOpenedInNewTab,isAvailable:i.isAvailable,isAvailableForTrial:i.isAvailableForTrial||!1})})}}(),getFeatureMintariff:function(){return function(a,e){c.getFeatureMintariff(a,function(a){e(a)})}}()}});
//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map

//# sourceMappingURL=feature-availability.js.map
