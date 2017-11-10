import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

    constructor(private http: Http) { }

    getAll(themeId: string) {
        return this.http.get(`/api/article/theme/${themeId}`)
        .toPromise();
    }

    get(id: string) {
        return this.http.get(`/api/theme/${id}`)
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
