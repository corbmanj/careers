import axios from 'axios'
const baseUrl = 'http://www.mocky.io/v2/'
const teamsAPI = '5c9d99d133000056003f2385'
const membersAPI = '5ca00c403300006e00a87dba'
const filesAPI = '5c9d99b13300005b003f2382'

// we could easily combine these three functions and pass in a parameter to switch on teams/members/files
// but I think it keeps the code slighly more readable with three separate functions
export const getTeams = async () => {
	const fetchUrl = `${baseUrl}${teamsAPI}`
	const response = await axios.get(fetchUrl)
	return response
}

export const getMembers = async (teamID) => {
	const fetchUrl = `${baseUrl}${membersAPI}?team=${teamID}`
	const response = await axios.get(fetchUrl)
	return response
}

export const getFiles = async (memberID) => {
	const fetchUrl = `${baseUrl}${filesAPI}?employee=${memberID}`
	const response = await axios.get(fetchUrl)
	return response
}