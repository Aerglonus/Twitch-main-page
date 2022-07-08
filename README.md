This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install the dependencies:
```bash
npm install
```
The project runs with NextAuth so you need to add your Twitch credentials to make the NextAuth work:
---
Create a `.env` in root directory and add the following : 

```bash
# It only uses Twitch provider but you can set up multiple providers check the list in NextAuth Docs. 
TWITCH_CLIENT_ID= 
TWITCH_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3005
JWT_SECRET= #create your own token by typing in your terminal:  openssl rand -base64 32 t
- - - 
#OPTIONAL IF YOU WANNA PULL DATA FROM A MONGODB DATABASE
MONGODB_URI={your_mongoDB_URI}

```
For the Twitch credentials create an app on [Twitch](https://dev.twitch.tv/console/).

run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3005/api/hello](http://localhost:3005/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## TO-DOs : 
- [ ] -  A SHT TON OF FEATURES TO ADD. 
- [ ] - Dynamic BG colors.
- [ ] - refactor the design of the components.
- [ ] - Add comments to the code.
- [ ] - User authentication.
- [ ] - more pages.

