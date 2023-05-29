import express, { Application, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const app: Application = express()

const PORT: number = 3001

app.get("/", (req: Request, res: Response): void => {
	res.send("Hello world!")
})
app.get("/post", async (req: Request, res: Response): Promise<void> => {
	// const allUsers = await prisma.user.findMany()
	// console.log(allUsers)

	// id       String    @id @default(auto()) @map("_id") @db.ObjectId
	// slug     String    @unique
	// title    String
	// body     String
	// author   User      @relation(fields: [authorId], references: [id])
	// authorId String    @db.ObjectId
	// comments Comment[]

	const user = await prisma.post.create({
		data: {
			slug: "test slug 2",
			title: "test 2",
			body: "test body 2",
			authorId: "646e4e3e4ef703ce6f54b115",
			comments: {
				create: [
					{
						comment: "comment 1",
					},
					{
						comment: "comment 2",
					},
				],
			},
		},
	})
	res.send(user)
})

app.listen(PORT, (): void => {
	console.log("SERVER IS UP ON PORT:", PORT)
})
