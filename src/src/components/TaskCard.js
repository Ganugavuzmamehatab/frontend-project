import React from 'react';

const TaskCard = ({ task, onToggle, onDelete }) => {
    return (
        <div className={`task-card ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <div>
                <button onClick={() => onToggle(task._id, !task.completed)}>
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => onDelete(task._id)}>Delete</button>
            </div>
        </div>
    );
};

export default TaskCard;
