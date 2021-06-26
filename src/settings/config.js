const BASEURL = 'https://itunes.apple.com/search?';
const ENTITIES = [{
    movie: {
        name: 'movie',
        mediaType: ['movieArtist', 'movie']
    },
    music: {
        name: 'music',
        mediaType: ['musicArtist', 'musicTrack', 'album', 'musicVideo', 'mix', 'song']
    }
}];

export { BASEURL, ENTITIES };