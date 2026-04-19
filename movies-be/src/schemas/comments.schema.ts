import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CommentsDocument = HydratedDocument<Comments>;

@Schema()
export class Comments {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: Types.ObjectId, ref: 'movies' })
  movie_id: Types.ObjectId;

  @Prop({ type: String })
  text: string;

  @Prop({ type: Date })
  date: Date;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
