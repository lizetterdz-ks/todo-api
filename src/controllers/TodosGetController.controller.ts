import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { TodosService } from 'src/services'; // This should not be here

export class TodosGetController implements Controller {
  constructor(private service: TodosService) {};

  async run(req: Request, res: Response): Promise<void> {
    try {
      const todos = await this.service.getTodos();
      if (Object.entries(todos).length === 0) {
        res.status(httpStatus.CREATED).json('No items yet!');
      } else {
        res.status(httpStatus.CREATED).json(todos);
      }
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(`${error}`);
    }
  }
}
