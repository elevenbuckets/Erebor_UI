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

class HeaderBarView extends Reflux.Component {
	constructor(props) {
		super(props);
		this.store = EreborStore;
	}

	render() {
		//console.log("In MainView render()");
		return (
			<div className="mining">
				Currently mining, the expected mined time is 10 min
			</div>
			
			
		)

	}
}

export default HeaderBarView;

