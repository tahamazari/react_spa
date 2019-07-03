import React from 'react';
import './dashboardHeader.scss';

const DashboardHeader = () => {
    return (
        <div className="header_main">
            <div className="header_logo">
                Movie Ratings Website
            </div>
            <div className="logout_btn_main">
                <button className="btn logout_btn">Logout</button>
            </div>
        </div>
    )
}

export default DashboardHeader;