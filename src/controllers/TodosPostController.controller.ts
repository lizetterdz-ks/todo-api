import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { TodosService } from 'src/services'; // This should not be here

export class TodosPostController implements Controller {
  constructor(private service: TodosService) {};

  async run(req: Request, response: Response): Promise<void> {
    const { text } = req.body;

    try {
      const todo = await this.service.addTodos(text);
      response.status(httpStatus.CREATED).json(todo);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR).json(`${error}`);
    }
  }
}
