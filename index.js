"use strict"
// const { PrismaClient } = require("@prisma/client")
// const prisma = new PrismaClient()
// async function main() {
// 	await prisma.user.create({
// 		data: {
// 			name: "Rich",
// 			email: "hello@prisma.com",
// 			posts: {
// 				create: {
// 					title: "My first post",
// 					body: "Lots of really interesting stuff",
// 					slug: "my-first-post",
// 				},
// 			},
// 		},
// 	})
// 	const allUsers = await prisma.user.findMany({
// 		include: {
// 			posts: true,
// 		},
// 	})
// 	console.dir(allUsers, { depth: null })
// }
// main()
// 	.then(async () => {
// 		await prisma.$disconnect()
// 	})
// 	.catch(async (e) => {
// 		console.error(e)
// 		await prisma.$disconnect()
// 		process.exit(1)
// 	})
const { Express, Request, Response } = require("express")
const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const port = process.env.PORT
app.get("/", (req, res) => {
	res.send("Express + TypeScript Server")
})
app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
