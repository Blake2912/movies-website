import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Tomatoes, TomatoesSchema } from './tomatoes.schema';
import { Imdb, ImdbSchema } from './imdb.schema';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop({ type: String })
  plot: string;

  @Prop({ type: Array<string> })
  genres: string[];

  @Prop({ type: Number })
  runtime: number;

  @Prop({ type: Array<string> })
  cast: string[];

  @Prop({ type: String })
  poster: string;

  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  fullplot: string;

  @Prop({ type: Array<string> })
  languages: string[];

  @Prop({ type: Date })
  lastupdated: Date;

  @Prop({ type: Number })
  year: number;

  @Prop({ type: ImdbSchema })
  imdb: Imdb;

  @Prop({ type: Array<string> })
  countries: string[];

  @Prop({ type: String })
  type: string;

  @Prop({ type: TomatoesSchema })
  tomatoes: Tomatoes;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
