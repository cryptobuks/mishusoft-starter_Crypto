/*
import {google} from "googleapis";

const YOUR_CLIENT_ID = "490685818841-9ck0mpi283mogcoskgk8kso236m5bvn4.apps.googleusercontent.com";
const YOUR_CLIENT_SECRET = "O7ARjSknCxLmrOcKzd775mFW";
const YOUR_REDIRECT_URL = "https://www.mishusoft.com/user/thirdparty/google";


export class Google_oauth {
    static init (){
        const oauth2Client = new google.auth.OAuth2(
            YOUR_CLIENT_ID,
            YOUR_CLIENT_SECRET,
            YOUR_REDIRECT_URL
        );

        // generate a url that asks permissions for Blogger and Google Calendar scopes
        /!*const scopes = [
            'scope:',
            'https://www.googleapis.com/auth/calendar'
        ];*!/

        const url = oauth2Client.generateAuthUrl({
            // 'online' (default) or 'offline' (gets refresh_token)
            access_type: 'offline',

            // If you only need one scope you can pass it as a string
            scope: "email profile https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email"
        });
        console.log(url)
    }
}*/
