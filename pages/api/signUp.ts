import type { NextApiRequest, NextApiResponse } from "next";
import Prisma from "../../utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    email: _email,
    password: _password,
  } = req.body;

  try {
    const checkUser = await Prisma.getInstance().user.findUnique({
      where: {
        email: _email,
      },
    });

    if (checkUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    await Prisma.getInstance().user.create({
      data: {
        email: _email,
        password: _password,
        role: "PATIENT",
      },
    });
    return res.status(200).send({ message: "User created successfully" });
  } catch (e) {
    res.status(500).send({ message: "Something went wrong", error: e });
  }
}
