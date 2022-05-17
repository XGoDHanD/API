import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { MenuController } from './controllers/menu';
import * as http from 'http';

export class SetupServer extends Server {

    private server?: http.Server;    
    constructor(private port = 3000){
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void{
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void{
        const menuController = new MenuController();
        this.addControllers([menuController])
    }

    public start(): void {
        this.server = this.app.listen(this.port, () =>{
            console.log('Server listening on port: ' + this.port);
        })
    }

}