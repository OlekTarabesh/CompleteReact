import { CATEGORIES_ACTION_TYPES } from "./category.types";

import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

// export const setCategories = (categoriesArray) => 
//     createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCatergoriesStart = () => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCatergoriesSuccess = (categoriesArray) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCatergoriesFailed = (error) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesStartAsync = () => async (dispatch) => {
    dispatch(fetchCatergoriesStart());
    try{
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCatergoriesSuccess(categoriesArray));
    } catch(error) {
        dispatch(fetchCatergoriesFailed(error));
    }
}
