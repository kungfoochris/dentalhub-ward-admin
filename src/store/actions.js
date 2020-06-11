const axios = require('axios');

export default {
    listProfile({commit}){
        axios.defaults.headers.common['authorization'] = 'JWT '+ this.state.token
        return axios
          .get('http://18.139.218.40:6061/api/v1/profile', {})
          .then(response => {
              commit('setProfile',response.data)
          })
          .catch(error=>{
            if (error.response.status==401){
              window.reload("/logout");
            }
          })
      },

      updateProfile({state,commit}, updateprofile){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .put('http://18.139.218.40:6061/api/v1/profile/update', updateprofile)
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
          .get('http://18.139.218.40:6061/api/v1/users', {})
          .then(response => {
              commit('setUsers',response.data);
          })
      },

      createUser({state,commit}, user_obj){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .post('http://18.139.218.40:6061/api/v1/users', user_obj)
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
        .put('http://18.139.218.40:6061/api/v1/users/'+user_obj.id, user_obj)
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
        .delete('http://18.139.218.40:6061/api/v1/users/'+user_id)
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
        .get('http://18.139.218.40:6061/api/v1/geography', {})
        .then(response => {
          commit('setGeography',response.data);
        })
      },

      createGeography({state,commit}, geography_obj){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .post('http://18.139.218.40:6061/api/v1/geography', geography_obj)
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
        .put('http://18.139.218.40:6061/api/v1/geography/'+ geography_obj.id, geography_obj)
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
        .delete('http://18.139.218.40:6061/api/v1/geography/'+geography_id)
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
        .get('http://18.139.218.40:6061/api/v1/activities', {})
        .then(response => {
          commit('setActivity',response.data);
        })
      },

      createActivity({state,commit}, activity_obj){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .post('http://18.139.218.40:6061/api/v1/activities', activity_obj)
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
        .put('http://18.139.218.40:6061/api/v1/activities/'+activity_obj.id, activity_obj)
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
        .delete('http://18.139.218.40:6061/api/v1/activities/'+activity_id)
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
        .post('http://18.139.218.40:6061/api/v1/users/changepassword', password_obj)
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


      listGenderChart({commit}){
        axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
        return axios
        .get('http://18.139.218.40:6061/api/v1/basicbargraph',)
        .then(response => {
          if(response.status==200){
          commit("setGenderChart",response.data);
          }
      })
    },

    CreateGenderChart({commit},obj){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .post('http://18.139.218.40:6061/api/v1/basicbargraphfilter',obj)
      .then(response => {
        if(response.status==200){
          commit("setGenderChart",response.data);
        }
    })
  },

    listVisualizationChart({commit}){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .get('http://18.139.218.40:6061/api/v1/visualizations ',)
      .then(response => {
        if(response.status==200){
          commit("setVisualization1",response.data);
        }
      })
    },

    listAddress({commit}){
      return axios
      .get('http://18.139.218.40:6061/api/v1/addresses ',)
      .then(response => {
        if(response.status==200){
          commit("setAddresses",response.data);
        }
      })
    },

    listRole({commit}){
      return axios
      .get('http://18.139.218.40:6061/api/v1/roles ',)
      .then(response => {
        if(response.status==200){
          commit("setRole",response.data);
        }
      })
    },

    listLoginVisualization({commit}){
      return axios
      .get('http://18.139.218.40:6061/api/v1/loginvisualization ',)
      .then(response => {
        if(response.status==200){
          commit("setLoginVisualization",response.data);
        }
      })
    },

    listLoginVisualization1({commit}){
      return axios
      .get('http://18.139.218.40:6061/api/v1/loginvisualization1',)
      .then(response => {
        if(response.status==200){
          commit("setLoginVisualization1",response.data);
        }
      })
    },

    listTreatmentBarVisualization({commit}){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .get('http://18.139.218.40:6061/api/v1/treatmentnargraph ',)
      .then(response => {
        if(response.status==200){
          commit("setTreatmentBarVisualization",response.data);
        }
      })
    },

    listTreatmentTable({commit}){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .get('http://18.139.218.40:6061/api/v1/wardtreatmenttablevisualizaation',)
      .then(response => {
        if(response.status==200){
          commit("setTreatmentTable",response.data);
        }
      })
    },

    CreateTreatmentTable({commit},obj){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .post('http://18.139.218.40:6061/api/v1/wardtreatmenttablevisualizaation',obj)
      .then(response => {
        if(response.status==200){
          commit("setTreatmentTable",response.data);
        }
    })
  },


    listBasicTable({commit}){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .get('http://18.139.218.40:6061/api/v1/wardtablevisualization',)
      .then(response => {
        if(response.status==200){
          commit("setBasicTable",response.data);
        }
      })
    },

    CreateBasicTable({commit},obj){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .post('http://18.139.218.40:6061/api/v1/wardtablevisualization',obj)
      .then(response => {
        if(response.status==200){
          commit("setBasicTable",response.data);
        }
    })
  },


    listWardSettingGraphs({commit}){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .get('http://18.139.218.40:6061/api/v1/wardsettingsgraph',)
      .then(response => {
        if(response.status==200){
          commit("setWardSettingGraphs",response.data);
        }
      })
    },

    CreateWardSettingGraphs({commit},obj){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .post('http://18.139.218.40:6061/api/v1/wardsettingsgraphfilter',obj)
      .then(response => {
        if(response.status==200){
          commit("setWardSettingGraphs",response.data);
        }
    })
  },






    listWardTreatmentGraphs({commit}){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .get('http://18.139.218.40:6061/api/v1/wardtreatmentgraph',)
      .then(response => {
        if(response.status==200){
          commit("setWardTreatmentGraphs",response.data);
        }
      })
    },

    CreateWardTreatmentGraphs({commit},obj){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .post('http://18.139.218.40:6061/api/v1/wardtreatmentgraphfilter',obj)
      .then(response => {
        if(response.status==200){
          commit("setWardTreatmentGraphs",response.data);
        }
    })
  },


    listWardUserLineGraphs({commit}){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .get('http://18.139.218.40:6061/api/v1/waruserlinechart',)
      .then(response => {
        if(response.status==200){
          commit("setWardUserLineGraphs",response.data);
        }
      })
    },

    listWardStrategicData({commit}){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .get('http://18.139.218.40:6061/api/v1/wardstrategicdata',)
      .then(response => {
        if(response.status==200){
          commit("setWardStrategicData",response.data);
        }
      })
    },

    CreateWardStrategicData({commit},obj){
      axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
      return axios
      .post('http://18.139.218.40:6061/api/v1/wardstrategicdata',obj)
      .then(response => {
        if(response.status==200){
          commit("setErrorMessage", "")
          commit("setSuccessMessage",'success')
          commit("setWardStrategicData",response.data);
        }
    })
    .catch(error => {
      if(error){
        commit("setErrorMessage", 'errormessage')
        commit("setMessage", error.response.data.message);
      }
    })
  },





    listActivitie({commit}){
      axios.defaults.headers.common['authorization'] = 'JWT '+ this.state.token
      return axios
        .get('http://18.139.218.40:6061/api/v1/events', {})
        .then(response => {
            commit('setActivities',response.data);
        })
    },


    // exportData(){
    //   axios.defaults.headers.common['authorization']  = 'JWT ' + this.state.token
    //   return axios
    //   .get('http://18.139.218.40:6061/api/v1/bargraphdata',)
    //   .then(response => {
    //     if(response.status==200){

    //     }
    //   })
    // }


}
