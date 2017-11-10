import React, { Component } from 'react';
import { FormGroup, FormControl, Button, HelpBlock  } from 'react-bootstrap';
import './App.css';

class BucketList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adventures: [],
      newAdventure: '',
      validAdventure: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderAdventures = this.renderAdventures.bind(this);
  }

  handleSubmit() {
    if (this.state.newAdventure && this.state.newAdventure.length > 0) {
      const newAdventure = this.state.newAdventure;
      const adventures = this.state.adventures;
      adventures.push(newAdventure);
      this.setState({ validAdventure: null, adventures: adventures, newAdventure: '' });
    } else {
      this.setState({ validAdventure: 'error' });
    }
  }

  handleChange(e) {
    const adventure = e.target.value;
    this.setState({ newAdventure: adventure });
  }

  renderAdventures() {
    const adventureList = this.state.adventures.map((adv) => {
      return ( <li key={adv}>{adv}</li> );
    });
    return adventureList;
  }

  render() {
    return (
      <div className="bucket-list">
        <header className="header">
          <h1 className="title">Bucket List</h1>
        </header>
        <div className='list-form'>
          <form>
            <FormGroup controlId="addAdventuresForm" validationState={this.state.validAdventure}>
              <FormControl
                type="text"
                value={this.state.newAdventure}
                placeholder="Add Adventure"
                onChange={this.handleChange}
                bsSize="large"
              />
              <FormControl.Feedback />
              {this.state.validAdventure === 'error' ? <HelpBlock>Please add an adventure to your bucket list.</HelpBlock> : ''}
              <Button onClick={this.handleSubmit} block>Add to Bucket List</Button>
            </FormGroup>
          </form>
          <ol>
            {this.state.adventures.length > 0 ?
              this.renderAdventures() :
              <p>You don't seem to have any adventures on your bucket list. Add some!</p>
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default BucketList;
