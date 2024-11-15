## with-custom-auth project

A project that demonstrates how to build custom authentication using Next.js. This project follows the steps provided in the book "Real World Next.js" by Michele Riva. The primary goal is to understand the underlying logic behind custom authentication.

Disclaimer: Custom authentication is not recommended for production applications. It is better to rely on well-established tools and libraries for authentication (e.g., Firebase, Auth0, NextAuth.js) for security and scalability. This project is for educational purposes only.


## 📚 About the Project

In modern web development, authentication is a critical component of any application. While numerous tools simplify this process, understanding the core logic of authentication helps developers grasp:

How authentication works under the hood.
Common pitfalls and challenges when handling user authentication.
Security considerations in real-world applications.
This project walks through building a basic custom authentication system using Next.js, inspired by the lessons in Real World Next.js. It is not intended for production use but as a stepping stone to learning.

## ⚠️ Disclaimer
This project is purely for educational purposes. Using custom authentication in production environments poses significant risks, including:

Security vulnerabilities (e.g., improper token handling, lack of encryption).
Maintenance challenges compared to established libraries.
Scalability issues as your application grows.
For production, consider using trusted solutions like:

- NextAuth.js
- Auth0
- Firebase Authentication

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
