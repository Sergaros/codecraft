import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';

@Injectable()
export class ArticleService {

    constructor(private http: Http) { }

    getAll(themeId: string) {
        return this.http.get(`/api/article/theme/${themeId}`)
        .toPromise();
    }

    get(id: string) {
        return this.http.get(`/api/article/${id}`)
        .toPromise();
    }

    add(article: any) {
        return this.http.post('/api/article', article)
        .toPromise();
    }

    deleteAll(themeId: string) {
        return this.http.delete(`/api/article/theme/${themeId}`)
        .toPromise();
    }

    delete(id: string) {
        return this.http.delete(`/api/article/${id}`)
        .toPromise();
    }

    update(id: string, data: any) {
        return this.http.put(`/api/article/${id}`, data)
        .toPromise();
    }

}
