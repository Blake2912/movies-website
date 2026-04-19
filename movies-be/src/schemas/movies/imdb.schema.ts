import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Imdb {
  @Prop({ type: Number })
  rating: number;
  @Prop({ type: Number })
  votes: number;
  @Prop({ type: Number })
  id: number;
}

export const ImdbSchema = SchemaFactory.createForClass(Imdb);
