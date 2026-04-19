import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Address, AddressSchema } from './address.schema';
import { Geo, GeoSchema } from './geo.schema';

@Schema()
export class Location {
  @Prop({ type: AddressSchema })
  address: Address;

  @Prop({ type: GeoSchema })
  geo: Geo;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
