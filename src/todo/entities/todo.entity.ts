import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop()
  desc?: string;

  @Prop({ required: true })
  username?: string;
}

export type TodoDocument = Todo & Document;
export const TodoSchema = SchemaFactory.createForClass(Todo);