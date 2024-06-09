import { NextResponse } from "next/server";

export function middleware(req) {
    const res = NextResponse.next()

    res.headers.append('Access-Control-Allow-Origin', '*')
    res.headers.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    res.headers.append(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    // if(req.method === 'OPTIONS'){
    //     return res.status;
    //     res.status = 200;
    //     return res;
    // }
    
    return res
}

// specify the path regex to apply the middleware to
export const config = {
    matcher: ['/api/:path*'],
}