import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import {Producto} from './producto.model';
import {Persona} from './persona.model';

@model()
export class Pedido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'number',
    required: true,
  })
  estado: number;



  @hasOne(() => Producto, {keyTo: 'pedidoid'})
  producto: Producto;

  @belongsTo(() => Persona)
  personaId: string;

  @property({
    type: 'string',
  })
  PersonaId?: string;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
