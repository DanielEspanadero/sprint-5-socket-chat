import { Response, Request } from "express";

export const prueba = (req: Request, res: Response) => {
    res.status(200).json({
        msg: 'prueba'
    });
};