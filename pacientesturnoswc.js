gx.evt.autoSkip=!1;gx.define("pacientesturnoswc",!0,function(n){var t,i;this.ServerClass="pacientesturnoswc";this.PackageName="com.odontologia";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV6Pacientesdni=gx.fn.getIntegerValue("vPACIENTESDNI",".");this.AV6Pacientesdni=gx.fn.getIntegerValue("vPACIENTESDNI",".")};this.Valid_Practicascodigo=function(){var n=gx.fn.currentGridRowImpl(20);return this.validCliEvt("Valid_Practicascodigo",20,function(){try{if(gx.fn.currentGridRowImpl(20)===0)return!0;var n=gx.util.balloon.getNew("PRACTICASCODIGO",gx.fn.currentGridRowImpl(20));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Estadoid=function(){var n=gx.fn.currentGridRowImpl(20);return this.validCliEvt("Valid_Estadoid",20,function(){try{if(gx.fn.currentGridRowImpl(20)===0)return!0;var n=gx.util.balloon.getNew("ESTADOID",gx.fn.currentGridRowImpl(20));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e110t2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e140t2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e150t2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,21,22,23,24,25,26,27,28,29,30,31,32];this.GXLastCtrlId=32;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",20,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"pacientesturnoswc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit(16,21,"TURNOSID","ID","","Turnosid","int",0,"px",8,8,"right",null,[],16,"Turnosid",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");i.addSingleLineEdit(17,22,"TURNOSFECHA","FECHA","","Turnosfecha","dtime",0,"px",14,14,"right",null,[],17,"Turnosfecha",!0,5,!1,!1,"DescriptionAttribute",1,"WWColumn");i.addSingleLineEdit(12,23,"PRACTICASCODIGO","PRACTICA CODIGO","","Practicascodigo","svchar",0,"px",40,40,"left",null,[],12,"Practicascodigo",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");i.addSingleLineEdit(13,24,"PRACTICASNOMBRE","PRACTICA NOMBRE ","","Practicasnombre","char",0,"px",20,20,"left",null,[],13,"Practicasnombre",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");i.addSingleLineEdit(28,25,"ESTADOID","ESTADO ID","","Estadoid","int",0,"px",8,8,"right",null,[],28,"Estadoid",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");i.addSingleLineEdit(29,26,"ESTADODESCRIPCION","ESTADO DESCRIPCION","","Estadodescripcion","char",0,"px",20,20,"left",null,[],29,"Estadodescripcion",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");i.addSingleLineEdit("Update",27,"vUPDATE","","","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"TextActionAttribute",1,"WWTextActionColumn");i.addSingleLineEdit("Delete",28,"vDELETE","","","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"TextActionAttribute",1,"WWTextActionColumn");this.GridContainer.emptyText="";this.setGrid(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLETOP",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"BTNINSERT",grid:0,evt:"e110t2_client"};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"GRIDCELL",grid:0};t[14]={id:14,fld:"GRIDTABLE",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[21]={id:21,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TURNOSID",gxz:"Z16Turnosid",gxold:"O16Turnosid",gxvar:"A16Turnosid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A16Turnosid=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z16Turnosid=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TURNOSID",n||gx.fn.currentGridRowImpl(20),gx.O.A16Turnosid,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A16Turnosid=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TURNOSID",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TURNOSFECHA",gxz:"Z17Turnosfecha",gxold:"O17Turnosfecha",gxvar:"A17Turnosfecha",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A17Turnosfecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z17Turnosfecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("TURNOSFECHA",n||gx.fn.currentGridRowImpl(20),gx.O.A17Turnosfecha,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A17Turnosfecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("TURNOSFECHA",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:this.Valid_Practicascodigo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRACTICASCODIGO",gxz:"Z12Practicascodigo",gxold:"O12Practicascodigo",gxvar:"A12Practicascodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A12Practicascodigo=n)},v2z:function(n){n!==undefined&&(gx.O.Z12Practicascodigo=n)},v2c:function(n){gx.fn.setGridControlValue("PRACTICASCODIGO",n||gx.fn.currentGridRowImpl(20),gx.O.A12Practicascodigo,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A12Practicascodigo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PRACTICASCODIGO",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRACTICASNOMBRE",gxz:"Z13Practicasnombre",gxold:"O13Practicasnombre",gxvar:"A13Practicasnombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A13Practicasnombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z13Practicasnombre=n)},v2c:function(n){gx.fn.setGridControlValue("PRACTICASNOMBRE",n||gx.fn.currentGridRowImpl(20),gx.O.A13Practicasnombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A13Practicasnombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PRACTICASNOMBRE",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:this.Valid_Estadoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ESTADOID",gxz:"Z28Estadoid",gxold:"O28Estadoid",gxvar:"A28Estadoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A28Estadoid=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z28Estadoid=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ESTADOID",n||gx.fn.currentGridRowImpl(20),gx.O.A28Estadoid,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A28Estadoid=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ESTADOID",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[26]={id:26,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ESTADODESCRIPCION",gxz:"Z29Estadodescripcion",gxold:"O29Estadodescripcion",gxvar:"A29Estadodescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A29Estadodescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z29Estadodescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("ESTADODESCRIPCION",n||gx.fn.currentGridRowImpl(20),gx.O.A29Estadodescripcion,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A29Estadodescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ESTADODESCRIPCION",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[27]={id:27,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV13Update",gxold:"OV13Update",gxvar:"AV13Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV13Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(20),gx.O.AV13Update,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV13Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV14Delete",gxold:"OV14Delete",gxvar:"AV14Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV14Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(20),gx.O.AV14Delete,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV14Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PACIENTESDNI",gxz:"Z1Pacientesdni",gxold:"O1Pacientesdni",gxvar:"A1Pacientesdni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1Pacientesdni=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1Pacientesdni=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PACIENTESDNI",gx.O.A1Pacientesdni,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1Pacientesdni=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PACIENTESDNI",".")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});this.Z16Turnosid=0;this.O16Turnosid=0;this.Z17Turnosfecha=gx.date.nullDate();this.O17Turnosfecha=gx.date.nullDate();this.Z12Practicascodigo="";this.O12Practicascodigo="";this.Z13Practicasnombre="";this.O13Practicasnombre="";this.Z28Estadoid=0;this.O28Estadoid=0;this.Z29Estadodescripcion="";this.O29Estadodescripcion="";this.ZV13Update="";this.OV13Update="";this.ZV14Delete="";this.OV14Delete="";this.A1Pacientesdni=0;this.Z1Pacientesdni=0;this.O1Pacientesdni=0;this.A1Pacientesdni=0;this.AV6Pacientesdni=0;this.A16Turnosid=0;this.A17Turnosfecha=gx.date.nullDate();this.A12Practicascodigo="";this.A13Practicasnombre="";this.A28Estadoid=0;this.A29Estadodescripcion="";this.AV13Update="";this.AV14Delete="";this.Events={e110t2_client:["'DOINSERT'",!0],e140t2_client:["ENTER",!0],e150t2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6Pacientesdni",fld:"vPACIENTESDNI",pic:"ZZZZZZZ9"},{av:"AV13Update",fld:"vUPDATE",pic:""},{av:"AV14Delete",fld:"vDELETE",pic:""},{av:"sPrefix"}],[]];this.EvtParms.START=[[{av:"AV17Pgmname",fld:"vPGMNAME",pic:""},{av:"AV6Pacientesdni",fld:"vPACIENTESDNI",pic:"ZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:"AV13Update",fld:"vUPDATE",pic:""},{av:"AV14Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("PACIENTESDNI","Visible")',ctrl:"PACIENTESDNI",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A16Turnosid",fld:"TURNOSID",pic:"ZZZZZZZ9",hsh:!0},{av:"A12Practicascodigo",fld:"PRACTICASCODIGO",pic:""},{av:"A28Estadoid",fld:"ESTADOID",pic:"ZZZZZZZ9"}],[{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"},{av:'gx.fn.getCtrlProperty("TURNOSFECHA","Link")',ctrl:"TURNOSFECHA",prop:"Link"},{av:'gx.fn.getCtrlProperty("PRACTICASNOMBRE","Link")',ctrl:"PRACTICASNOMBRE",prop:"Link"},{av:'gx.fn.getCtrlProperty("ESTADODESCRIPCION","Link")',ctrl:"ESTADODESCRIPCION",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A16Turnosid",fld:"TURNOSID",pic:"ZZZZZZZ9",hsh:!0}],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6Pacientesdni",fld:"vPACIENTESDNI",pic:"ZZZZZZZ9"},{av:"AV13Update",fld:"vUPDATE",pic:""},{av:"AV14Delete",fld:"vDELETE",pic:""},{av:"sPrefix"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6Pacientesdni",fld:"vPACIENTESDNI",pic:"ZZZZZZZ9"},{av:"AV13Update",fld:"vUPDATE",pic:""},{av:"AV14Delete",fld:"vDELETE",pic:""},{av:"sPrefix"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6Pacientesdni",fld:"vPACIENTESDNI",pic:"ZZZZZZZ9"},{av:"AV13Update",fld:"vUPDATE",pic:""},{av:"AV14Delete",fld:"vDELETE",pic:""},{av:"sPrefix"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6Pacientesdni",fld:"vPACIENTESDNI",pic:"ZZZZZZZ9"},{av:"AV13Update",fld:"vUPDATE",pic:""},{av:"AV14Delete",fld:"vDELETE",pic:""},{av:"sPrefix"}],[]];this.EvtParms.VALID_PRACTICASCODIGO=[[],[]];this.EvtParms.VALID_ESTADOID=[[],[]];this.setVCMap("AV6Pacientesdni","vPACIENTESDNI",0,"int",8,0);this.setVCMap("AV6Pacientesdni","vPACIENTESDNI",0,"int",8,0);this.setVCMap("AV6Pacientesdni","vPACIENTESDNI",0,"int",8,0);i.addRefreshingParm({rfrProp:"Rows",gxGrid:"Grid"});i.addRefreshingVar({rfrVar:"AV6Pacientesdni"});i.addRefreshingVar({rfrVar:"AV13Update",rfrProp:"Value",gxAttId:"Update"});i.addRefreshingVar({rfrVar:"AV14Delete",rfrProp:"Value",gxAttId:"Delete"});i.addRefreshingParm({rfrVar:"AV6Pacientesdni"});i.addRefreshingParm({rfrVar:"AV13Update",rfrProp:"Value",gxAttId:"Update"});i.addRefreshingParm({rfrVar:"AV14Delete",rfrProp:"Value",gxAttId:"Delete"});this.Initialize()})