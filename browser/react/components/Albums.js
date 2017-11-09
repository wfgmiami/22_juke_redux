import React from 'react';
import { Link } from 'react-router';

const Albums = (props) => {
  // console.log('this props albums',props)
  // const albums = props.albums.albums;

  const albums = props.selectedArtist.selectedArtist ? props.selectedArtist.selectedArtist.albums : props.albums.albums;
  // console.log('.....Albums props: ', props)
  return (
    <div>
      <h3>Albums</h3>
      <div className="row">
      {
        albums && albums.map(album => (
          <div className="col-xs-4" key={ album.id }>
            <Link className="thumbnail" to={`/albums/${album.id}`}>
              <img src={ album.imageUrl } />
              <div className="caption">
                <h5>
                  <span>{ album.name }</span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>
            </Link>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Albums;
