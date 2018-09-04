import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="dota2.svg" />
              </td>
              <td width="8" />
              <td>Dota Pro Teams</td>
            </tr>
          </tbody>
        </table>
         );
    }
}
 
export default Header;