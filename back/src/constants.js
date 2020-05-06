module.exports = {
	stateCookie : 'user_auth_cookie',
	authScope : 'user-read-private user-read-email user-library-read playlist-read-private user-read-playback-state user-top-read user-read-playback-position user-read-recently-played user-follow-read',
	spotifyAuthUrl : 'https://accounts.spotify.com/authorize?',
	spotifyTokenUrl : 'https://accounts.spotify.com/api/token',
	spotifyProfileUrl: 'https://api.spotify.com/v1/me',
	spotifySongUrl: 'https://api.spotify.com/v1/me/tracks',
	spotifyUserUrl: 'https://api.spotify.com/v1/users/id',
	backendRedirectDomain: 'http://localhost:'.concat(process.env.PORT),
	backendRedirectRoute: '/',
	appRedirectDomain: 'http://localhost:3000',
	appOkRedirectRoute: '/',
	appErrorRedirectRoute : '/error',
	loggedInCookieKey: 'logged_in',
	tokenCookieKey: 'token',
	database : {
		database_name: 'spotifySocial',
		profiles_collection: 'Profiles',
		friends_collection: 'Friends',
		users_collection: 'AllUsers',
		token_collection: 'Token'
	}
}