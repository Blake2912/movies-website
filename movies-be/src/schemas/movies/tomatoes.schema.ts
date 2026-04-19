import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { RatingSchema, Rating } from './rating.schema';

@Schema({ _id: false })
export class Tomatoes {
  @Prop({ type: RatingSchema })
  viewer: Rating;

  @Prop({ type: Number })
  fresh: number;

  @Prop({ type: RatingSchema })
  critic: Rating;

  @Prop({ type: Number })
  rotten: number;

  @Prop({ type: Date })
  lastUpdated: Date;
}

export const TomatoesSchema = SchemaFactory.createForClass(Tomatoes);
