import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false }) // important for nested objects
export class Rating {
  @Prop({ type: Number })
  rating: number;

  @Prop({ type: Number })
  numReviews: number;

  @Prop({ type: Number })
  meter: number;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
