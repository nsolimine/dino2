import React from 'react';

export class Section extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    toggleClass: true,
    togglePanels: []
    }
    this.toggleFunction = this.toggleFunction.bind(this);
    this.createListItem = this.createListItem.bind(this);
  }

  toggleFunction = (item) => {
    const { togglePanels } = this.state
    const index = togglePanels.indexOf(item.name)
    if(index !== -1){
      togglePanels.splice(index, 1)
    } else {
      togglePanels.push(item.name)
    }
    this.setState({ togglePanels })
  }

  createListItem(item) {
    return (
      <li>
        <div className="profile-card">
          <header className="profile-header" onClick={() => this.toggleFunction(item)}>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
          </header>
          <section className={this.state.togglePanels.includes(item.name)?"skills-container":"skills-container hidden"}>
            <h4>Skills</h4>
            <ul className="skills-list">
              <li>{item.skills[0]}</li>
              <li>{item.skills[1]}</li>
              <li>{item.skills[2]}</li>
              <li>{item.skills[3]}</li>
              <li>{item.skills[4]}</li>
            </ul>
          </section>
        </div>
      </li>
    )
  }
  render () {
    return (
    <section id="profiles-container">
      <h2>Profiles</h2>
      <ul id="profiles">
        {this.props.cards.map(this.createListItem)}
      </ul>
    </section>
    );
  }
}
