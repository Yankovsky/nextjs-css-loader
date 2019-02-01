import React from 'react'

export default class extends React.Component {
	render() {
		return (
			<div>
				<h1>url(/static/myImage.jpeg)</h1>
				<div className='usingPath'/>
				<h1>url(/_next/static/myImage.jpeg)</h1>
				<div className='usingNextPath'/>
				<h1>url("${require('../static/myImage.jpeg')}")</h1>
				<div className='usingRequire'/>
				<style jsx>{ `
		          div.usingPath {
			        width: 276px;
			        height: 183px;
			        /* TODO I want this to work */
		            background: url(/static/myImage.jpeg);
		          }
		          div.usingNextPath {
			        width: 276px;
			        height: 183px;
		            background: url(/_next/static/myImage.jpeg);
		          }
		          div.usingRequire {
			        width: 276px;
			        height: 183px;
		            background: url("${require('../static/myImage.jpeg')}");
		          }` }</style>
			</div>
		)
	}
}
