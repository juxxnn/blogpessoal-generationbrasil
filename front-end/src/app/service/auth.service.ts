import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://blogpessoaljuliana.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://blogpessoaljuliana.herokuapp.com/usuarios/cadastrar', usuario)
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('https://blogpessoaljuliana.herokuapp.com/usuarios/atualizar', usuario)
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://blogpessoaljuliana.herokuapp.com/usuarios/${id}`)
  }

  logado() {
    let ok = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }

  adm(){
    let ok = false

    if (environment.tipo == 'adm') {
      ok = true
    }

    return ok
  }
}
