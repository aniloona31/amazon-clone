export const initialState = {
    basket : [],
    user : null
}

const reducer = (state,action) => {
    console.log(action,state);
    switch(action.type){
        case "ADD_TO_BASKET" :
            return {
                ...state,
                basket : [...state.basket, action.payload]
            }
        case "REMOVE_FROM_BASKET" :
            let check = 0;
            let currentBasket = state.basket.filter((item) => {
                if(item.id == action.payload && check == 0){
                    check = 1;
                    return false;
                }
                else{
                    return true;
                }
            });

            return {
                ...state,
                basket : currentBasket
            }
        case "SET_USER":
            return {
                ...state,
                user : action.payload
            }
        default : 
            return state;
    }
}

export default reducer;