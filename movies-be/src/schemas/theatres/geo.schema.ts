import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Geo {
  @Prop({ type: String })
  type: string;

  @Prop({ type: Array<number> })
  coordinates: number[];
}

export const GeoSchema = SchemaFactory.createForClass(Geo);
