import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
    // return 'this will return all movies';
  }

  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `we are searching for a movie ${searchingYear}`;
  // }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
    // return `this will return one Movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    console.log(movieData);
    // return 'This will create a movie';
    // return movieData;
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
    // return `this will delete a movie ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    // return `this will update a movie ${movieId}`;

    // return {
    //   updatedMovies: movieId,
    //   ...updateData,
    // };

    return this.moviesService.update(movieId, updateData);
  }
}
