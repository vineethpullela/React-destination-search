import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    console.log(searchResults)
    console.log(searchInput)
    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="main-heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destination-items-container">
            {searchResults.map(eachDestination => (
              <DestinationItem
                destinationDetails={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
