export const Update_Active_Doctor_Category = "Update_Active_Doctor_Category";
export const Update_Doctor_List = "Update_Doctor_List";
export const Update_Doctor_Filters = "Update_Doctor_Filters";
export const Update_Current_PAGE = "Update_Current_PAGE";


const initialState = {
  activeDoctorCategory: "",
  doctorList: [],
  currentPage:1,
  doctorsFilter: { category: "", gender: "", language: "", sort: "" },
};
export function HomePageReducer(state = initialState, action) {
  switch (action.type) {
    case Update_Doctor_List:
      return { ...state, doctorList: action.payload };
    case Update_Active_Doctor_Category:
      return { ...state, activeDoctorCategory: action.payload };
    case Update_Doctor_Filters:
      return { ...state, doctorsFilter: action.payload };
      case Update_Current_PAGE:
        return { ...state, currentPage: action.payload };
  

    default:
      return state;
  }
}
