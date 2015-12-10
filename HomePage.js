'use strict';

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	ListView,
	Text,
	Image,
	View,
} = React;

var Contents = [
	{thumbnail: 'http://img.club.pchome.net/noimage.png'},
	{thumbnail: 'http://img.club.pchome.net/noimage.png'},
	{thumbnail: 'images/Nuclide.png'},
];

var HomePage = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds.cloneWithRows(Contents),
		};
	},

	render: function() {
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}/>
		);
	},

	renderRow: function(rowData: string, sectionID: number, rowID: number) {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					{rowID}
				</Text>
				<Image 
					style={styles.detailsImage} 
					source={{uri: rowData.thumbnail}}
					resizeMode={Image.resizeMode.contain} />
			</View>
		);
	},
});

var styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	detailsImage: {
		width: 60,
		height: 88,
		backgroundColor: '#eaeaea',
		marginRight: 10,
	},
});

module.exports = HomePage;