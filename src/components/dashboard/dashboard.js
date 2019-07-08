import React, {Component} from 'react';
import './dashboard.scss';

import Footer from '../footer/footer';
import DashboardHeader from './dashboardHeader/dashboardHeader';
import '../films/allFilms/allFilms';

import {connect} from 'react-redux';
import AllFilms from '../films/allFilms/allFilms';
import Options from '../Options/options';
import FilterForm from '../../forms/filterForm';

class Dashboard extends Component {
    render(){
        return(
            <div className="dasboard_main">
                <DashboardHeader />
                <div className="welcome_user">
                    Welcome {this.props.name}!
                </div>
                <Options />
                <FilterForm initialValues={{minYear: "1900-01-01", maxYear: "2019-07-08", rating: 5}}/>
                <AllFilms />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.user.name
    }
}

export default connect(mapStateToProps)(Dashboard);