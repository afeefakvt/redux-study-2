import {createStore} from 'redux'
import { combineReducers } from "redux"
// import { createLogger } from 'redux-logger'
// const logger = redux.createLogger()
import { applyMiddleware } from 'redux'


const buyCake = 'buyCake'

function buycake(){
    return{
        type:buyCake,
        info:'first redux action'
    }
}

const initialState = {
    numberofcakes : 10

}

const reducer  =(state=initialState,action)=>{
    switch(action.type){
        case buyCake:
            return{
                ...state,
                numberofcakes :state.numberofcakes-1
            }
        default:
            return state
    }


}



const store = createStore(reducer)

console.log('initialState:' ,store.getState());
const unsubscribe  = store.subscribe(()=>console.log('updatedstate:',store.getState()));
store.dispatch(buycake())
store.dispatch(buycake())

unsubscribe()



// import {createStore} from 'redux'

// const buyCake = 'buyCake'

// function buycake(){
//     return{
//         type:buyCake,
//         info:'first redux action'
//     }
// }
// function buyicecream(){
//     return{
//         type:'buyIcecream'
//     }
// }

// const initialState = {
//     numberofcakes : 10,
//     numberoficecream  :20

// }

// const reducer  =(state=initialState,action)=>{
//     switch(action.type){
//         case buyCake:
//             return{
//                 ...state,
//                 numberofcakes :state.numberofcakes-1
//             }
//         case 'buyIcecream':
//             return{
//                 ...state,
//                 numberoficecream:state.numberoficecream-1
//             }
//         default:
//             return state
//     }


// }

// const store = createStore(reducer)

// console.log('initialState:' ,store.getState());
// const unsubscribe  = store.subscribe(()=>console.log('updatedstate:',store.getState()));
// store.dispatch(buycake())
// store.dispatch(buycake())
// store.dispatch(buyicecream())

// unsubscribe()

//in large applicatuons with so many reducers above method will be difficult ,so we can create multiple reducers and combine them using combinereducer method



//combine reducer
// const initialCakestate={
//     numberofcakes:10
// }

// const initialIcecreamstate = {
//     numberoficecreams : 20
// }

// function buycake  (){
//     return{
//         type:'Buycake'
//     }
// }

// function buyicecream(){
//     return{
//         type:'Buyicecream'
//     }
// }

// const cakereducer = (state = initialCakestate,action)=>{
//     switch(action.type){
//         case 'Buycake':
//             return{
//                 ...state,
//                 numberofcakes:state.numberofcakes-1

//             }
//         default:
//             return state
//     }

// }
// const icecreamreducer = (state=initialIcecreamstate,action)=>{
//     switch(action.type){
//         case 'Buyicecream':
//             return{
//                 ...state,
//                 numberoficecreams:state.numberoficecreams-1
//             }
//         default:
//             return state
//     }
// }

// const rootreducer = combineReducers({
//     cake:cakereducer,
//     icecream:icecreamreducer
// })

// const store = createStore(rootreducer)


// console.log("initial state:",store.getState());
// const unsubscribe = store.subscribe(()=>console.log('updated state:',store.getState()));

// store.dispatch(buycake())
// store.dispatch(buycake())
// store.dispatch(buycake())
// store.dispatch(buyicecream())
// store.dispatch(buyicecream())

// unsubscribe()



//middlewares

// import {createStore} from 'redux'
// import { combineReducers } from "redux"
// import reduxLogger from 'redux-logger'
// const {createLogger} = reduxLogger
// const logger = createLogger()
// import { applyMiddleware } from 'redux'

// const initialCakestate={
//     numberofcakes:10
// }

// const initialIcecreamstate = {
//     numberoficecreams : 20
// }

// function buycake  (){
//     return{
//         type:'Buycake'
//     }
// }

// function buyicecream(){
//     return{
//         type:'Buyicecream'
//     }
// }

// const cakereducer = (state = initialCakestate,action)=>{
//     switch(action.type){
//         case 'Buycake':
//             return{
//                 ...state,
//                 numberofcakes:state.numberofcakes-1

//             }
//         default:
//             return state
//     }

// }
// const icecreamreducer = (state=initialIcecreamstate,action)=>{
//     switch(action.type){
//         case 'Buyicecream':
//             return{
//                 ...state,
//                 numberoficecreams:state.numberoficecreams-1
//             }
//         default:
//             return state
//     }
// }

// const rootreducer = combineReducers({
//     cake:cakereducer,
//     icecream:icecreamreducer
// })

// const store = createStore(rootreducer,applyMiddleware(logger))


// console.log("initial state:",store.getState());
// const unsubscribe = store.subscribe(()=>{});

// store.dispatch(buycake())
// store.dispatch(buycake())
// store.dispatch(buycake())
// store.dispatch(buyicecream())
// store.dispatch(buyicecream())

// unsubscribe()
