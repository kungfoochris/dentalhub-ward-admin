const axios = require('axios');

export default {
    listProfile({commit}){
        axios.defaults.headers.common['authorization'] = 'JWT '+ this.state.token
        return axios
          .get('http://localhost:3000/api/v1/profile', {})
          .then(response => {
              commit('setProfile',response.data)
          })
          .catch(error=>{
            if (error.response.status==401){
              window.localhost.replace("/logout");
            }
          })
      },

      updateProfile({state,commit}, updateprofile){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .put('http://localhost:3000/api/v1/profile/update', updateprofile)
        .then(response => {
          commit("setSuccessMessage",'success');
          state.profile.push(response.data)
        })
        .catch(error => {
          if(error){
            commit("setErrorMessage", 'errormessage');
            // commit("setMessage", error.response.data.message);
          }
        })
      },

      listUsers({commit}){
        axios.defaults.headers.common['authorization'] = 'JWT '+ this.state.token
        return axios
          .get('http://localhost:3000/api/v1/users', {})
          .then(response => {
              commit('setUsers',response.data);
          })
      },

      createUser({state,commit}, user_obj){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .post('http://localhost:3000/api/v1/users', user_obj)
        .then(response => {
          if(response.status==200){
            commit("setSuccessMessage",'success')
            // commit("setUserobjet",response.data);
            state.users.push(response.data);
          }
        })
        .catch(error => {
          if(error){
            commit("setErrorMessage", 'errormessage')
            commit("setMessage", error.response.data.message);
          }
        })
      },

      updateUser({state,commit}, user_obj){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .put('http://localhost:3000/api/v1/users/'+user_obj.id, user_obj)
        .then(response => {
          if(response.status==200){
            commit("setSuccessMessage",'success')
            state.users.push(response.data);
          }
        })
        .catch(error => {
          if(error){
            commit("setErrorMessage", 'errormessage')
            commit("setMessage", error.response.data.message);
          }
        })
      },

      deleteUser({state,commit},user_id){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .delete('http://localhost:3000/api/v1/users/'+user_id)
        .then(response => {
          if(response.status==204){
            commit("setSuccessMessage",'success')
            state.users.push(response.data);
          }
        })
      },
      
      listGeography({commit}){
        axios.defaults.headers.common['authorization'] = 'JWT '+ this.state.token
        return axios
        .get('http://localhost:3000/api/v1/geography', {})
        .then(response => {
          commit('setGeography',response.data);
        })
      },

      createGeography({state,commit}, geography_obj){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .post('http://localhost:3000/api/v1/geography', geography_obj)
        .then(response => {
          commit("setSuccessMessage",'success')
          state.geography.push(response.data);
        })
        .catch(error => {
          if(error){
            commit("setErrorMessage", 'errormessage')
            commit("setMessage", error.response.data.message);
          }
        })
      },

      updateGeography({state,commit}, geography_obj){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .put('http://localhost:3000/api/v1/geography/'+ geography_obj.id, geography_obj)
        .then(response => {
          commit("setSuccessMessage",'success')
          state.geography.push(response.data);
        })
        .catch(error => {
          if(error){
            commit("setErrorMessage", 'errormessage')
            commit("setMessage", error.response.data.message);
          }
        })
      },

      deleteGeography({state,commit},geography_id){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .delete('http://localhost:3000/api/v1/geography/'+geography_id)
        .then(response => {
          if(response.status==204){
            commit("setSuccessMessage",'success')
            state.geography.push(response.data);
          }
        })
      },

      listActivity({commit}){
        axios.defaults.headers.common['authorization'] = 'JWT '+ this.state.token
        return axios
        .get('http://localhost:3000/api/v1/activities', {})
        .then(response => {
          commit('setActivity',response.data);
        })
      },

      createActivity({state,commit}, activity_obj){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .post('http://localhost:3000/api/v1/activities', activity_obj)
        .then(response => {
          commit("setSuccessMessage",'success')
          state.activities.push(response.data);
        })
        .catch(error => {
          if(error){
            commit("setErrorMessage", 'errormessage')
            commit("setMessage", error.response.data.message);
          }
        })
      },

      UpdateActivity({state,commit}, activity_obj){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .put('http://localhost:3000/api/v1/activities/'+activity_obj.id, activity_obj)
        .then(response => {
          commit("setSuccessMessage",'success')
          state.activities.push(response.data);
        })
        .catch(error => {
          if(error){
            commit("setErrorMessage", 'errormessage')
            commit("setMessage", error.response.data.message);
          }
        })
      },

      deleteActivity({state,commit},activity_id){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .delete('http://localhost:3000/api/v1/activities/'+activity_id)
        .then(response => {
          if(response.status==204){
            commit("setSuccessMessage",'success')
            state.geography.push(response.data);
          }
        })
      },

      changePassword({commit}, password_obj){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .post('http://localhost:3000/api/v1/users/changepassword', password_obj)
        .then(response => {
          if(response.status==200){
          commit("setSuccessMessage",'success');
          }
        })
        .catch(error => {
          if(error){
            commit("setErrorMessage", 'errormessage')
            commit("setMessage", error.response.data.message);
          }
        })
      },


      listVisualization({commit}){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .get('http://localhost:3000/api/v1/visualization/locations ',)
        .then(response => {
          if(response.status==200){
          commit("setVisualization",response.data);
          }
      })
    },

    listVisualizationChart({commit}){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .get('http://localhost:3000/api/v1/visualizations ',)
      .then(response => {
        if(response.status==200){
          commit("setVisualization1",response.data);
        }
      })
    },

    listAddress({commit}){
      return axios
      .get('http://localhost:3000/api/v1/addresses ',)
      .then(response => {
        if(response.status==200){
          commit("setAddresses",response.data);
        }
      })
    },

    listRole({commit}){
      return axios
      .get('http://localhost:3000/api/v1/roles ',)
      .then(response => {
        if(response.status==200){
          commit("setRole",response.data);
        }
      })
    },

    listLoginVisualization({commit}){
      return axios
      .get('http://localhost:3000/api/v1/loginvisualization ',)
      .then(response => {
        if(response.status==200){
          commit("setLoginVisualization",response.data);
        }
      })
    },

    listTreatmentBarVisualization({commit}){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .get('http://localhost:3000/api/v1/treatmentnargraph ',)
      .then(response => {
        if(response.status==200){
          commit("setTreatmentBarVisualization",response.data);
        }
      })
    },

    listTreatmentTable({commit}){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .get('http://localhost:3000/api/v1/treatment ',)
      .then(response => {
        if(response.status==200){
          commit("setTreatmentTable",response.data);
        }
      })
    },


    // exportData(){
    //   axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
    //   return axios
    //   .get('http://localhost:3000/api/v1/bargraphdata',)
    //   .then(response => {
    //     if(response.status==200){
          
    //     }
    //   })
    // }


}
