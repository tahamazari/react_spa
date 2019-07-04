import React, {Component} from 'react';
import './options.scss';

import {connect} from 'react-redux';
import AddFilmModal from '../modals/addFilmModal';

class Options extends Component {
    render(){
        return(
            <div id="options_main" className="container-fluid">
                <div className="options_main">
                    <div className="btns_container">
                    <button type="button" className="btn options_btn" 
                        data-toggle="modal"data-target="#addFilmModal">
                        Add Film
                    </button>
                    <AddFilmModal />
                    </div>
                </div>
            </div>
        )
    }
}

export default Options;
