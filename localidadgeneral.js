gx.evt.autoSkip=!1;gx.define("localidadgeneral",!0,function(n){this.ServerClass="localidadgeneral";this.PackageName="com.odontologia";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Localidadid=function(){return this.validCliEvt("Valid_Localidadid",0,function(){try{var n=gx.util.balloon.getNew("LOCALIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11181_client=function(){return this.clearMessages(),this.call("com.odontologia.localidad",["UPD",this.A20Localidadid],null,["Mode","Localidadid"]),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e12181_client=function(){return this.clearMessages(),this.call("com.odontologia.localidad",["DLT",this.A20Localidadid],null,["Mode","Localidadid"]),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e15182_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16182_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];this.GXLastCtrlId=33;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"BTNUPDATE",grid:0,evt:"e11181_client"};t[9]={id:9,fld:"",grid:0};t[10]={id:10,fld:"BTNDELETE",grid:0,evt:"e12181_client"};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"ATTRIBUTESTABLE",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Localidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDADID",gxz:"Z20Localidadid",gxold:"O20Localidadid",gxvar:"A20Localidadid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A20Localidadid=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z20Localidadid=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("LOCALIDADID",gx.O.A20Localidadid,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A20Localidadid=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("LOCALIDADID",".")},nac:gx.falseFn};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDADNOMBRE",gxz:"Z21Localidadnombre",gxold:"O21Localidadnombre",gxvar:"A21Localidadnombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A21Localidadnombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z21Localidadnombre=n)},v2c:function(){gx.fn.setControlValue("LOCALIDADNOMBRE",gx.O.A21Localidadnombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A21Localidadnombre=this.val())},val:function(){return gx.fn.getControlValue("LOCALIDADNOMBRE")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDADPROVINCIA",gxz:"Z22Localidadprovincia",gxold:"O22Localidadprovincia",gxvar:"A22Localidadprovincia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A22Localidadprovincia=n)},v2z:function(n){n!==undefined&&(gx.O.Z22Localidadprovincia=n)},v2c:function(){gx.fn.setControlValue("LOCALIDADPROVINCIA",gx.O.A22Localidadprovincia,0)},c2v:function(){this.val()!==undefined&&(gx.O.A22Localidadprovincia=this.val())},val:function(){return gx.fn.getControlValue("LOCALIDADPROVINCIA")},nac:gx.falseFn};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDADPAIS",gxz:"Z23Localidadpais",gxold:"O23Localidadpais",gxvar:"A23Localidadpais",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A23Localidadpais=n)},v2z:function(n){n!==undefined&&(gx.O.Z23Localidadpais=n)},v2c:function(){gx.fn.setControlValue("LOCALIDADPAIS",gx.O.A23Localidadpais,0)},c2v:function(){this.val()!==undefined&&(gx.O.A23Localidadpais=this.val())},val:function(){return gx.fn.getControlValue("LOCALIDADPAIS")},nac:gx.falseFn};this.A20Localidadid=0;this.Z20Localidadid=0;this.O20Localidadid=0;this.A21Localidadnombre="";this.Z21Localidadnombre="";this.O21Localidadnombre="";this.A22Localidadprovincia="";this.Z22Localidadprovincia="";this.O22Localidadprovincia="";this.A23Localidadpais="";this.Z23Localidadpais="";this.O23Localidadpais="";this.A20Localidadid=0;this.A21Localidadnombre="";this.A22Localidadprovincia="";this.A23Localidadpais="";this.Events={e15182_client:["ENTER",!0],e16182_client:["CANCEL",!0],e11181_client:["'DOUPDATE'",!1],e12181_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A20Localidadid",fld:"LOCALIDADID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV13Pgmname",fld:"vPGMNAME",pic:""},{av:"AV6Localidadid",fld:"vLOCALIDADID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.LOAD=[[],[]];this.EvtParms["'DOUPDATE'"]=[[{av:"A20Localidadid",fld:"LOCALIDADID",pic:"ZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A20Localidadid",fld:"LOCALIDADID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.VALID_LOCALIDADID=[[],[]];this.Initialize()})