import React, { Component } from 'react';

class Search extends Component {
    
    filterUpdate() {
        const val = this.myValue.value
        this.props.filterUpdate(val)
        //sending value to parent component
    }

    render() { 
        console.log(this.props.filterText)
        return ( 
            <header>
            
                <form>
                    <input onChange={this.filterUpdate.bind(this)} type="text" placeholder="Type Name..."
                        ref={(value) => this.myValue = value}
                     />
                </form>
            
            </header>
         );
    }
}
 
export default Search;