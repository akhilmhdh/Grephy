//github v3 authentication using octonode 
import octonode from 'octonode';

export const auth_url=octonode.auth.config({
    id:process.env.GITHUB_CLIENT_ID,
    secret:process.env.GITHUB_CLIENT_SEC
}).login(['read:user']);
