import { Repository } from 'typeorm';

export abstract class BaseService<T> {
  protected _model: Repository<T>;

  async findAll(): Promise<T[]> {
    return await this._model.find();
  }

  async findById(id: string): Promise<T> {
    return await this._model.findOne(id);
  }

  async findOne(options: any): Promise<T> {
    return await this._model.findOne(options);
  }

  async create<Dto>(item: Dto): Promise<T> {
    return await this._model.save(item);
  }

  async update<Dto>(id: string, item: Dto) {
    return this._model.update(id, item);
  }

  async delete(id: string): Promise<any> {
    return this._model.softDelete(id);
  }

  get getRepository() {
    return this._model;
  }
}
