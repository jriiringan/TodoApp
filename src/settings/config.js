const BASEURL = 'https://itunes.apple.com/search?';
const ENTITIES = [
    {
        name: 'Movie',
        key: 'movie',
        mediaType: ['movieArtist', 'movie']
    },{
        name: 'Music',
        key: 'music',
        mediaType: ['musicArtist', 'musicTrack', 'album', 'musicVideo', 'mix', 'song']
    },
 {
        name: 'Podcast',
        key: 'podcast'
    },
{
        name: 'Music Video',
        key: 'musicVideo'
    },
 {
        name: 'Audio Book',
        key: 'audioBook'
    },
 {
        name: 'Short Film',
        key: 'shortFilm'
    },
{
        name: 'TV Show',
        key: 'tvShow'
    },
{
        name: 'Software',
        key: 'software'
    },
{
        name: 'E-Book',
        key: 'eBook'
    },
    {
        name: 'All',
        key: 'all'
    }
];

export { BASEURL, ENTITIES };