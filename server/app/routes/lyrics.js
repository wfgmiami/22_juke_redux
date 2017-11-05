const express = require('express');
const router = new express.Router();
const request = require('request-promise');
const parser = require('xml2json');
module.exports = router;

const lyricsAPIPrefix = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect';

const text = "why'all small tuna fish, I'm one big catch(This is a Shark Tale exclusive) why'all small tuna fish, I'm one big catch (Here we go again) why'all mall tuna fish, I'm one big catch (Say what, say what, yeah) why'all small tuna fish, I'm one big catch"

router.get('/:artist/:song', (req, res, next) => {
  res.send({ lyrics: text })
  // request.get(`${lyricsAPIPrefix}?artist=${req.params.artist}&song=${req.params.song}`)
  //   .then(body => {
  //     const lyric = parser.toJson(body, {object: true}).GetLyricResult.Lyric;
  //     res.send({lyric});
  //   })
  //   .catch(next);

});
