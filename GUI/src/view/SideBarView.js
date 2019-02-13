'use strict';

// Major third-party modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';

// Reflux store
import EreborStore from '../store/EreborStore';

// Reflux actions
import EreborActions from '../action/EreborActions';

// Views

class SideBarView extends Reflux.Component {
	constructor(props) {
		super(props);
		this.store = EreborStore;
	}

	updateView = (view) => {
		this.props.updateView(view);
	}

	passAccRef = () => {
		return ReactDOM.findDOMNode(this.refs.Accounts).firstChild;
	}

	render() {
		//console.log("In MainView render()");
		return (
            <div className="sidebar">
			<div className="sideLogo">
				<img src="assets/icon/11be_logo.png" style={{width: '2.75vw'}} />
				<p style={{color: "white", fontSize: "1.9vw", textAlign: "center", margin: "6px 0px 6px 0px"}}> ElevenBuckets </p>
			</div>
			<div className="sidebarButton" style={{color: this.props.currentView === 'AppLauncher' ? '#ff4200' : 'white'}}
			   onClick={this.updateView.bind(this, 'AppLauncher')}>Mining</div>
			<div className="sidebarButton" style={{color: this.props.currentView === 'TokenSettings' ? '#ff4200' : 'white'}}
			   onClick={this.updateView.bind(this, 'TokenSettings')}>Collections</div>
            		<div className="sidebarButton" style={{color: this.props.currentView === 'Receipts' ? '#ff4200' : 'white'}} 
			   onClick={this.updateView.bind(this, 'Receipts')}>Trade</div>
            </div>
		)

	}
}

export default SideBarView;

