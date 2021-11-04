import { Todo, TodoAttributes } from '../models/Todo';

export class TodosService {

  async addTodos(text: any): Promise<TodoAttributes> {
    try {
      const todo = await Todo.create({text: text});
    //   console.log(todo);
      return todo;
    } catch (error) {
        throw error;
    }
  }

  async getTodos(): Promise<Array<TodoAttributes>> {
    try {
      const todo = await Todo.find({});
      return todo;
    } catch (error) {
      throw new Error('Error getting todos');
    }
  }

  async updateTodo(id: string, text: string): Promise<TodoAttributes | null> {
    try {
      await Todo.findByIdAndUpdate(
        id,
        { text: text }
      )
      const todo = await Todo.findById(id);
      return todo;
    } catch (error) {
      throw new Error('Error updating an item');
    }
  }

  async deleteTodo(id: string): Promise<TodoAttributes | null> {
    try {
      const todo = await Todo.findOneAndDelete(
        { _id : id }
      );
      return todo;
    } catch (error) {
      throw new Error('Error deleting item');
    }
  }
}
