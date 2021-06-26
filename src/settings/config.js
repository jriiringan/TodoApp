const BASEURL = 'https://itunes.apple.com/search?';
const ENTITIES = [
    {
        name: 'movie',
        key: 'movie',
        mediaType: ['movieArtist', 'movie']
    },{
        name: 'music',
        key: 'music',
        mediaType: ['musicArtist', 'musicTrack', 'album', 'musicVideo', 'mix', 'song']
    },
 {
        name: 'podcast',
        key: 'podcast'
    },
{
        name: 'musicVideo',
        key: 'musicVideo'
    },
 {
        name: 'audioBook',
        key: 'audioBook'
    },
 {
        name: 'shortFilm',
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