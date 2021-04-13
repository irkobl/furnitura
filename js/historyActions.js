"use strict";define("constructor/HistoryActions",["jquery","U","history","asyncjs","typography"],function(t,n,o,e,i){var r={toggleWidgetInPartialHistoryAction:{act:"toggleWidgetInPartial",undo:function(){return function(t,n,o){var e=o("require"),i={};Object.keys(n).forEach(function(t){i[t]=!n[t]}),require(["panelPartials"],function(t){t.displayWidgets(i,function(){e()})})}}(),redo:function(){return function(t,n,o){var e=o("require"),i={};Object.keys(n).forEach(function(t){i[t]=n[t]}),require(["panelPartials"],function(t){t.displayWidgets(i,function(){e()})})}}()},saveBlockSettingsStructureHistoryAction:{act:"saveBlockSettingsStructure",undo:function(){return function(t,n){return t.__saveBlockSettingsStructure(n.id,n.oldBlockSettings)}}(),redo:function(){return function(t,n){return t.__saveBlockSettingsStructure(n.id,n.newBlockSettings)}}()},saveBlockSettingsFloatingHistoryAction:{act:"saveBlockSettingsFloating",undo:function(){return function(t,n){return t.__saveBlockSettingsFloating(n.id,n.oldBlockSettings)}}(),redo:function(){return function(t,n){return t.__saveBlockSettingsFloating(n.id,n.newBlockSettings)}}()},saveBlockSettingsBackgroundHistoryAction:{act:"saveBlockSettingsBackground",undo:function(){return function(t,n){return window.dispatch(window.actions.updateBlock(n.id,n.oldBlockSettings)),t.__saveBlockSettingsBackground(n.id,n.oldBlockSettings,n.noSet)}}(),redo:function(){return function(t,n){return window.dispatch(window.actions.updateBlock(n.id,n.newBlockSettings)),t.__saveBlockSettingsBackground(n.id,n.newBlockSettings,n.noSet)}}()},saveBlockSettingsHistoryAction:{act:"saveBlockSettings",undo:function(){return function(t,n){return t.__saveBlockSettings(n.id,n.oldBlockSettings)}}(),redo:function(){return function(t,n){return t.__saveBlockSettings(n.id,n.newBlockSettings)}}()},addTypographyHistoryAction:{act:"addPairTypography",undo:function(){return function(t,n,o){var e=o();i._removePair(n.idx).then(e)}}(),redo:function(){return function(t,n,o){var e=o();i._addPair(n.pair).then(e)}}()},removeTypographyHistoryAction:{act:"removePairTypography",undo:function(){return function(t,n,o){var e=o();i._addPair(n.pair).then(e)}}(),redo:function(){return function(t,n,o){var e=o();i._removePair(n.idx).then(e)}}()},editTypographyHistoryAction:{act:"editPairTypography",undo:function(){return function(t,n,o){var e=o();i._editPair(n.idx,n.pairOld).then(e)}}(),redo:function(){return function(t,n,o){var e=o();i._editPair(n.idx,n.pair).then(e)}}()},activateTypographyHistoryAction:{act:"activatePairTypography",undo:function(){return function(t,n,o){var e=o();i._activatePair(n.idxOld).then(e)}}(),redo:function(){return function(t,n,o){var e=o();i._activatePair(n.idx).then(e)}}()},saveSiteSettingsHistoryAction:{act:"saveSiteSettings",undo:function(){return function(o,e,i){var r=i();n.enqueueAjax({url:n.sprintf("/sites/url/{site}/pages/id/{page}/theme",[n.params.site,n.params.pageId]),data:e.oldBlockSettings,parallel:!1,version:n.params.version}),window.dispatch(window.actions.setSiteTheme(e.oldBlockSettings.theme,e.oldBlockSettings.customColorScheme,e.oldBlockSettings.customColorSchemeCurrent||0,e.newBlockSettings.bgtheme)),t(document).trigger("updatePanelSiteSetting",{data:e.oldBlockSettings}),t(document).trigger("siteChanged",e.oldBlockSettings),r()}}(),redo:function(){return function(o,e,i){var r=i();n.enqueueAjax({url:n.sprintf("/sites/url/{site}/pages/id/{page}/theme",[n.params.site,n.params.pageId]),data:e.newBlockSettings,parallel:!1,version:n.params.version}),window.dispatch(window.actions.setSiteTheme(e.newBlockSettings.theme,e.newBlockSettings.customColorScheme,e.newBlockSettings.customColorSchemeCurrent||0,e.newBlockSettings.bgtheme)),t(document).trigger("updatePanelSiteSetting",{data:e.newBlockSettings}),t(document).trigger("siteChanged",e.newBlockSettings),r()}}()},addBlockHistoryAction:{act:"addBlock",undo:function(){return function(n,o,e){return t("#"+o.id).length?n.removeBlock(t("#"+o.id),e()):void 0}}(),redo:function(){return function(n,o,e,i){return t("#"+o.id).length?void 0:n.__addBlock(o.blockId,o.index,e(),o.id,i)}}()},hideBlockHistoryAction:{act:"hideBlock",undo:function(){return function(t,n){return t.__hideBlock(n.id,n.old)}}(),redo:function(){return function(t,n){return t.__hideBlock(n.id,n["new"])}}()},hideHeaderFooterHistoryAction:{act:"hideHeaderFooter",undo:function(){return function(t,n){return t.__hideHeaderFooter(n.type,n.old)}}(),redo:function(){return function(t,n){return t.__hideHeaderFooter(n.type,n["new"])}}()},removeHeaderFooterHistoryAction:{act:"removeHeaderFooter",undo:function(){return function(t,n){return t.__removeHeaderFooter(n.type,n.old.isRemove,n.isForce)}}(),redo:function(){return function(t,n){return t.__removeHeaderFooter(n.type,n["new"].isRemove,n.isForce)}}()},hideWidgetHistoryAction:{act:"hideWidget",undo:function(){return function(t,n){return t.__hideWidget(n.id,n.old)}}(),redo:function(){return function(t,n){return t.__hideWidget(n.id,n["new"])}}()},restoreWidgetsHistoryAction:{act:"restoreWidgets",undo:function(){return function(t,n){return t.__restoreWidgets(n.id,n.old)}}(),redo:function(){return function(t,n){return t.__restoreWidgets(n.id,n["new"],n.$block)}}()},restoreContainerHistoryAction:{act:"restoreContainer",undo:function(){return function(t,n){return t.__restoreContainer(n.id,n.old)}}(),redo:function(){return function(t,n){return t.__restoreContainer(n.id,n["new"])}}()},copyBlockHistoryAction:{act:"copyBlock",undo:function(){return function(n,o,e){return t("#"+o.id).length?n.removeBlock(t("#"+o.id),e()):void 0}}(),redo:function(){return function(n,o,e,i){return t("#"+o.id).length?void 0:n.__copyBlock(o,e(),i)}}()},lockBlockHistoryAction:{act:"lockBlock",undo:function(){return function(t,n,o){return t.__lockBlock(n.id,!n.isLocked,o())}}(),redo:function(){return function(t,n,o){return t.__lockBlock(n.id,n.isLocked,o())}}()},createBlockFromBlockJSONHistoryAction:{act:"createBlockFromBlockJSON",undo:function(){return function(n,o,e){var i=t("#"+o.block.id);return i.length?n.removeBlock(i,e()):void 0}}(),redo:function(){return function(t,n,o){return t._createBlockFromBlockJSON(n,o())}}()},addColHistoryAction:{act:"addCol",undo:function(){return function(n,o){n._restoreColSizesOfRow(t("#"+o.rowId),o.colSizes)}}(),redo:function(){return function(n,o){return n.__addCol(t("#"+o.dropId),o.index,o.moveWidget,o.id)}}()},addRowHistoryAction:{act:"addRow",undo:function(){return function(){}}(),redo:function(){return function(n,o){return n.__addRow(t("#"+o.ulContainerId).children(".container, .container-fluid"),o.index,o.id)}}()},copyWidgetHistoryAction:{act:"copyWidget",undo:function(){return function(n,o,e){var i=!!o.flBlockWasEmpty&&o.flBlockWasEmpty;return n.__removeWidget(t("#"+o.id),e(),!1,i)}}(),redo:function(){return function(t,n,o){t.__copyWidget(n,o())}}()},addWidgetHistoryAction:{act:"addWidget",undo:function(){return function(n,o,e){var i=!!o.flBlockWasEmpty&&o.flBlockWasEmpty;return n.__removeWidget(t("#"+o.id),e(),!1,i)}}(),redo:function(){return function(t,n,o,e){return t.__addWidget(n,o(),e)}}()},moveWidgetHistoryAction:{act:"moveWidget",undo:function(){return function(n,o,e){var i=!!o.flBlockWasEmpty&&o.flBlockWasEmpty;n.__moveWidget(t("#"+o.widgetId),t("#"+o.colId),o.oldIndex,e(),i)}}(),redo:function(){return function(n,o,e){var i=!!o.flBlockWasEmpty&&o.flBlockWasEmpty;return n.__moveWidget(t("#"+o.widgetId),t("#"+o.targetId),o.index,e(),i)}}()},moveElHistoryAction:{act:"__moveEl",undo:function(){return function(n,o){return n.__moveEl(t("#"+o.elId),t("#"+o.curDropId),o.curIndex,null)}}(),redo:function(){return function(n,o){return n.__moveEl(t("#"+o.elId),t("#"+o.dropId),o.index,null)}}()},removeColHistoryAction:{act:"removeCol",undo:function(){return function(n,o){o.id.match(/special/)?n.__addCol(t("#"+o.rowId),o.index,!0,o.id):(n.__addCol(t("#"+o.rowId),o.index,!0,o.id),n._restoreColSizesOfRow(t("#"+o.rowId),o.colSizes))}}(),redo:function(){return function(){}}()},removeRowHistoryAction:{act:"removeRow",undo:function(){return function(n,o){n.__addRow(t("#"+o.ulContainerId).children(".container, .container-fluid"),o.index,o.id)}}(),redo:function(){return function(){}}()},removeBlockWithoutWidgetsHistoryAction:{act:"removeBlockWithoutWidgets",undo:function(){return function(t,n,o){var e=o();return t.__addBlock("block-empty-for-history",n.index,function(){t.__saveBlockSettingsStructure(n.id,n.oldBlockSettings),t.__saveBlockSettingsBackground(n.id,n.oldBlockSettings),e()},n.id)}}(),redo:function(){return function(){}}()},removeBlockEmptyHistoryAction:{act:"removeBlockEmptyWithoutWidgets",undo:function(){return function(t,n,o){var e=o(),i=n.oldBlockSettings.fluid?"block-empty":"block-empty-fluid";return t.__addBlock(i,n.index,function(){t.__saveBlockSettings(n.id,n.oldBlockSettings),e()},n.id)}}(),redo:function(){return function(n,o,e){return n.__removeBlockWithoutWidgets(t("#"+o.id),e("removeBlockWithoutWidgets.redo"))}}()},removeWidgetHistoryAction:{act:"removeWidget",undo:function(){return function(t,n,o){var e=n.id,i=n.colId,r=n.widgetType,c=n.index,d=n.data,u=n.options,a=o();t.__addWidget({id:e,dropId:i,widgetType:r,data:d,options:u,index:c,notSmartAdj:n.notSmartAdj,forceSave:!0},function(){a()})}}(),redo:function(){return function(n,o,e){var i=o.id,r=o.flFast;return n.__removeWidget(t("#"+i),e(),r,o.flNotRemoveCol,o.notSmartAdj)}}()},setColSizeHistoryAction:{act:"setColSize",undo:function(){return function(o,e,i){e.undoSize=e.prevSize[n.constructor.deviceMode.device].target,e.undoSizeNext=e.prevSize[n.constructor.deviceMode.device].next,o.__setColSize(t("#"+e.id),t("#"+e.nextId),e.undoSize,e.undoSizeNext),"desktop"!==n.constructor.deviceMode.device||o._smartAdjustColSizesOfRow({$row:t("#"+e.id).closest(".ul-row"),cb:i()})}}(),redo:function(){return function(o,e,i){o.__setColSize(t("#"+e.id),t("#"+e.nextId),e.elColSize,e.nextElsColSize),"desktop"!==n.constructor.deviceMode.device||o._smartAdjustColSizesOfRow({$row:t("#"+e.id).closest(".ul-row"),cb:i()})}}()},editCustomColorSchemeHistoryAction:{act:"editCustomColorScheme",undo:function(){return function(t,n,o){var e=o("require");t.$body.trigger("editCustomColorSchemeUndo",{data:n,waitSlot:e})}}(),redo:function(){return function(t,n,o){var e=o("require");t.$body.trigger("editCustomColorSchemeRedo",{data:n,waitSlot:e})}}()},newHistoryHistoryAction:{act:"newHistory",undo:function(){return function(){window.dispatch(window.actions.undo())}}(),redo:function(){return function(t,n,o,e){e||window.dispatch(window.actions.redo())}}()}};return r});
//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map

//# sourceMappingURL=historyActions.js.map
