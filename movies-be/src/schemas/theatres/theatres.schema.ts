import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { LocationSchema, Location } from './location.schema';
import { HydratedDocument } from 'mongoose';

export type TheatreDocument = HydratedDocument<Theatre>;

@Schema()
export class Theatre {
  @Prop({ type: Number })
  theatreId: number;

  @Prop({ type: LocationSchema })
  location: Location;
}

export const TheatreSchema = SchemaFactory.createForClass(Theatre);
