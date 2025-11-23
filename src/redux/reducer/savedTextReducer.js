import {
    ADD_SAVED_TEXT_FAIL,
    ADD_SAVED_TEXT_REQ,
    ADD_SAVED_TEXT_SUCCESS,
    GET_SAVED_TEXT_FAIL,
    GET_SAVED_TEXT_REQ,
    GET_SAVED_TEXT_SUCCESS,
    UPDATE_SAVED_TEXT_FAIL,
    UPDATE_SAVED_TEXT_REQ,
    UPDATE_SAVED_TEXT_SUCCESS,
    DELETE_SAVED_TEXT_FAIL,
    DELETE_SAVED_TEXT_REQ,
    DELETE_SAVED_TEXT_SUCCESS,
} from "../action-types";

const initialState = {
    savedTexts: [],
    loading: false,
    error: null,
};

export const savedTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SAVED_TEXT_REQ:
        case GET_SAVED_TEXT_REQ:
        case UPDATE_SAVED_TEXT_REQ:
        case DELETE_SAVED_TEXT_REQ:
            return {
                ...state,
                loading: true,
            };

        case ADD_SAVED_TEXT_SUCCESS:
            return {
                ...state,
                loading: false,
                savedTexts: [action.payload, ...state.savedTexts],
            };

        case GET_SAVED_TEXT_SUCCESS:
            return {
                ...state,
                loading: false,
                savedTexts: action.payload,
            };

        case UPDATE_SAVED_TEXT_SUCCESS:
            return {
                ...state,
                loading: false,
                savedTexts: state.savedTexts.map((text) =>
                    text.id === action.payload.id
                        ? { ...text, text: action.payload.text }
                        : text
                ),
            };

        case DELETE_SAVED_TEXT_SUCCESS:
            return {
                ...state,
                loading: false,
                savedTexts: state.savedTexts.filter((text) => text.id !== action.payload),
            };

        case ADD_SAVED_TEXT_FAIL:
        case GET_SAVED_TEXT_FAIL:
        case UPDATE_SAVED_TEXT_FAIL:
        case DELETE_SAVED_TEXT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
