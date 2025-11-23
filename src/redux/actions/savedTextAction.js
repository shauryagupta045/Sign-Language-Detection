import { db } from "../../firebase";
import {
    collection,
    getDocs,
    doc,
    setDoc,
    deleteDoc,
    updateDoc,
    query,
    where,
} from "firebase/firestore";
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
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

export const saveText = (text) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_SAVED_TEXT_REQ,
        });

        const logedInUser = JSON.parse(Cookies.get("sign-language-ai-user"));
        const id = uuidv4();
        const createdAt = new Date().toISOString();

        const data = {
            id,
            userId: logedInUser.userId,
            username: logedInUser.name,
            text,
            createdAt,
        };

        await setDoc(doc(db, "SavedTexts", id), data);

        dispatch({
            type: ADD_SAVED_TEXT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ADD_SAVED_TEXT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getSavedTexts = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_SAVED_TEXT_REQ,
        });

        const logedInUser = JSON.parse(Cookies.get("sign-language-ai-user"));
        const savedTextsCol = collection(db, "SavedTexts");
        const q = query(savedTextsCol, where("userId", "==", logedInUser.userId));

        const querySnapshot = await getDocs(q);
        const savedTexts = querySnapshot.docs.map((doc) => doc.data());

        // Sort by createdAt descending (newest first)
        savedTexts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        dispatch({
            type: GET_SAVED_TEXT_SUCCESS,
            payload: savedTexts,
        });
    } catch (error) {
        dispatch({
            type: GET_SAVED_TEXT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateSavedText = (id, newText) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_SAVED_TEXT_REQ,
        });

        const textRef = doc(db, "SavedTexts", id);
        await updateDoc(textRef, {
            text: newText,
        });

        dispatch({
            type: UPDATE_SAVED_TEXT_SUCCESS,
            payload: { id, text: newText },
        });
    } catch (error) {
        dispatch({
            type: UPDATE_SAVED_TEXT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteSavedText = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_SAVED_TEXT_REQ,
        });

        await deleteDoc(doc(db, "SavedTexts", id));

        dispatch({
            type: DELETE_SAVED_TEXT_SUCCESS,
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: DELETE_SAVED_TEXT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
