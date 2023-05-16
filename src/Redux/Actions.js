// import * as type from "./TypeDactions"

// export function add_reservation (N_Reserv, place_name , n_adults , n_children , date_arivals , date_leaving ){

//     return({type:type.ADD_RESERVATION, paylod:{N_Reserv , place_name , n_adults , n_children , date_arivals , date_leaving}})
// }

// export function delete_reservation (N_Reserv){

//     return({type:type.DELETE_RESERVATION, paylod:N_Reserv})
// }

// export function update_reservation (N_Reserv, place_name , n_adults , n_children , date_arivals , date_leaving){

//     return({type:type.UPDATE_RESERVATION, paylod:{N_Reserv , place_name , n_adults , n_children , date_arivals , date_leaving}})
// }
 const LoginAction = () => {
    return async (dispatch) => {
      dispatch({ type: "LOGIN" });
    };
  };
export default LoginAction;