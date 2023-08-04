import {useEffect, useState} from 'react';
import {Octokit} from '@octokit/rest';
import {Box, Container, Text} from "@chakra-ui/react";
import Image from "next/image";

const GitHome = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const octokit = new Octokit();
        octokit.users.getByUsername({
            username: 'nknighta',
        }).then(({data}) => {
            setProfile(data);
        });
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <Container fontSize={20} maxW={"container.sm"}>
            <div style={{
                textAlign: "center",
            }}>
                <Text m={5} fontSize={30} fontFamily={"REM"}>GitHub Profile</Text>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <img
                        src={profile.avatar_url}
                        alt="GitHub Avatar"
                        style={{
                            borderRadius: "50%",
                            width: 200,
                            height: 200,
                        }}/>
                </div>
                <Box p={5}/>
                <p>{profile.name}</p>
                <Box p={2}/>
                <Text fontFamily={"REM"}>Bio: </Text>
                <Box p={2}/>
                <p>{profile.bio}</p>
                <Box p={4}/>
                <Text fontFamily={"REM"}>Followers:</Text>
                <p>{profile.followers}</p>
                <Box p={4}/>
                <Text fontFamily={"REM"}>Following:</Text>
                <p>{profile.following}</p>
                {/* Add more profile information as needed */}
            </div>
        </Container>
    )
};
export default GitHome;
