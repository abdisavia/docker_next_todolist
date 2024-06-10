import { NextResponse } from "next/server";

export function middleware(req) {
    const res = NextResponse.next()

    res.headers.append('Access-Control-Allow-Origin', '*')
    res.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.headers.append(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
    )
    
    if(req.method === 'OPTIONS'){
        return new Response(null, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }
    
    return res;
}

// specify the path regex to apply the middleware to
export const config = {
    matcher: ['/api/:path*'],
}