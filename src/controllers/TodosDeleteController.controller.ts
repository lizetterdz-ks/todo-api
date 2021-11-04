import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { TodosService } from 'src/services'; // This should not be here

export class TodosDeleteController implements Controller {
  constructor(private service: TodosService) {};

  async run(req: Request, res: Response): Promise<void> {
      const { id } = req.params;
      try {
          await this.service.deleteTodo( id );
          res.status(httpStatus.OK).json('Item succesfully deleted');
        } catch (error) {
          res.status(httpStatus.INTERNAL_SERVER_ERROR).json(`${error}`);
        }
    }
}