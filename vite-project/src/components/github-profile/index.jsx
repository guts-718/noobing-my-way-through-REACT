import {useState} from 'react';
import { Octokit } from 'octokit';
import './style.css';

export default function GithubProfile(){
    const [data,setData]=useState();
    const [err,setErr]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    const [input,setInput]=useState('');
    const octokit = new Octokit();

    function searchUser(){
        console.log("input: ", input)
        getProfile(input);
        setInput('');
    }

    async function getProfile(userId){
        try{
            setIsLoading(true);
            const res = await octokit.request(`GET /users/${userId}`, {
                username: 'USERNAME',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })
            const dat=res;
            setData(dat);
            setIsLoading(false);
        }catch(err){
            console.log(err.message);
            setErr(err.message);
            setIsLoading(false);
        }
    }

    if(isLoading){
        return <div className="loading">wait on</div>
    }

    return (
        <div className="github-container">
            <div className="search-bar">
                <input
                    className="search-input"
                    placeholder="Enter userID"
                    onChange={(e)=>setInput(e.target.value)}
                    value={input}
                />
                <button className="search-btn" onClick={searchUser}>
                    Search
                </button>
            </div>

            {data && (
                <div className="profile-card">
                    <h1 className="username">{data.data.login}</h1>

                    {data.data.avatar_url && (
                        <img
                            className="avatar"
                            src={data.data.avatar_url}
                        />
                    )}

                    <div className="bio">
                        {data.data.bio && data.data.bio.length>0
                            ? data.data.bio
                            : "user stays unanimous"}
                    </div>

                    <div className="stats">
                        <div>Public repos: {data.data.public_repos}</div>
                        <div>Followers: {data.data.followers}</div>
                        <div>Following: {data.data.following}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
