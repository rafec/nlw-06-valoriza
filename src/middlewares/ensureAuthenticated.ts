import { NextFunction, Request, Response } from "express";

export function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const token = request.headers.authorization;
	console.log(token);

	return next();
}
