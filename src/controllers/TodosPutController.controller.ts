import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { TodosService } from 'src/services'; // This should not be here

export class TodosPutController implements Controller {
  constructor(private service: TodosService) {};

  async run(req: Request, res: Response): Promise<void> {
      const { id } = req.params;
      const { text} = req.body;
    try {
      const todo = await this.service.updateTodo( id, text );
      res.status(httpStatus.CREATED).json(todo);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(`${error}`);
    }
  }
}
