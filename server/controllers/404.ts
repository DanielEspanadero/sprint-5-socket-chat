import { Request, Response } from 'express'

export const error404 = (req: Request, res: Response) => {
    res.status(404).json({
        msg: 'Error 404 Not found'
    });
};