import React from 'react';

const Lyrics = (props)=>{

  const artistChange = (e) => {
    props.setArtist(e.target.value);
  }

  const songChange = (e) => {
    props.setSong(e.target.value);
  }

  return(
    <div id="lyrics">
      <form className="form-horizontal" onSubmit={props.handleSubmit}>

        <div className="form-group">
          Artist:
          <input className="form-control" type="text" value={props.artistQuery} placeholder="Artist" onChange={artistChange}></input>
          Song:
          <input className="form-control" type="text" value={props.songQuery} placeholder="Song" onChange={songChange}></input>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Seach for Lyrics</button>
        </div>
        Song Lyrics:
        <pre>{props.text || 'Search above!'}</pre>

      </form>
    </div>
  )


}

export default Lyrics;
