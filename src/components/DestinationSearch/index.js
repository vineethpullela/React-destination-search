import './index.css'
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props

    const searchResults = destinationList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="main-heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search-input"
              value={searchInput}
              className="search-input"
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search-Icon"
              className="search-icon"
            />
            <ul className="cards-container">
              {searchResults.map(eachDestination => (
                <DestinationItem
                  key={eachDestination.id}
                  destinationDetails={eachDestination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
