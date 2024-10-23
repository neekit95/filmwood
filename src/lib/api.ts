export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGMwYjJjNDg3YjdlMmM4MTA4ODA3OWJlNjVlMDllYiIsIm5iZiI6MTcyNTYxNTgzOC41NTE1OTgsInN1YiI6IjY2ZGFjOTEwYmQxZjI2NWRlYjIxYmE5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ul50g04VUei79bSjeromlh5di6i0E516MQTR72wBPKw';
// TODO: доделать получение токена с сервера

export const getApiConfig = () => ({
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    params: {
        language: 'ru-RU',
    },
});
