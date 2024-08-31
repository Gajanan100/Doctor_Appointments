
export const Update_Location_Data="Update_Location_Data"
export const Update_Active_Location="Update_Active_Location"


const initialState={
    locations:[],
    activeLocation:null
}
export function globalReducer(state=initialState,action){
    switch(action.type){
        case Update_Location_Data:
            return{...state, locations:action.payload,activeLocation:action.payload[0]?.name || null}
            case Update_Active_Location:
                return{...state, activeLocation:action.payload}
    

        default:
            return state
    }

}