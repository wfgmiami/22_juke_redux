import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {

  componentDidMount () {
    const selectAlbum = this.props.selectAlbum;
    const albumId = this.props.routeParams.albumId;

    selectAlbum(albumId);
  }

  render () {
    const album = this.props.selectedAlbum.selectedAlbum ? this.props.selectedAlbum.selectedAlbum  : this.props.selectedAlbum;

    const currentSong = this.props.player.currentSong;
    const isPlaying = this.props.player.isPlaying;
    const toggleOne = this.props.toggleOne;

    // console.log('....this.props, album', this.props)
    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          selectedArtist = { this.props.selectedArtist }
          selectedPlaylist = { this.props.selectedPlaylist }
          player = { this.props.player }
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    );
  }
}

export default Album;
