import React, {Component} from 'react';
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

const API_KEY = 'kwBobYJTUbl5lPG2GYGrskePb0cXLFtsH3wZ4L4Y';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      rover: 'curiosity',
      camera: 'fhaz',
      sol: 1000,
      images: []
    }
  }
  handleRover = e => {
    this.setState({rover: e.target.value});
  }
  handleCamera = e => {
    this.setState({camera: e.target.value});
  }
  handleSol = e => {
    this.setState({sol: e.target.value});
  }
  fetchRoverImage = () => {
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
    let cam = this.state.camera;
    let rover = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    fetch(imageUrl)
      .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({
            images: data.photos
          });
        });
  }

  render() {
    return (
      <div className='body'>
        <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" value={this.state.value}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select onChange={this.handleCamera} id="rover" value={this.state.value}>
          <option value="fhaz">FHAZ (Front Hazard)</option>
          <option value="rhaz">RHAZ (Rear Hazard)</option>
          <option value="navcam">NAVCAM (Navigation Cam)</option>
        </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        <GetImageButton onClick={this.fetchRoverImage}></GetImageButton>
        <ImageDisplay images={this.state.images} className='img'></ImageDisplay>
      </div>
    );
  }
}
