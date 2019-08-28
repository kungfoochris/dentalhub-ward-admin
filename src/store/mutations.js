export default{

	setToken(state, token){
		state.token = token;
	},
	setProfile(state, profile){
		state.profile = profile;
	},

	setUsers(state, users){
		state.users = users;
	},

	setSuccessMessage(state,successmessage){
		state.successmessage = successmessage;
	},

	setErrorMessage(state,errormessage){
		state.errormessage = errormessage;
	},

	setMessage(state,message){
		state.message = message;
	},

	setGeography(state,geography){
		state.geography = geography;
	},

	setActivity(state, activities){
		state.activities = activities;
	},
	setVisualization(state, visualizations){
		state.visualizations = visualizations;
	},
	setVisualization1(state, visualizations1){
		state.visualizations1 = visualizations1;
	},
	setUserobjet(state, user_obj){
		state.user_obj = user_obj;
	},
	setAdminUsername(state, adminusername){
		state.adminusername = adminusername;
	},
	setWards(state, wards_obj){
		state.wards_obj = wards_obj;
	},
	setAddresses(state, address_obj){
		state.address_obj = address_obj;
	},
	setRole(state, role_obj){
		state.role_obj = role_obj;
	},
	setLoginVisualization(state,loginvisualization){
		state.loginvisualization = loginvisualization;
	},

	setTreatmentBarVisualization(state,treatmentnargraph){
		state.treatmentnargraph = treatmentnargraph;
	},
	
	setTreatmentTable(state,treatmenttable){
		state.treatmenttable = treatmenttable;
	},

}
