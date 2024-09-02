sap.ui.define([
	 "sap/ui/core/mvc/Controller",
	 "sap/ui/model/json/JSONModel",
	 "emc/fin/ar/util/service",
	 "sap/m/MessageToast"
	],
	function(Controller,JSONModel,Service,MessageToast){
		return Controller.extend("emc.fin.ar.controller.Master",{
			onInit:function(){
              this.oLocalModel = new JSONModel({
			    "newVendor": {
					"companyName": " ",
					"contactName": " ",
					"lastName": " ",
					"website": " ",
					"email": " ",
					"status": "A",
					"regDate": new Date(),
				}
			  });
			  this.getView().setModel(this.oLocalModel);
			  var that = this;
              Service.callService("/vendors", "GET", null).then(
				function(data){
					that.oLocalModel.setProperty("/vendors", data);
				}
			  );
			    
			},
			onSave:function(){
				var that = this;
				Service.callService("/vendor", "POST", this.oLocalModel.getProperty("/newVendor")).then(
					function(data){
                      MessageToast.show("Data saved successfully");
					  var that2 = this;
					  Service.callService("/vendors", "GET", null).then(
						function(data){
							that2.oLocalModel.setProperty("/vendors", data);
						}
					  );
					}
				  );
			}
		});
	});