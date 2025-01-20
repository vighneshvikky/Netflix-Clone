import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjNiM2ExNWQ2MDA3YjQ1MDMyMTdkZWQ1YThlMjIxNyIsIm5iZiI6MTczNjU4MDY2MS44NSwic3ViIjoiNjc4MjFlMzVhYmFiYmJhMDQwYmIxM2VkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HbcXEpVxgrZTDH8LWNSG8DWZo1Nuxj31q9mbe1m1yAY'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  }

   getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  }
}
