import { todosService } from '../services'; // This should not be here

import { TodosGetController } from './TodosGetController.controller';
import { TodosPostController } from './TodosPostController.controller';
import { TodosPutController } from './TodosPutController.controller';
import { TodosDeleteController } from './TodosDeleteController.controller';

export const todosGetController = new TodosGetController(todosService);
export const todosPostController = new TodosPostController(todosService);
export const todosPutController = new TodosPutController(todosService);
export const todosDeleteController = new TodosDeleteController(todosService);
