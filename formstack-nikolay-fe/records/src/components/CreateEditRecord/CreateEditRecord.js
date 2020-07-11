import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import Track from '../Track/Track';
import Uploader from '../UploadFIle/UploadFile';

class CreateEditRecord extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            artist: '',
            album: '',
            isFav: false,
            description: '',
            tracks: []
        }

        this.onTrackChange = (index, value) => {
            console.log('track change', index, value);
            const tracks = this.state.tracks.slice(0)
            tracks[index] = value;
            this.setState({
                tracks
            })
        }

        this.onTrackDelete = (index) => {
            const tracks = this.state.tracks.slice(0);
            tracks.splice(index, 1);

            this.setState({
                tracks
            })
        }

        this.addTrack = () => {
            const tracks = this.state.tracks.slice(0);
            tracks.push('');
            this.setState({
                tracks: tracks
            })
        }

        this.handleArtistChange = (evt) =>{
            this.setState({
                artist: evt.target.value
            })
        }

        this.handleAlbumChange = (evt) =>{
            this.setState({
                album: evt.target.value
            })
        }

        this.handleDescriptionChange = (evt) =>{
            this.setState({
                description: evt.target.value
            })
        }

        this.handleIsFavoriteChange = (evt) =>{
            this.setState({
                isFavorite: evt.target.checked
            })
        }

        this.handleSubmit = () =>{
            console.log(this.state)
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-around flex-wrap m-5">
                <Form>
                    <Form.Group controlId="formArtist">
                        <Form.Label>Artist</Form.Label>
                        <Form.Control type="text" placeholder="Enter artist" />
                    </Form.Group>
                    <Form.Group controlId="formAlbum">
                        <Form.Label>Album</Form.Label>
                        <Form.Control type="text" placeholder="Enter album name" value={this.state.album} onChange={this.handleAlbumChange} />
                    </Form.Group>
                    <Form.Group controlId="formIsFav">
                        <Form.Check type="checkbox" label="Is it a favorite?" checked={this.state.isFavorite} onChange={this.handleAlbumChange} />
                    </Form.Group>
                    <Form.Group controlId="formDesc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="formAddTrack">
                    <Button variant="primary" type="button" onClick={this.addTrack}>
                        Add Track
                    </Button>
                    </Form.Group>
                        {this.state.tracks.map((track,i)=> {
                            return <Track key={i} id={i} title={track} onTrackChange={this.onTrackChange} onTrackDelete={this.onTrackDelete}/>
                        })}

                    <Button variant="primary" type="button" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>

                <Uploader/>
            </div>
        );
    }
}


export default CreateEditRecord