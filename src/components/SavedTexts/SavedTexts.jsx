import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getSavedTexts,
    updateSavedText,
    deleteSavedText,
} from "../../redux/actions/savedTextAction";
import "./SavedTexts.css";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const SavedTexts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { savedTexts, loading } = useSelector((state) => state.savedTexts);
    const { accessToken, loading: authLoading } = useSelector((state) => state.auth);

    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    useEffect(() => {
        if (!authLoading && !accessToken) {
            navigate("/");
        }
        if (accessToken) {
            dispatch(getSavedTexts());
        }
    }, [dispatch, accessToken, authLoading, navigate]);

    const handleEditClick = (item) => {
        setEditingId(item.id);
        setEditText(item.text);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditText("");
    };

    const handleSaveEdit = (id) => {
        dispatch(updateSavedText(id, editText));
        setEditingId(null);
        setEditText("");
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this text?")) {
            dispatch(deleteSavedText(id));
        }
    };

    if (loading || authLoading) {
        return <Spinner />;
    }

    return (
        <div className="saved-texts-container">
            <div className="saved-texts-header">
                <h1 className="gradient__text">Your Saved Texts</h1>
            </div>

            <div className="saved-texts-list">
                {savedTexts.length === 0 ? (
                    <p style={{ color: "white", textAlign: "center" }}>No saved texts found.</p>
                ) : (
                    savedTexts.map((item) => (
                        <div key={item.id} className="saved-text-item">
                            <div className="saved-text-content">
                                {editingId === item.id ? (
                                    <textarea
                                        className="edit-input"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        rows="3"
                                    />
                                ) : (
                                    <>
                                        <p>{item.text}</p>
                                        <span>{new Date(item.createdAt).toLocaleString()}</span>
                                    </>
                                )}
                            </div>
                            <div className="saved-text-actions">
                                {editingId === item.id ? (
                                    <>
                                        <button
                                            className="btn-save"
                                            onClick={() => handleSaveEdit(item.id)}
                                        >
                                            Save
                                        </button>
                                        <button className="btn-cancel" onClick={handleCancelEdit}>
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="btn-edit"
                                            onClick={() => handleEditClick(item)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn-delete"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SavedTexts;
