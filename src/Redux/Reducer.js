// import * as type from "./TypeDactions"

// const initState = {Reservations:[{N_Reserv:111 , place_name:'Maldiv', n_adults:2 , n_children :1, date_arivals :'05/05/2023', date_leaving:'15/05/2023'}] }
// export function ReducerReservation(state = initState,action){
    
// switch (action.type) {
//     case type.ADD_RESERVATION:
//         return {...state,Reservations:[...state.Reservations,action.paylod]}
    
//     case type.DELETE_RESERVATION:
//         return {...state,Reservations:state.Reservations.filter(Reserv => Reserv.N_Reserv !== parseInt(action.paylod))}
     
//     case type.UPDATE_RESERVATION:
//         return {...state,Reservations:state.Reservations.map(Reserv => {
//             if (Reserv.N_Reserv === parseInt(action.paylod.N_Reserv)) {
//                 return{...Reserv,Reservations:action.paylod}
//             }
//             else{
//                 return Reserv
//             }
//         })
            
//         }   

//     default:
//         return state
// }

// }
let i = localStorage.getItem('state')
const initState = {
    LoginED: i  ?  i : false
  };
  
  function LoginReducer(state = initState, action) {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, LoginED: true };
      default:
        return state; // Add this line to return the current state by default
    }
  }
  
  export default LoginReducer;

  