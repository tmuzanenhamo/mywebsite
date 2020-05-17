import React, { Component } from "react";

class ToggleBox extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			opened: false,
		};
		this.toggleBox=this.toggleBox.bind(this);
	}
  
	toggleBox() {
		const { opened }=this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		var { title, title2,children }=this.props;
		const { opened } = this.state;

		if (opened){
			title='All';
		}else{
			title='All';
        }
        
        if (opened){

            title2='Programming Languages'

        }else{

            title2='Programming Langauges'
        }

		return (
			<div className="box">
				<div className="boxTitle" onClick={this.toggleBox}>
					{title}
                    {title2}
				</div>
				{opened && (					
					<div class="boxContent">
						{children}
					</div>
				)}
			</div>
		);
	}
}

export default ToggleBox;