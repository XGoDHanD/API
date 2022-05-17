import { Controller, Get } from '@overnightjs/core';
import { Request, Response} from 'express';

@Controller('menu')
export class MenuController {

    @Get('')
    public getMenuController(_: Request, res: Response): void {
        res.send([
            {
                "dia": "Segunda",
                "prato": "Feijoada",
                "valor": "R$19,99",
                "descrição": "200g de arroz, 300g de feijoada, farofa"
            }
        ])
    }
}