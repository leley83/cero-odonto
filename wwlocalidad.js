gx.evt.autoSkip=!1;gx.define("wwlocalidad",!1,function(){var n,t;this.ServerClass="wwlocalidad";this.PackageName="com.odontologia";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.e11172_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e15172_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e16172_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,26,27,28,29,30,31];this.GXLastCtrlId=31;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwlocalidad",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridContainer;t.addSingleLineEdit(20,26,"LOCALIDADID","LOCALIDAD","","Localidadid","int",0,"px",8,8,"right",null,[],20,"Localidadid",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(21,27,"LOCALIDADNOMBRE","LOCALIDAD","","Localidadnombre","char",0,"px",20,20,"left",null,[],21,"Localidadnombre",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addSingleLineEdit(22,28,"LOCALIDADPROVINCIA","PROVINCIA","","Localidadprovincia","char",0,"px",20,20,"left",null,[],22,"Localidadprovincia",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(23,29,"LOCALIDADPAIS","PAIS","","Localidadpais","char",0,"px",20,20,"left",null,[],23,"Localidadpais",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit("Update",30,"vUPDATE","","","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"TextActionAttribute",1,"WWTextActionColumn");t.addSingleLineEdit("Delete",31,"vDELETE","","","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"TextActionAttribute",1,"WWTextActionColumn");this.GridContainer.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLETOP",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TITLETEXT",format:0,grid:0,ctrltype:"textblock"};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"BTNINSERT",grid:0,evt:"e11172_client"};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vLOCALIDADNOMBRE",gxz:"ZV11Localidadnombre",gxold:"OV11Localidadnombre",gxvar:"AV11Localidadnombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11Localidadnombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11Localidadnombre=n)},v2c:function(){gx.fn.setControlValue("vLOCALIDADNOMBRE",gx.O.AV11Localidadnombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11Localidadnombre=this.val())},val:function(){return gx.fn.getControlValue("vLOCALIDADNOMBRE")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"GRIDCELL",grid:0};n[19]={id:19,fld:"GRIDTABLE",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[26]={id:26,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDADID",gxz:"Z20Localidadid",gxold:"O20Localidadid",gxvar:"A20Localidadid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A20Localidadid=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z20Localidadid=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("LOCALIDADID",n||gx.fn.currentGridRowImpl(25),gx.O.A20Localidadid,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A20Localidadid=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("LOCALIDADID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};n[27]={id:27,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDADNOMBRE",gxz:"Z21Localidadnombre",gxold:"O21Localidadnombre",gxvar:"A21Localidadnombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A21Localidadnombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z21Localidadnombre=n)},v2c:function(n){gx.fn.setGridControlValue("LOCALIDADNOMBRE",n||gx.fn.currentGridRowImpl(25),gx.O.A21Localidadnombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A21Localidadnombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("LOCALIDADNOMBRE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDADPROVINCIA",gxz:"Z22Localidadprovincia",gxold:"O22Localidadprovincia",gxvar:"A22Localidadprovincia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A22Localidadprovincia=n)},v2z:function(n){n!==undefined&&(gx.O.Z22Localidadprovincia=n)},v2c:function(n){gx.fn.setGridControlValue("LOCALIDADPROVINCIA",n||gx.fn.currentGridRowImpl(25),gx.O.A22Localidadprovincia,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A22Localidadprovincia=this.val(n))},val:function(n){return gx.fn.getGridControlValue("LOCALIDADPROVINCIA",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDADPAIS",gxz:"Z23Localidadpais",gxold:"O23Localidadpais",gxvar:"A23Localidadpais",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A23Localidadpais=n)},v2z:function(n){n!==undefined&&(gx.O.Z23Localidadpais=n)},v2c:function(n){gx.fn.setGridControlValue("LOCALIDADPAIS",n||gx.fn.currentGridRowImpl(25),gx.O.A23Localidadpais,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A23Localidadpais=this.val(n))},val:function(n){return gx.fn.getGridControlValue("LOCALIDADPAIS",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[30]={id:30,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV12Update",gxold:"OV12Update",gxvar:"AV12Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV12Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(25),gx.O.AV12Update,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV12Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[31]={id:31,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV13Delete",gxold:"OV13Delete",gxvar:"AV13Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV13Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(25),gx.O.AV13Delete,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV13Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};this.AV11Localidadnombre="";this.ZV11Localidadnombre="";this.OV11Localidadnombre="";this.Z20Localidadid=0;this.O20Localidadid=0;this.Z21Localidadnombre="";this.O21Localidadnombre="";this.Z22Localidadprovincia="";this.O22Localidadprovincia="";this.Z23Localidadpais="";this.O23Localidadpais="";this.ZV12Update="";this.OV12Update="";this.ZV13Delete="";this.OV13Delete="";this.AV11Localidadnombre="";this.A20Localidadid=0;this.A21Localidadnombre="";this.A22Localidadprovincia="";this.A23Localidadpais="";this.AV12Update="";this.AV13Delete="";this.Events={e11172_client:["'DOINSERT'",!0],e15172_client:["ENTER",!0],e16172_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11Localidadnombre",fld:"vLOCALIDADNOMBRE",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.START=[[{av:"AV17Pgmname",fld:"vPGMNAME",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""},{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A20Localidadid",fld:"LOCALIDADID",pic:"ZZZZZZZ9",hsh:!0}],[{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"},{av:'gx.fn.getCtrlProperty("LOCALIDADNOMBRE","Link")',ctrl:"LOCALIDADNOMBRE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A20Localidadid",fld:"LOCALIDADID",pic:"ZZZZZZZ9",hsh:!0}],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11Localidadnombre",fld:"vLOCALIDADNOMBRE",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11Localidadnombre",fld:"vLOCALIDADNOMBRE",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11Localidadnombre",fld:"vLOCALIDADNOMBRE",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11Localidadnombre",fld:"vLOCALIDADNOMBRE",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];t.addRefreshingParm({rfrProp:"Rows",gxGrid:"Grid"});t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar({rfrVar:"AV12Update",rfrProp:"Value",gxAttId:"Update"});t.addRefreshingVar({rfrVar:"AV13Delete",rfrProp:"Value",gxAttId:"Delete"});t.addRefreshingParm(this.GXValidFnc[16]);t.addRefreshingParm({rfrVar:"AV12Update",rfrProp:"Value",gxAttId:"Update"});t.addRefreshingParm({rfrVar:"AV13Delete",rfrProp:"Value",gxAttId:"Delete"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwlocalidad)})