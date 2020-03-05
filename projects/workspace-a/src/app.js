import React, {Component} from 'react';
import PhoneNumber from 'awesome-phonenumber';
import B from 'bob/app';

var pn = new PhoneNumber( '0707123456', 'SE' );

const A = () => (<div>hello{pn.getNumber( 'international' )}</div>);

export default class Test extends Component {
	render() {
		return (
			<B/>
		);
	}
}

