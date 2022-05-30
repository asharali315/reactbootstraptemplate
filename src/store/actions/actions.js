import api from '../../common/api'


export const GENERALACTIONS = {
    CREATE : "CREATE",
    DELETE : "DELETE",
    FETCH_ALL: "FETCH_ALL",
    UPDATE : "UPDATE",
    FETCH_BY_ID:"FETCH_BY_ID"
}

export const fetchAll =  dispatch =>{
  api.generalApi().fetchAll()
  .then(res=>{
      dispatch({
          type : GENERALACTIONS.Get,
          payload: res.data
      })
  })
  .catch(err => console.log(err))
}

export const create = saveData => dispatch =>{
    api.generalApi().create(saveData)
    .then(res=>{
        dispatch({
            type:GENERALACTIONS.CREATE,
            payload: res.data
        })
    })
}

export const  update = (updateData)=> dispatch =>{
    api.generalApi().update(updateData.id,updateData)
    .then(res=>{
        dispatch({
            type : GENERALACTIONS.UPDATE,
            payload : res.data
        })
    })
}

export const fetchById = (id) => dispatch =>{
    api.generalApi().fetchById(id)
    .then(res=>{
        dispatch({
            type : GENERALACTIONS.FETCH_BY_ID,
            payload : id
        })
    })
}


