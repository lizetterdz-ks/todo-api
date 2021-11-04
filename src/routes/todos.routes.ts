import { Router, Request, Response } from 'express';
import { todosGetController, todosPostController, todosPutController, todosDeleteController } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /todos
   * Create a new user
   */
  router.post('/todos', (req: Request, res: Response) => todosPostController.run(req, res));
  
  /**
   * GET /todos
   * Get all users
   */
  router.get('/todos', (req: Request, res: Response) => todosGetController.run(req, res));

  /**
   * GET /todos/:id
   * Get a user
   */
//    router.get('/todos/:id', (req: Request, res: Response) => userGetController.run(req, res));

   /**
   * PUT /todos/:id
   * Update a user
   */
    router.put('/todos/:id', (req: Request, res: Response) => todosPutController.run(req, res));

    /**
   * DELETE /todos/:id
   * Delete a user
   */
     router.delete('/todos/:id', (req: Request, res: Response) => todosDeleteController.run(req, res));
};
