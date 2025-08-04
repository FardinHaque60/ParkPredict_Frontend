import { useState } from 'react';
import { fetchPredictions } from "../../service/Api";
import { FaEdit, FaCheck, FaTimes, FaSpinner } from 'react-icons/fa';

function EditableTime({children, predictionTime, setPredictionTime, isLoading, setIsLoading, setPredictions}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableTime, setEditableTime] = useState(predictionTime.toFormat('HH:mm'));

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleConfirm = async () => {
        setIsLoading(true);
        await fetchPredictions(editableTime, setPredictionTime, setPredictions, setIsLoading);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setIsEditing(false);
    }

    return (
        <>
            {isEditing ? (
            <span> 
                <input
                    type="time"
                    value={editableTime}
                    onChange={(e) => setEditableTime(e.target.value)}
                    autoFocus
                />
                <span className="icon-group">
                    {isLoading ?  (
                    <span className="spinner-container">
                        <FaSpinner className="spinner" />
                    </span>
                    ) : (
                    <>
                        <FaCheck className="icon confirm-icon" onClick={handleConfirm} />
                        <FaTimes className="icon cancel-icon" onClick={handleCancel} />
                    </>
                    )}
                </span>
            </span>
            ) : (
            <>
                {children}
                {isLoading ? (
                <span className="spinner-container">
                    <FaSpinner className="spinner" />
                </span>
                ) : (
                    <FaEdit className="icon edit-icon" onClick={handleEdit } />
                )}
            </>
            )}
        </>
    )   
}

export default EditableTime;