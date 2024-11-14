import { createStore } from 'redux'
import axios from 'axios'
import { applyMiddleware } from 'redux' 




const initialState = {
    loading:false,
    users:[],
    error:''
    
}

const fetchUsersRequest= ()=>{
    return{
        type:'FetchUsersRequest'
    }
}
const fetchUsersSuccess = (users)=>{
    return{
        type:'FetchUsersSuccess',
        payload:users,
       
    }
}
const fetchUsersFailure=(error)=>{
    return{
        type:'FetchUsersFailure',
        payload:error,
    }
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FetchUsersRequest':
            return{
                ...state,
                loading:true

            }
        case 'FetchUsersSuccess':
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case 'FetchUsersFailure':
            return{
                loading:false,
                error:action.payload,
                users:[]
            }
    }
}

const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users = response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })

    }
}

const store = createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=>console.log(store.getState()));

store.dispatch(fetchUsers())