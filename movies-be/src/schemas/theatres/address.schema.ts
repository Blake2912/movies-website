import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Address {
  @Prop({ type: String })
  street1: string;

  @Prop({ type: String })
  city: string;

  @Prop({ type: String })
  zipcode: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
