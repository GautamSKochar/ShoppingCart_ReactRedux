import React from "react";

export default class SortProducts extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        console.log(e.target.value);
        this.props.handleChange(e.target.value);
    }
    render() {

        return (
            <div className="dropdown">
                <select style={{cursor:'pointer'}} onChange={this.handleChange} className="btn btn-secondary dropdown-toggle" id="sortProducts">
                    <option value="">Sort by:</option>
                    <option value="name_assending">Name: A-Z</option>
                    <option value="name_descending">Name: Z-A</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                </select>
            </div>
        );
    }

}