import React from 'react'

const Loading = () => {
    return (
        <div style={{
            textAlign: 'center',
        }}
         className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Loading
